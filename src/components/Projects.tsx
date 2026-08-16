import "../App.scss";
import { useState } from "react";
import {
  Box,
  Tabs,
  Tab
} from "@mui/material";
import MarkdownRenderer from "./MarkdownRenderer";

class Project {
  private name: string;
  private filePath: string;

  public constructor(name: string, filePath: string) {
    this.name = name;
    this.filePath = filePath;
  }

  public getName(): string {
    return this.name;
  }

  public getFilePath(): string {
    return this.filePath;
  }
}

const projects = [
  new Project(
    "Automated Sign Language Detection Device",
    "projects/automatedSignLanguage/automatedSignLanguage.md"
  ),
  new Project(
    "Arctis Sonar GUI",
    "projects/arctisSonarGUI/arctisSonarGUI.md"
  )
];


const ProjectsView = () => {
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className="tabAndContent">
      <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%", height: "100%" }}>
        <Tabs
          orientation="vertical"
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          {projects.map((project) => {
            return <Tab label={project.getName()} />;
          })}
        </Tabs>
      </Box>

      <MarkdownRenderer filePath={projects[tabValue].getFilePath()} />
    </div>
  );
};

export default ProjectsView;

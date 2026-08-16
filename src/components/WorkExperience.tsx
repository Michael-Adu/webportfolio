import "../App.scss";
import { useState, useEffect } from "react";
import {
    Box, Typography, Tab, Tabs, Divider
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

class WorkExperience {
    public company: string;
    public position: string;
    public location: string;
    public period: string;
    public website: string;
    public description: string;
    public models: string[];

    public constructor(company: string, position: string, location: string, period: string, website: string, description: string, models: string[]) {

        this.company = company;
        this.position = position;
        this.location = location;
        this.period = period;
        this.website = website;
        this.description = description;
        this.models = models;
    }

    public getTabLabel(): string {
        var label = `${this.position}: ${this.company}`;
        return label;
    }

    public getFullDescription(): string {
        var fullDescription = `# ${this.position}\n`;
        fullDescription += `## [${this.company}](${this.website})\n`;
        fullDescription += `Period: ${this.period}\n`;
        fullDescription += `---\n\n`;
        fullDescription += this.models.length > 0 ? `<div class="model-viewer-container">${this.models.join('')}</div>\n\n` : '';
        fullDescription += `${this.description}`;

        return fullDescription;
    }
}

const WorkExperienceView = () => {
    const [tabValue, setTabValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    }

    const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);

    useEffect(() => {
        fetch("/workExperience.json").then(res => res.json()).then(workExperienceData => {
            setWorkExperiences(workExperienceData.map((item: any) => {
                return new WorkExperience(item.company, item.position, item.location, item.period, item.website, item.description, item.models);
            }));
        })
        setTabValue(0); // Reset tab value to 0 when workExperiences change
    }, []);


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
                    {workExperiences.map((experience, index) => (
                        <Tab key={index} label={experience.getTabLabel()} />
                    ))}
                </Tabs>
            </Box>
            <Box
                className="markdown"
                sx={{
                    p: 3,
                    width: "100%",
                    boxSizing: "border-box",
                    overflow: "auto",
                    "& pre": {
                        maxWidth: "100%",
                        overflow: "auto",
                        backgroundColor: "transparent",
                        padding: 2,
                        borderRadius: 1,
                    },
                    "& table": {
                        display: "block",
                        width: "100%",
                        overflow: "auto",
                    },
                }}
            >
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({ children }) => (
                            <Typography variant="h4" gutterBottom>
                                {children}
                            </Typography>
                        ),
                        p: ({ children }) => (
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2,
                                    wordBreak: "break-word",
                                    whiteSpace: "normal",
                                    textAlign: "ustify",
                                    fontFamily: "",
                                }}
                            >
                                {children}
                            </Typography>
                        ),
                        img: ({ src, alt }) => (
                            <Box
                                component="img"
                                src={src}
                                alt={alt}
                                sx={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    borderRadius: 2,
                                    my: 2,
                                }}
                            />
                        ),
                        hr: () => <Divider sx={{ my: 3 }} />,
                    }}
                >
                    {workExperiences.length > 0 ? workExperiences[tabValue].getFullDescription() : "Loading..."}
                </ReactMarkdown>
            </Box>
        </div>
    );
};

export default WorkExperienceView;
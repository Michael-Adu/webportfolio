import { Canvas } from "@react-three/fiber";
import "./App.scss";
import WebPortfolioHeader from "./components/Header";
import { OrbitControls } from "@react-three/drei";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SkillChips from "./components/Skills";
import BaseMesh from "./components/BaseMesh";
import React, { useState } from "react";
import CustomTabPanel from "./components/Tabs";
import AboutMe from "./components/AboutMe";
import ProjectsView from "./components/Projects";
import WorkExperienceView from "./components/WorkExperience";

function App() {
  const [tabValue, setTabValue] = useState(-1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className="main">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 20 }}
        shadows
        className="myModelCanvas"
      >
        <ambientLight />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        <directionalLight position={[0, 10, 7]} intensity={10} />
        <group position={[0, -1.8, 0]}>
          <BaseMesh />
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={1} />
        </mesh>
      </Canvas>
      <div className="content">
        <WebPortfolioHeader />
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Tabs
            value={tabValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              height: "100%",
            }}
          >
            <Tab label="About" />
            <Tab label="Work Experience" />
            <Tab label="Skills" />
            <Tab label="Projects" />
          </Tabs>
        </Box>
        <div id="tabContent">
          <CustomTabPanel value={tabValue} index={0}>
            <AboutMe />
          </CustomTabPanel>
          <CustomTabPanel value={tabValue} index={1}>
            <WorkExperienceView />
          </CustomTabPanel>
          <CustomTabPanel value={tabValue} index={2}>
            <SkillChips />
          </CustomTabPanel>
          <CustomTabPanel value={tabValue} index={3}>
            <ProjectsView />
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}

export default App;

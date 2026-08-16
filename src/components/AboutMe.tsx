import { Box } from "@mui/material";
import MarkdownRenderer from "./MarkdownRenderer";

const AboutMe = () => {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          textAlign: "left"
        }}
      >
        <MarkdownRenderer filePath={"aboutMe.md"} />
      </Box>
  );
};

export default AboutMe;

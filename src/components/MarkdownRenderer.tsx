import "../App.scss";
import { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Divider } from "@mui/material";
import ReactMarkdown from "react-markdown";
import '@google/model-viewer';
import rehypeRaw from 'rehype-raw';

function resolveMarkdownAssets(markdown: string) {

  return markdown.replace(
    /(!?\[[^\]]*\]\(\s*["']?)([^)"'\s]+)(["']?\))|(\b(?:src|href)\s*=\s*["'])([^"']+)(["'])/gi,
    (
      match,
      mdPrefix,
      mdSource,
      mdSuffix,
      htmlPrefix,
      htmlSource,
      htmlSuffix
    ) => {
      const source = mdSource ?? htmlSource


      if (/^(https?:)?\/\//i.test(source)) {
        return match
      }

      const basename = source.split('/').pop() ?? source

      if (!/\.(png|jpe?g|webp|gif|svg|glb|gltf)$/i.test(basename)) {
        return match
      }

      const resolved =
        `${import.meta.env.BASE_URL}${source.replace(/^\/+/, '')}`

      if (mdSource !== undefined) {
        return `${mdPrefix}${resolved}${mdSuffix}`
      }

      return `${htmlPrefix}${resolved}${htmlSuffix}`
    }
  )
}



// 2. Sub-component for rendering the Markdown
const MarkdownRenderer = ({ filePath }: { filePath: string }) => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(filePath)
      .then((res) => {
        if (!res.ok) throw new Error(`Could not find ${filePath}`);
        return res.text().then(resolveMarkdownAssets);
      })
      .then((text) => {
        if (isMounted) {
          setContent(text);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [filePath]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" sx={{ p: 3 }}>
        {error}
      </Typography>
    );
  }

  return (
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
          backgroundColor: "#f5f5f5",
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
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;

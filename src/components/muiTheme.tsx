import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {

    fontFamily: [
      'Pixelon',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          marginLeft: 'auto'
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // Change vertical and horizontal padding
          padding: '5px 5px', 
          // Note: MUI Tabs often have a minWidth and minHeight 
          // You may need to reduce these to see the padding effect
          minWidth: 0, 
          minHeight: '32px',
          '@media (min-width: 600px)': {
            minWidth: 0, // Overrides MUI's default responsive minWidth
          },

        },
      },
    },
  },
});

export default theme;
import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: "8px",
          color: "black",
          span: {
            display: "none",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        contained: {
          // Some CSS
          maxWidth: "40px",
          backgroundColor: "white",
          boxShadow: "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
          "&:hover": {
            backgroundColor: "white",
            boxShadow: "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 2px 4px 0 rgb(0 0 0 / 8%)",
          },
          "&:active": {
            boxShadow: "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 0 2px 0 rgb(0 0 0 / 4%);",
          },
        },
      },
    },
  },
});

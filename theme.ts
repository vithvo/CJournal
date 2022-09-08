import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          borderRadius: "8px",
          color: "black",
          textTransform: "inherit",
          span: {
            display: "none",
          },
          "&:hover": {
            backgroundColor: "transparent",
            filter: "brightness(0.99)",
          },
          disableRipple: true,
        },

        contained: {
          // Some CSS
          transition: "all 0s linear",
          // maxWidth: "40px",
          backgroundColor: "white",
          boxShadow: "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 2px 2px 0 rgb(0 0 0 / 6%)",
          "&:hover": {
            backgroundColor: "white",
            boxShadow: "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 2px 1px 0 rgb(0 0 0 / 10%)",
          },
          "&:active": {
            boxShadow: "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 0 1px 0 rgb(0 0 0 / 4%),",
            filter: "brightness(1)",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: "none",
          margin: "0",
          maxWidth: "640px",
          borderRadius: "8px",
        },
      },
    },
  },
});

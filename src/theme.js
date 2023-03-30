import { createTheme } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

export let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440,
    },
  },

  palette: {
    primary: {
      main: "#FCE34D",
    },
    secondary: {
      main: "#797A82",
    },
  },

  typography: {
    fontFamily: "Manrope",
    lineHeight: "1.5",
    h1: {
      fontSize: 50,

      [breakpoints.down(992)]: {
        fontSize: 40,
      },

      [breakpoints.down(768)]: {
        fontSize: 28,
      },
    },

    h2: {
      fontSize: 40,
      [breakpoints.down(992)]: {
        fontSize: 30,
      },

      [breakpoints.down(576)]: {
        fontSize: 20,
      },
    },

    h3: {
      fontSize: 30,
      [breakpoints.down(768)]: {
        fontSize: 16,
      },
    },

    h4: {
      fontSize: 26,
      [breakpoints.down(768)]: {
        fontSize: 20,
      },
    },

    h5: {
      fontSize: 24,
      [breakpoints.down(768)]: {
        fontSize: 14,
      },
    },

    h6: {
      fontSize: 20,
      [breakpoints.down(992)]: {
        fontSize: 16,
      },
    },

    subtitle1: {
      fontSize: 18,
      [breakpoints.down(768)]: {
        fontSize: 14,
      },
    },

    subtitle2: {
      fontSize: 16,

      [breakpoints.down(576)]: {
        fontSize: 14,
      },
    },

    body1: {
      fontSize: 12,
    },

    body2: {
      fontSize: 14,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "700",
          lineHeight: "112.69%",
          textTransform: "uppercase",
          color: "#1E1F25",
          borderRadius: 30,

          "&.MuiButton-sizeLarge": {
            padding: "29px 80px",
            fontSize: 20,
            borderRadius: "76px",

            [breakpoints.down(992)]: {
              padding: "22px 35px",
            },
          },

          "&.MuiButton-sizeMedium": {
            padding: "18px 40px",
            fontSize: "16px",
          },

          "&.MuiButton-outlined": {
            color: "#797A82",
          },

          "&.MuiButton-sizeSmall": {
            padding: "7px 10px 8px",
          },
        },
      },
      variants: [
        {
          props: { variant: "oval" },
          style: {},
        },
      ],
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "#EDEDEF",
            borderRadius: "76px",
            border: "none",
          },

          "& input": {
            border: "none",
            "&::placeholder": {
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "130%",
              color: "#1E1F25",
            },
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {},
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: {},
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {},
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {},
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const colors = {
  black: "#000",
  blue: "#82BED4",
  purple: "#55386C",
  pink: "#BB4F82",
  yellow: "#FBC439",
  white: "#fff",
};

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  "2xl": `(min-width: ${breakpoints["2xl"]})`,
};

export const sizes = [
  {
    fonts: {
      xs: "12px",
      sm: "18px",
      md: "26px",
      lg: "36px",
      xl: "46px",
      "2xl": "60px",
    },
  },
];

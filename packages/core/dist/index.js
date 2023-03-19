"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  borderWidths: () => borderWidths,
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  opacity: () => opacity,
  radii: () => radii,
  shadows: () => shadows,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/borderWidths.ts
var borderWidths = {
  default: "0px",
  thin: "1px",
  medium: "1.5px",
  thick: "2px",
  heavy: "4px"
};

// src/colors.ts
var colors = {
  // Brand Colors
  "primary-main": "#9333EA",
  "primary-light": "#A855F7",
  "primary-dark": "#7E22CE",
  // Semantic Colors
  "success-main": "#16A34A",
  "success-light": "#22C55E",
  "success-dark": "#15803D",
  "danger-main": "#DC2626",
  "danger-light": "#EF4444",
  "danger-dark": "#B91C1C",
  "warning-main": "#F59E0B",
  "warning-light": "#FBBF24",
  "warning-dark": "#D97706",
  // Neutral Colors
  black: "#000000",
  white: "#FFFFFF",
  grey100: "#E1E1E6",
  grey200: "#C4C4CC",
  grey300: "#8D8D99",
  grey400: "#7C7C8A",
  grey500: "#505059",
  grey600: "#323238",
  grey700: "#29292E",
  grey800: "#202024",
  grey900: "#121214",
  grey950: "#09090A",
  // Aliases
  title: "#E1E1E6",
  "base-text": "#C4C4CC",
  "help-text": "#8D8D99",
  "input-prefix": "#7C7C8A",
  "input-icon": "#505059",
  "tertiary-shape": "#323238",
  "secondary-shape": "#29292E",
  "primary-shape": "#202024",
  background: "#121214",
  tooltip: "#09090A"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  reading: "Spectral, sans-serif",
  code: "Fira code, monospace"
};

// src/fontSizes.ts
var fontSizes = {
  "9xl": "8rem",
  "8xl": "6rem",
  "7xl": "4.5rem",
  "6xl": "3.75rem",
  "5xl": "3rem",
  "4xl": "2.25rem",
  "3xl": "1.875rem",
  "2xl": "1.5rem",
  xl: "1.25rem",
  lg: "1.125rem",
  md: "1rem",
  sm: "0.875rem",
  xs: "0.75rem",
  xxs: "0.625rem"
};

// src/fontWeights.ts
var fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

// src/lineHeights.ts
var lineHeights = {
  tall: "180%",
  base: "160%",
  short: "140%",
  shorter: "125%",
  none: "100%"
};

// src/opacity.ts
var opacity = {
  default: "100%",
  semiOpaque: "90%",
  intense: "75%",
  medium: "50%",
  light: "25%",
  semiTransparent: "10%"
};

// src/radii.ts
var radii = {
  default: "0px",
  xs: "2.5px",
  sm: "5px",
  md: "10px",
  lg: "20px",
  full: "9999px"
};

// src/shadows.ts
var shadows = {
  base: "0px 5px 20px 0px rgba(0,0,0,0.6)"
};

// src/space.ts
var space = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  borderWidths,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  opacity,
  radii,
  shadows,
  space
});

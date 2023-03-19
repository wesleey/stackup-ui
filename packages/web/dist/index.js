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
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);
var import_core = require("@stackup-ui/core");
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: {
    ...import_react.defaultThemeMap,
    width: "space",
    height: "space",
    opacity: "opacity"
  },
  theme: {
    colors: import_core.colors,
    space: import_core.space,
    fontSizes: import_core.fontSizes,
    fonts: import_core.fonts,
    fontWeights: import_core.fontWeights,
    lineHeights: import_core.lineHeights,
    borderWidths: import_core.borderWidths,
    radii: import_core.radii,
    opacity: import_core.opacity,
    shadows: import_core.shadows
  },
  media: {
    xs: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1280px)",
    xl: "(max-width: 1536px)"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
});

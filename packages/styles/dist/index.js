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
  avatarContainer: () => avatarContainer,
  avatarFallback: () => avatarFallback,
  avatarImage: () => avatarImage,
  box: () => box,
  button: () => button,
  circularProgressCircle: () => circularProgressCircle,
  circularProgressContainer: () => circularProgressContainer,
  heading: () => heading,
  step: () => step,
  steps: () => steps,
  text: () => text,
  textArea: () => textArea,
  textFieldIcon: () => textFieldIcon,
  textFieldInput: () => textFieldInput,
  textFieldPrefix: () => textFieldPrefix,
  textFieldRoot: () => textFieldRoot
});
module.exports = __toCommonJS(src_exports);

// src/avatar.ts
var import_web = require("@stackup-ui/web");
var avatarContainer = (0, import_web.css)({
  width: "$16",
  height: "$16",
  display: "inline-block",
  borderRadius: "$full",
  overflow: "hidden"
});
var avatarImage = (0, import_web.css)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var avatarFallback = (0, import_web.css)({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$grey600",
  color: "$grey800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/box.ts
var import_web2 = require("@stackup-ui/web");
var box = (0, import_web2.css)({
  padding: "$8",
  borderRadius: "$sm",
  background: "$primary-shape"
});

// src/button.ts
var import_web3 = require("@stackup-ui/web");
var button = (0, import_web3.css)({
  all: "unset",
  cursor: "pointer",
  fontFamily: "$default",
  fontWeight: "$bold",
  textAlign: "center",
  borderRadius: "$sm",
  boxSizing: "border-box",
  textTransform: "uppercase",
  transition: "background .2s ease 0s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    opacity: 0.56,
    cursor: "not-allowed"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$primary-main",
        "&:not(:disabled):hover": {
          background: "$primary-light"
        },
        "&:disabled": {
          backgroundColor: "$primary-dark"
        }
      },
      secondary: {
        color: "$white",
        border: "1px solid $primary-main",
        "&:not(:disabled):hover": {
          background: "$primary-main"
        }
      },
      tertiary: {
        color: "$white",
        background: "$secondary-shape",
        "&:not(:disabled):hover": {
          background: "$tertiary-shape"
        }
      },
      quaternary: {
        color: "$white",
        "&:not(:disabled):hover": {
          background: "$secondary-shape"
        }
      }
    },
    size: {
      sm: {
        height: 30,
        padding: "0 $4",
        fontSize: "$xs"
      },
      md: {
        height: 40,
        padding: "0 $6",
        fontSize: "$sm"
      },
      lg: {
        height: 50,
        padding: "0 $8",
        fontSize: "$sm"
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});

// src/circularProgress.ts
var import_web4 = require("@stackup-ui/web");
var circularRotateKeyframe = (0, import_web4.keyframes)({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var circularProgressContainer = (0, import_web4.css)({
  color: "$primary-main",
  display: "inline-block",
  animation: `${circularRotateKeyframe} 1.4s linear infinite`
});
var circularDashKeyframe = (0, import_web4.keyframes)({
  "0%": {
    strokeDasharray: "1,200",
    strokeDashoffset: 0
  },
  "50%": {
    strokeDasharray: "100,200",
    strokeDashoffset: -15
  },
  "100%": {
    strokeDasharray: "100,200",
    strokeDashoffset: -125
  }
});
var circularProgressCircle = (0, import_web4.css)({
  stroke: "CurrentColor",
  strokeDasharray: "80,200",
  strokeDashoffset: 0,
  animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`
});

// src/heading.ts
var import_web5 = require("@stackup-ui/web");
var heading = (0, import_web5.css)({
  color: "$title",
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  variants: {
    size: {
      "6xl": { fontSize: "$9xl" },
      "5xl": { fontSize: "$8xl" },
      "4xl": { fontSize: "$7xl" },
      "3xl": { fontSize: "$6xl" },
      "2xl": { fontSize: "$5xl" },
      lg: { fontSize: "$4xl" },
      md: { fontSize: "$2xl" },
      sm: { fontSize: "$xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/multiStep.ts
var import_web6 = require("@stackup-ui/web");
var steps = (0, import_web6.css)({
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  marginTop: "$1",
  gap: "$2"
});
var step = (0, import_web6.css)({
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$grey600",
  variants: {
    active: {
      true: {
        backgroundColor: "$grey100"
      }
    }
  }
});

// src/text.ts
var import_web7 = require("@stackup-ui/web");
var text = (0, import_web7.css)({
  color: "$base-text",
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  variants: {
    size: {
      "9xl": { fontSize: "$9xl" },
      "8xl": { fontSize: "$8xl" },
      "7xl": { fontSize: "$7xl" },
      "6xl": { fontSize: "$6xl" },
      "5xl": { fontSize: "$5xl" },
      "4xl": { fontSize: "$4xl" },
      "3xl": { fontSize: "$3xl" },
      "2xl": { fontSize: "$2xl" },
      xl: { fontSize: "$xl" },
      lg: { fontSize: "$lg" },
      md: { fontSize: "$md" },
      sm: { fontSize: "$sm" },
      xs: { fontSize: "$xs" },
      xxs: { fontSize: "$xxs" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/textArea.ts
var import_web8 = require("@stackup-ui/web");
var textArea = (0, import_web8.css)({
  padding: "$3 $4",
  borderRadius: "$sm",
  border: "2px solid $grey900",
  backgroundColor: "$grey900",
  boxSizing: "border-box",
  resize: "none",
  color: "$white",
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$md",
  width: "100%",
  minHeight: 80,
  outline: 0,
  "&:focus": {
    borderColor: "$primary-main"
  },
  "&:disabled": {
    opacity: 0.56,
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$grey500"
  }
});

// src/textField.ts
var import_web9 = require("@stackup-ui/web");
var textFieldRoot = (0, import_web9.css)({
  position: "relative",
  borderRadius: "$sm",
  border: "2px solid $background",
  backgroundColor: "$background",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  "&:has(input:focus)": {
    borderColor: "$primary-main",
    svg: {
      color: "$primary-main"
    }
  },
  "&:has(input:disabled)": {
    opacity: 0.56,
    cursor: "not-allowed"
  },
  "span:first-child": {
    left: "16px"
  },
  "span:last-child": {
    right: "16px"
  },
  "div:first-child": {
    paddingLeft: "1rem"
  },
  "div:last-child": {
    paddingRight: "1rem"
  },
  "&:has(span:first-child) input": {
    paddingLeft: "2.75rem"
  },
  "&:has(span:last-child) input": {
    paddingRight: "2.75rem"
  },
  "&:has(div:first-child) input": {
    paddingLeft: 0
  },
  "&:has(div:last-child) input": {
    paddingRight: 0
  }
});
var textFieldIcon = (0, import_web9.css)({
  display: "flex",
  color: "$input-icon",
  transform: "translateY(-50%)",
  transition: "fill .2s ease 0s",
  position: "absolute",
  top: "50%"
});
var textFieldPrefix = (0, import_web9.css)({
  color: "$input-prefix",
  fontFamily: "$default",
  fontWeight: "regular",
  fontSize: "$md"
});
var textFieldInput = (0, import_web9.css)({
  fontFamily: "$default",
  fontWeight: "regular",
  fontSize: "$md",
  width: "100%",
  height: 50,
  padding: "0 1rem",
  color: "$white",
  background: "transparent",
  outline: 0,
  border: 0,
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$grey500"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  avatarContainer,
  avatarFallback,
  avatarImage,
  box,
  button,
  circularProgressCircle,
  circularProgressContainer,
  heading,
  step,
  steps,
  text,
  textArea,
  textFieldIcon,
  textFieldInput,
  textFieldPrefix,
  textFieldRoot
});

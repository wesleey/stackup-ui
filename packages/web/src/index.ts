import {
  colors,
  space,
  fontSizes,
  fonts,
  fontWeights,
  lineHeights,
  borderWidths,
  radii,
  opacity,
  shadows,
} from '@stackup-ui/core'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },

  theme: {
    colors,
    space,
    fontSizes,
    fonts,
    fontWeights,
    lineHeights,
    borderWidths,
    radii,
    opacity,
    shadows,
  },

  media: {
    xs: '(max-width: 640px)',
    sm: '(max-width: 768px)',
    md: '(max-width: 1024px)',
    lg: '(max-width: 1280px)',
    xl: '(max-width: 1536px)',
  },
})

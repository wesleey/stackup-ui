import { css } from '@stackup-ui/web'

export const heading = css({
  color: '$title',
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      '6xl': { fontSize: '$9xl' },
      '5xl': { fontSize: '$8xl' },
      '4xl': { fontSize: '$7xl' },
      '3xl': { fontSize: '$6xl' },
      '2xl': { fontSize: '$5xl' },
      lg: { fontSize: '$4xl' },
      md: { fontSize: '$2xl' },
      sm: { fontSize: '$xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

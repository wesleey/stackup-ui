import { css } from '@stackup-ui/web'

export const button = css({
  all: 'unset',
  cursor: 'pointer',
  fontFamily: '$default',
  fontWeight: '$bold',
  textAlign: 'center',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  textTransform: 'uppercase',
  transition: 'background .2s ease 0s',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    opacity: 0.56,
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary-main',

        '&:not(:disabled):hover': {
          background: '$primary-light',
        },

        '&:disabled': {
          backgroundColor: '$primary-dark',
        },
      },

      secondary: {
        color: '$white',
        border: '1px solid $primary-main',

        '&:not(:disabled):hover': {
          background: '$primary-main',
        },
      },

      tertiary: {
        color: '$white',
        background: '$secondary-shape',

        '&:not(:disabled):hover': {
          background: '$tertiary-shape',
        },
      },

      quaternary: {
        color: '$white',

        '&:not(:disabled):hover': {
          background: '$secondary-shape',
        },
      },
    },

    size: {
      sm: {
        height: 30,
        padding: '0 $4',
        fontSize: '$xs',
      },

      md: {
        height: 40,
        padding: '0 $6',
        fontSize: '$sm',
      },

      lg: {
        height: 50,
        padding: '0 $8',
        fontSize: '$sm',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

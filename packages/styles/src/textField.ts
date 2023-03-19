import { css } from '@stackup-ui/web'

export const textFieldRoot = css({
  position: 'relative',
  borderRadius: '$sm',
  border: '2px solid $background',
  backgroundColor: '$background',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',

  '&:has(input:focus)': {
    borderColor: '$primary-main',

    svg: {
      color: '$primary-main',
    },
  },

  '&:has(input:disabled)': {
    opacity: 0.56,
    cursor: 'not-allowed',
  },

  'span:first-child': {
    left: '16px',
  },

  'span:last-child': {
    right: '16px',
  },

  'div:first-child': {
    paddingLeft: '1rem',
  },

  'div:last-child': {
    paddingRight: '1rem',
  },

  '&:has(span:first-child) input': {
    paddingLeft: '2.75rem',
  },

  '&:has(span:last-child) input': {
    paddingRight: '2.75rem',
  },

  '&:has(div:first-child) input': {
    paddingLeft: 0,
  },

  '&:has(div:last-child) input': {
    paddingRight: 0,
  },
})

export const textFieldIcon = css({
  display: 'flex',
  color: '$input-icon',
  transform: 'translateY(-50%)',
  transition: 'fill .2s ease 0s',

  position: 'absolute',
  top: '50%',
})

export const textFieldPrefix = css({
  color: '$input-prefix',
  fontFamily: '$default',
  fontWeight: 'regular',
  fontSize: '$md',
})

export const textFieldInput = css({
  fontFamily: '$default',
  fontWeight: 'regular',
  fontSize: '$md',

  width: '100%',
  height: 50,
  padding: '0 1rem',

  color: '$white',
  background: 'transparent',
  outline: 0,
  border: 0,

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$grey500',
  },
})

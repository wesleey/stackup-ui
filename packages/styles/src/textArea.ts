import { css } from '@stackup-ui/web'

export const textArea = css({
  padding: '$3 $4',
  borderRadius: '$sm',
  border: '2px solid $grey900',
  backgroundColor: '$grey900',
  boxSizing: 'border-box',

  resize: 'none',
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$md',
  width: '100%',
  minHeight: 80,
  outline: 0,

  '&:focus': {
    borderColor: '$primary-main',
  },

  '&:disabled': {
    opacity: 0.56,
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$grey500',
  },
})

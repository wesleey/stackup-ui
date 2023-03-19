import { css } from '@stackup-ui/web'

export const steps = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  marginTop: '$1',
  gap: '$2',
})

export const step = css({
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$grey600',

  variants: {
    active: {
      true: {
        backgroundColor: '$grey100',
      },
    },
  },
})

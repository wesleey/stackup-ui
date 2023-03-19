import { css } from '@stackup-ui/web'

export const avatarContainer = css({
  width: '$16',
  height: '$16',
  display: 'inline-block',
  borderRadius: '$full',
  overflow: 'hidden',
})

export const avatarImage = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const avatarFallback = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$grey600',
  color: '$grey800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

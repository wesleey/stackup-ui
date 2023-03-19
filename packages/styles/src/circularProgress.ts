import { css, keyframes } from '@stackup-ui/web'

const circularRotateKeyframe = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const circularProgressContainer = css({
  color: '$primary-main',
  display: 'inline-block',
  animation: `${circularRotateKeyframe} 1.4s linear infinite`,
})

const circularDashKeyframe = keyframes({
  '0%': {
    strokeDasharray: '1,200',
    strokeDashoffset: 0,
  },
  '50%': {
    strokeDasharray: '100,200',
    strokeDashoffset: -15,
  },
  '100%': {
    strokeDasharray: '100,200',
    strokeDashoffset: -125,
  },
})

export const circularProgressCircle = css({
  stroke: 'CurrentColor',
  strokeDasharray: '80,200',
  strokeDashoffset: 0,
  animation: `${circularDashKeyframe} 1.4s ease-in-out infinite`,
})

import * as React from 'react'
import { styled } from '@stackup-ui/web'

import {
  circularProgressContainer,
  circularProgressCircle,
} from '@stackup-ui/styles'

const CircularProgressContainer = styled('span', circularProgressContainer)
const CircularProgressCircle = styled('circle', circularProgressCircle)

export interface CircularProgressProps
  extends React.ComponentProps<typeof CircularProgressContainer> {}

export const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  return (
    <CircularProgressContainer {...props}>
      <svg viewBox="22 22 44 44">
        <CircularProgressCircle
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        />
      </svg>
    </CircularProgressContainer>
  )
}

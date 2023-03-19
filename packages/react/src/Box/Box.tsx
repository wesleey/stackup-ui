import * as React from 'react'
import { styled } from '@stackup-ui/web'
import { box } from '@stackup-ui/styles'

export const Box = styled('div', box)

export interface BoxProps extends React.ComponentProps<typeof Box> {
  as?: React.ReactElement
}

Box.displayName = 'Box'

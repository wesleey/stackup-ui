import * as React from 'react'
import { styled } from '@stackup-ui/web'
import { button } from '@stackup-ui/styles'

export const Button = styled('button', button)

export interface ButtonProps extends React.ComponentProps<typeof Button> {
  as?: React.ReactElement
}

Button.displayName = 'Button'

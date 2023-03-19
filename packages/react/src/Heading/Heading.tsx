import * as React from 'react'
import { styled } from '@stackup-ui/web'
import { heading } from '@stackup-ui/styles'

export const Heading = styled('h2', heading)

export interface HeadingProps extends React.ComponentProps<typeof Heading> {
  as?: React.ReactElement
}

Heading.displayName = 'Heading'

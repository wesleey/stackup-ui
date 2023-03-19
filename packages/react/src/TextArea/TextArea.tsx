import * as React from 'react'
import { styled } from '@stackup-ui/web'
import { textArea } from '@stackup-ui/styles'

export const TextArea = styled('textarea', textArea)

export interface TextAreaProps extends React.ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'

import * as React from 'react'
import { styled } from '@stackup-ui/web'

import {
  textFieldRoot,
  textFieldIcon,
  textFieldPrefix,
  textFieldInput,
} from '@stackup-ui/styles'

const TextFieldRoot = styled('div', textFieldRoot)
export interface TextFieldRootProps
  extends React.ComponentProps<typeof TextFieldRoot> {}

TextFieldRoot.displayName = 'TextField.Root'

const TextFieldIcon = styled('span', textFieldIcon)
export interface TextFieldIconProps
  extends React.ComponentProps<typeof TextFieldIcon> {}

TextFieldIcon.displayName = 'TextField.Icon'

const TextFieldPrefix = styled('div', textFieldPrefix)
export interface TextFieldPrefixProps
  extends React.ComponentProps<typeof TextFieldPrefix> {}

TextFieldPrefix.displayName = 'TextField.Prefix'

const TextFieldInput = styled('input', textFieldInput)
export interface TextFieldInputProps
  extends React.ComponentProps<typeof TextFieldInput> {}

TextFieldInput.displayName = 'TextField.Input'

export const TextField = {
  Root: TextFieldRoot,
  Icon: TextFieldIcon,
  Prefix: TextFieldPrefix,
  Input: TextFieldInput,
}

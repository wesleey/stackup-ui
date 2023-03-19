import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@stackup-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Label',
    disabled: false,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary', 'quaternary'],
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Quaternary: StoryObj<ButtonProps> = {
  args: {
    variant: 'quaternary',
  },
}

export const WithStartIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Label
        <Plus weight="bold" />
      </>
    ),
  },
}

export const WithEndIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Plus weight="bold" />
        Label
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

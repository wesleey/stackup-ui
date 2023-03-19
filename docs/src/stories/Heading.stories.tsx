import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@stackup-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Lorem ipsum',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['6xl', '5xl', '4xl', '3xl', '2xl', 'lg', 'md', 'sm'],
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

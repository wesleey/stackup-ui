import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@stackup-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [
        '9xl',
        '8xl',
        '7xl',
        '6xl',
        '5xl',
        '4xl',
        '3xl',
        '2xl',
        'xl',
        'lg',
        'md',
        'sm',
        'xs',
        'xxs',
      ],
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

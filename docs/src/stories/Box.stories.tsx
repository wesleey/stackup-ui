import { Meta, Story } from '@storybook/react'
import { Box, BoxProps, Text } from '@stackup-ui/react'

export default {
  title: 'Surfaces/Box',
} as Meta<BoxProps>

const Template: Story<BoxProps> = (args) => {
  return (
    <Box {...args}>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
        reprehenderit est veniam? Rem recusandae sint perspiciatis debitis
        corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa
        suscipit accusantium blanditiis voluptas numquam.
      </Text>
    </Box>
  )
}

export const Default = Template.bind({})

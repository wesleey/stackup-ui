import { Meta, Story } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@stackup-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
} as Meta<TextAreaProps>

const Template: Story<TextAreaProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Observations</Text>
      <TextArea {...args} />
    </Box>
  )
}

export const Default = Template.bind({})

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true,
}

import { Meta, Story } from '@storybook/react'
import { Box, Text, TextField, TextFieldInputProps } from '@stackup-ui/react'
import { Lock } from 'phosphor-react'

export default {
  title: 'Form/TextField',
  args: {
    placeholder: 'Placeholder',
    disabled: false,
  },
} as Meta<TextFieldInputProps>

const PrimaryTemplate: Story<TextFieldInputProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Email address</Text>
      <TextField.Root>
        <TextField.Input {...args} />
      </TextField.Root>
    </Box>
  )
}

export const Default = PrimaryTemplate.bind({})

export const Disabled = PrimaryTemplate.bind({})

Disabled.args = {
  disabled: true,
}

const SecondaryTemplate: Story<TextFieldInputProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Email address</Text>
      <TextField.Root>
        <TextField.Icon>
          <Lock weight="bold" />
        </TextField.Icon>
        <TextField.Input {...args} />
      </TextField.Root>
    </Box>
  )
}

export const WithLeftIcon = SecondaryTemplate.bind({})

const TertiaryTemplate: Story<TextFieldInputProps> = (args) => {
  return (
    <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
      <Text size="sm">Email address</Text>
      <TextField.Root as="label">
        <TextField.Prefix>cal.com/</TextField.Prefix>
        <TextField.Input {...args} />
      </TextField.Root>
    </Box>
  )
}

export const WithLeftPrefix = TertiaryTemplate.bind({})

WithLeftPrefix.args = {
  placeholder: 'your-username',
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextField } from './text-field'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    value: {
      type: 'string',
      name: 'Value',
      defaultValue: 'ValueT',
    },
  },
} as ComponentMeta<typeof TextField>

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
)

export const Outlined = Template.bind({})

Outlined.args = {
  value: 'Input',
  variant: 'outlined',
}

export const Standard = Template.bind({})

Standard.args = {
  value: 'Input',
  variant: 'standard',
}

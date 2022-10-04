import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from './button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      name: 'label',
      defaultValue: 'Text',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  variant: 'primary',
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Button',
  variant: 'secondary',
}

export const Square = Template.bind({})

Square.args = {
  children: 'Button',
  variant: 'square',
}

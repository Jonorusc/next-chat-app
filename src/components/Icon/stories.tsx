import { Story, Meta } from '@storybook/react/types-6-0'
import { Lock } from 'styled-icons/material'
import Icon from '.'
import { IconProps } from '.'

export default {
  title: 'Icon',
  component: Icon,
  args: {
    icon: <Lock />,
    badge: false,
    color: 'white'
  }
} as Meta<IconProps>

export const Default: Story<IconProps> = (args) => <Icon {...args} />

import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

import { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    userProfile:
      'https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220'
  }
} as Meta<MenuProps>

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

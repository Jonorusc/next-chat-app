import { Story, Meta } from '@storybook/react/types-6-0'
import ToolTip from '.'
import { TooltipProps } from '.'

import { Chat } from 'styled-icons/material-outlined'

export default {
  title: 'ToolTip',
  component: ToolTip,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  args: {
    value: 'Mucalol',
    direction: 'bottom'
  }
} as Meta<TooltipProps>

export const Default: Story<TooltipProps> = (args) => (
  <ToolTip {...args}>
    <Chat size={20} />
  </ToolTip>
)

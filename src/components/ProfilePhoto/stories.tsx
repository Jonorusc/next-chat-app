import { Story, Meta } from '@storybook/react/types-6-0'
import ProfilePhoto from '.'
import { ProfilePhotoProps } from '.'

export default {
  title: 'ProfilePhoto',
  component: ProfilePhoto,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  args: {
    title: 'Mucalol',
    img: 'https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220',
    size: 'large'
  },
} as Meta<ProfilePhotoProps>

export const Default: Story<ProfilePhotoProps> = (args) => <ProfilePhoto {...args} />

import type { Meta, StoryObj } from '@storybook/react-vite'
import { EmojiPicker } from './EmojiPicker'

const meta = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
  tags: ['autodocs'],
} satisfies Meta<typeof EmojiPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onSelect: (emoji: string) => console.log('Selected emoji:', emoji),
  },
}

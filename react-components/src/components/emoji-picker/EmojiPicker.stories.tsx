import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { EmojiPicker } from './EmojiPicker'

const meta: Meta<typeof EmojiPicker> = {
  title: 'Components/EmojiPicker',
  component: EmojiPicker,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof EmojiPicker>

/**
 * Default emoji picker with all features enabled.
 */
export const Default: Story = {
  args: {},
}

/**
 * Emoji picker with an emoji base URL for custom emoji images.
 * Replace %s with your emoji CDN URL pattern.
 */
export const WithEmojiBaseUrl: Story = {
  args: {
    emojiBaseUrl: 'https://cdn.jsdelivr.net/npm/twemoji@14.0.2/2/svg/%s.svg',
  },
}

/**
 * Interactive example showing the selected emoji.
 */
export const Interactive: Story = {
  render: function InteractiveStory() {
    const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

    return (
      <div className="flex flex-col items-center gap-4">
        {selectedEmoji !== null && (
          <div className="text-4xl p-4 border rounded-md">
            Selected: {selectedEmoji}
          </div>
        )}
        <EmojiPicker onChange={setSelectedEmoji} />
      </div>
    )
  },
}

/**
 * Interactive example with Twemoji images.
 */
export const InteractiveWithTwemoji: Story = {
  render: function InteractiveTwemojiStory() {
    const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

    return (
      <div className="flex flex-col items-center gap-4">
        {selectedEmoji !== null && (
          <div className="text-4xl p-4 border rounded-md">
            Selected: {selectedEmoji}
          </div>
        )}
        <EmojiPicker
          emojiBaseUrl="https://cdn.jsdelivr.net/npm/twemoji@14.0.2/2/svg/%s.svg"
          onChange={setSelectedEmoji}
        />
      </div>
    )
  },
}

/**
 * Emoji picker in a container with a border to show the component boundaries.
 */
export const InContainer: Story = {
  render: () => (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <EmojiPicker />
    </div>
  ),
}

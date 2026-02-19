import type { Meta, StoryObj } from '@storybook/react'
import { Emoji } from './Emoji'

// Example base URL using Twemoji CDN
const TWEMOJI_BASE_URL = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/%s.png'

const meta: Meta<typeof Emoji> = {
  title: 'Components/Emoji',
  component: Emoji,
  tags: ['autodocs'],
  args: {
    baseUrl: TWEMOJI_BASE_URL,
  },
  argTypes: {
    char: {
      control: 'text',
      description: 'Emoji character to display',
    },
    baseUrl: {
      control: 'text',
      description: 'Base URL for emoji images. Use %s as placeholder for the codepoint',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Predefined emoji size',
    },
    customSize: {
      control: 'number',
      description: 'Custom size in pixels (overrides size variant)',
    },
    verticalAlign: {
      control: 'select',
      options: ['initial', 'baseline', 'middle', 'top', 'bottom', 'text-top', 'text-bottom'],
      description: 'Vertical alignment of the emoji',
    },
  },
}

export default meta
type Story = StoryObj<typeof Emoji>

export const Default: Story = {
  args: {
    char: '😀',
  },
}

export const WithDifferentEmojis: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Emoji {...args} char="😀" />
      <Emoji {...args} char="🎉" />
      <Emoji {...args} char="❤️" />
      <Emoji {...args} char="👍" />
      <Emoji {...args} char="🚀" />
      <Emoji {...args} char="🌟" />
    </div>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Emoji {...args} char="😀" size="xs" />
      <Emoji {...args} char="😀" size="sm" />
      <Emoji {...args} char="😀" size="md" />
      <Emoji {...args} char="😀" size="lg" />
      <Emoji {...args} char="😀" size="xl" />
    </div>
  ),
}

export const CustomSize: Story = {
  args: {
    char: '🎉',
    customSize: 64,
  },
}

export const InlineWithText: Story = {
  render: (args) => (
    <p className="text-base">
      Hello <Emoji {...args} char="👋" size="sm" verticalAlign="middle" /> World! How are you{' '}
      <Emoji {...args} char="😊" size="sm" verticalAlign="middle" /> today?
    </p>
  ),
}

export const VerticalAlignments: Story = {
  render: (args) => (
    <div className="space-y-2">
      <p>
        Baseline: Hello <Emoji {...args} char="👋" size="md" verticalAlign="baseline" /> World
      </p>
      <p>
        Middle: Hello <Emoji {...args} char="👋" size="md" verticalAlign="middle" /> World
      </p>
      <p>
        Top: Hello <Emoji {...args} char="👋" size="md" verticalAlign="top" /> World
      </p>
      <p>
        Bottom: Hello <Emoji {...args} char="👋" size="md" verticalAlign="bottom" /> World
      </p>
      <p>
        Text-Top: Hello <Emoji {...args} char="👋" size="md" verticalAlign="text-top" /> World
      </p>
      <p>
        Text-Bottom: Hello <Emoji {...args} char="👋" size="md" verticalAlign="text-bottom" /> World
      </p>
    </div>
  ),
}

export const ComplexEmojis: Story = {
  name: 'Complex Emojis (ZWJ Sequences)',
  render: (args) => (
    <div className="flex gap-4">
      <Emoji {...args} char="👨‍👩‍👧‍👦" title="Family" />
      <Emoji {...args} char="👩‍💻" title="Woman Technologist" />
      <Emoji {...args} char="🏳️‍🌈" title="Rainbow Flag" />
      <Emoji {...args} char="👨‍🍳" title="Man Cook" />
    </div>
  ),
}

export const FlagEmojis: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Emoji {...args} char="🇺🇸" title="USA" />
      <Emoji {...args} char="🇬🇧" title="UK" />
      <Emoji {...args} char="🇫🇷" title="France" />
      <Emoji {...args} char="🇯🇵" title="Japan" />
      <Emoji {...args} char="🇩🇪" title="Germany" />
    </div>
  ),
}

export const WithoutBaseUrl: Story = {
  args: {
    char: '😀',
    baseUrl: undefined,
  },
  name: 'Without Base URL (renders nothing)',
}

export const EmptyChar: Story = {
  args: {
    char: '',
  },
  name: 'Empty Char (renders nothing)',
}

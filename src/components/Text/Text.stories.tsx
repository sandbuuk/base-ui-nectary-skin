import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from './Text'

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SizeMedium: Story = {
  args: {
    size: 'm',
  },
}

export const SizeSmall: Story = {
  args: {
    size: 's',
  },
}

export const SizeExtraSmall: Story = {
  args: {
    size: 'xs',
  },
}

export const SizeExtraExtraSmall: Story = {
  args: {
    size: 'xxs',
  },
}

export const Emphasized: Story = {
  args: {
    emphasized: true,
  },
}

export const Ellipsis: Story = {
  args: {
    ellipsis: true,
    inline: false,
    children:
      'This is a very long text that should be truncated with an ellipsis when it overflows its container boundary.',
    style: { maxWidth: 250 },
  },
}

export const BlockElement: Story = {
  args: {
    inline: false,
    children: 'This text renders as a block-level div element.',
  },
}

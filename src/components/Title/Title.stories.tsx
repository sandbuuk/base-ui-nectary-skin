import type { Meta, StoryObj } from '@storybook/react-vite'
import { Title } from './Title'

const meta = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    children: 'Page Title',
  },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Heading1: Story = {
  args: {
    level: 1,
    size: 'xl',
    children: 'Heading 1 (XL)',
  },
}

export const Heading2: Story = {
  args: {
    level: 2,
    size: 'l',
    children: 'Heading 2 (L)',
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    size: 'm',
    children: 'Heading 3 (M)',
  },
}

export const Heading4: Story = {
  args: {
    level: 4,
    size: 's',
    children: 'Heading 4 (S)',
  },
}

export const SizeExtraSmall: Story = {
  args: {
    level: 5,
    size: 'xs',
    children: 'Heading 5 (XS)',
  },
}

export const Ellipsis: Story = {
  args: {
    ellipsis: true,
    children: 'This is a very long title that should be truncated with an ellipsis when it overflows',
    style: { maxWidth: 300 },
  },
}

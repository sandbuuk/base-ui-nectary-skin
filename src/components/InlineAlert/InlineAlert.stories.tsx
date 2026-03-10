import type { Meta, StoryObj } from '@storybook/react-vite'
import { InlineAlert } from './InlineAlert'

const meta = {
  title: 'Components/InlineAlert',
  component: InlineAlert,
  tags: ['autodocs'],
} satisfies Meta<typeof InlineAlert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    variant: 'info',
    caption: 'Note',
    children: 'This field is optional but recommended.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    caption: 'Saved',
    children: 'Your preferences have been updated.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    caption: 'Caution',
    children: 'This action cannot be undone.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    caption: 'Invalid input',
    children: 'Please enter a valid email address.',
  },
}

export const CaptionOnly: Story = {
  args: {
    variant: 'info',
    caption: 'Tip: You can drag items to reorder them.',
  },
}

export const BodyOnly: Story = {
  args: {
    variant: 'warning',
    children: 'Changes will take effect after the next deployment.',
  },
}

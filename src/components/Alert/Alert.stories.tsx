import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert with helpful details.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review your input before proceeding.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'Something went wrong. Please try again later.',
  },
}

export const WithCloseButton: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible',
    children: 'This alert can be dismissed by clicking the close button.',
    onClose: () => alert('Closed'),
  },
}

export const TitleOnly: Story = {
  args: {
    variant: 'success',
    title: 'Operation completed.',
  },
}

export const BodyOnly: Story = {
  args: {
    variant: 'warning',
    children: 'This alert has no title, only body text.',
  },
}

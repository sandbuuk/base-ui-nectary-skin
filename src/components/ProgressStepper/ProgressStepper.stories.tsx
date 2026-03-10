import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressStepper } from './ProgressStepper'

const meta = {
  title: 'Components/ProgressStepper',
  component: ProgressStepper,
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressStepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <ProgressStepper {...args}>
      <ProgressStepper.Item label="Account" description="Create your account" />
      <ProgressStepper.Item label="Profile" description="Set up your profile" />
      <ProgressStepper.Item label="Review" description="Review and confirm" />
    </ProgressStepper>
  ),
  args: {
    value: 1,
  },
}

export const FirstStep: Story = {
  render: () => (
    <ProgressStepper value={0}>
      <ProgressStepper.Item label="Account" />
      <ProgressStepper.Item label="Profile" />
      <ProgressStepper.Item label="Review" />
    </ProgressStepper>
  ),
}

export const MiddleStep: Story = {
  render: () => (
    <ProgressStepper value={1}>
      <ProgressStepper.Item label="Account" description="Create your account" />
      <ProgressStepper.Item label="Profile" description="Set up your profile" />
      <ProgressStepper.Item label="Review" description="Review and confirm" />
    </ProgressStepper>
  ),
}

export const AllComplete: Story = {
  render: () => (
    <ProgressStepper value={3}>
      <ProgressStepper.Item label="Account" />
      <ProgressStepper.Item label="Profile" />
      <ProgressStepper.Item label="Review" />
    </ProgressStepper>
  ),
}

export const WithError: Story = {
  render: () => (
    <ProgressStepper value={1}>
      <ProgressStepper.Item label="Account" />
      <ProgressStepper.Item label="Payment" status="error" description="Payment failed" />
      <ProgressStepper.Item label="Confirmation" />
    </ProgressStepper>
  ),
}

export const FiveSteps: Story = {
  render: () => (
    <ProgressStepper value={2}>
      <ProgressStepper.Item label="Cart" />
      <ProgressStepper.Item label="Shipping" />
      <ProgressStepper.Item label="Payment" />
      <ProgressStepper.Item label="Review" />
      <ProgressStepper.Item label="Confirm" />
    </ProgressStepper>
  ),
}

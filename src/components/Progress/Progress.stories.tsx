import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from './Progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
    'aria-label': 'Loading progress',
  },
}

export const Empty: Story = {
  args: {
    value: 0,
    'aria-label': 'Loading progress',
  },
}

export const Quarter: Story = {
  args: {
    value: 25,
    'aria-label': 'Loading progress',
  },
}

export const Half: Story = {
  args: {
    value: 50,
    'aria-label': 'Loading progress',
  },
}

export const ThreeQuarters: Story = {
  args: {
    value: 75,
    'aria-label': 'Loading progress',
  },
}

export const Complete: Story = {
  args: {
    value: 100,
    'aria-label': 'Loading progress',
  },
}

export const WithLabel: Story = {
  args: {
    value: 60,
    label: 'Uploading...',
    'aria-label': 'Upload progress',
  },
}

export const Indeterminate: Story = {
  args: {
    'aria-label': 'Loading',
  },
}

export const AllValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Progress value={0} aria-label="0%" />
      <Progress value={25} aria-label="25%" />
      <Progress value={50} aria-label="50%" />
      <Progress value={75} aria-label="75%" />
      <Progress value={100} aria-label="100%" />
    </div>
  ),
}

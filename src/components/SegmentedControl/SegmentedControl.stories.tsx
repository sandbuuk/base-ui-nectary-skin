import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { SegmentedControl } from './SegmentedControl'

const meta = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <SegmentedControl defaultValue="day">
      <SegmentedControl.Item value="day">Day</SegmentedControl.Item>
      <SegmentedControl.Item value="week">Week</SegmentedControl.Item>
      <SegmentedControl.Item value="month">Month</SegmentedControl.Item>
    </SegmentedControl>
  ),
}

export const TwoItems: Story = {
  render: () => (
    <SegmentedControl defaultValue="list">
      <SegmentedControl.Item value="list">List</SegmentedControl.Item>
      <SegmentedControl.Item value="grid">Grid</SegmentedControl.Item>
    </SegmentedControl>
  ),
}

export const WithDisabledItem: Story = {
  render: () => (
    <SegmentedControl defaultValue="all">
      <SegmentedControl.Item value="all">All</SegmentedControl.Item>
      <SegmentedControl.Item value="active">Active</SegmentedControl.Item>
      <SegmentedControl.Item value="archived" disabled>Archived</SegmentedControl.Item>
    </SegmentedControl>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('overview')
    return (
      <div>
        <SegmentedControl value={value} onValueChange={setValue}>
          <SegmentedControl.Item value="overview">Overview</SegmentedControl.Item>
          <SegmentedControl.Item value="analytics">Analytics</SegmentedControl.Item>
          <SegmentedControl.Item value="reports">Reports</SegmentedControl.Item>
          <SegmentedControl.Item value="exports">Exports</SegmentedControl.Item>
        </SegmentedControl>
        <p style={{ marginTop: 12, fontSize: 14, color: '#666' }}>Selected: {value}</p>
      </div>
    )
  },
}

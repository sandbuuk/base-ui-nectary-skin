import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sheet } from './Sheet'

const meta = {
  title: 'Components/Sheet',
  component: Sheet.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet.Root>

export default meta
type Story = StoryObj<typeof meta>

export const RightSide: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger>
        <button type="button">Open Right Sheet</button>
      </Sheet.Trigger>
      <Sheet.Content side="right">
        <div style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Sheet Content</h2>
          <p>This sheet slides in from the right side.</p>
          <Sheet.Close>
            <button type="button">Close</button>
          </Sheet.Close>
        </div>
      </Sheet.Content>
    </Sheet.Root>
  ),
}

export const LeftSide: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger>
        <button type="button">Open Left Sheet</button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <div style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Navigation</h2>
          <ul style={{ padding: 0, listStyle: 'none' }}>
            <li style={{ padding: '8px 0' }}>Dashboard</li>
            <li style={{ padding: '8px 0' }}>Settings</li>
            <li style={{ padding: '8px 0' }}>Profile</li>
          </ul>
          <Sheet.Close>
            <button type="button">Close</button>
          </Sheet.Close>
        </div>
      </Sheet.Content>
    </Sheet.Root>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Sheet.Root defaultOpen>
      <Sheet.Trigger>
        <button type="button">Toggle Sheet</button>
      </Sheet.Trigger>
      <Sheet.Content side="right">
        <div style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Initially Open</h2>
          <p>This sheet starts in an open state.</p>
          <Sheet.Close>
            <button type="button">Close</button>
          </Sheet.Close>
        </div>
      </Sheet.Content>
    </Sheet.Root>
  ),
}

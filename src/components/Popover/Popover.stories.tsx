import type { Meta, StoryObj } from '@storybook/react-vite'
import { Popover } from './Popover'

const meta = {
  title: 'Components/Popover',
  component: Popover.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <button type="button">Open Popover</button>
      </Popover.Trigger>
      <Popover.Popup>
        <Popover.Title>Popover Title</Popover.Title>
        <Popover.Description>
          This is a popover with some descriptive content inside.
        </Popover.Description>
      </Popover.Popup>
    </Popover.Root>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <button type="button">With Arrow</button>
      </Popover.Trigger>
      <Popover.Popup showArrow>
        <Popover.Title>Arrow Popover</Popover.Title>
        <Popover.Description>This popover includes an arrow pointing to the trigger.</Popover.Description>
      </Popover.Popup>
    </Popover.Root>
  ),
}

export const SideTop: Story = {
  render: () => (
    <div style={{ paddingTop: 120 }}>
      <Popover.Root>
        <Popover.Trigger>
          <button type="button">Top Side</button>
        </Popover.Trigger>
        <Popover.Popup side="top" showArrow>
          <Popover.Title>Top Popover</Popover.Title>
          <Popover.Description>Positioned above the trigger element.</Popover.Description>
        </Popover.Popup>
      </Popover.Root>
    </div>
  ),
}

export const WithCloseButton: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <button type="button">Closeable Popover</button>
      </Popover.Trigger>
      <Popover.Popup>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Popover.Title>Settings</Popover.Title>
          <Popover.Close>
            <button type="button" aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              &times;
            </button>
          </Popover.Close>
        </div>
        <Popover.Description>Adjust your preferences here.</Popover.Description>
      </Popover.Popup>
    </Popover.Root>
  ),
}

export const AlignStart: Story = {
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <button type="button">Align Start</button>
      </Popover.Trigger>
      <Popover.Popup align="start" sideOffset={12}>
        <Popover.Title>Start-Aligned</Popover.Title>
        <Popover.Description>
          This popover is aligned to the start of the trigger with extra offset.
        </Popover.Description>
      </Popover.Popup>
    </Popover.Root>
  ),
}

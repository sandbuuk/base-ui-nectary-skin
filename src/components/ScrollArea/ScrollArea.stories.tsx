import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea } from './ScrollArea'

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  render: () => (
    <ScrollArea.Root style={{ height: 200, width: 300 }}>
      <ScrollArea.Viewport>
        <div style={{ padding: 16 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} style={{ margin: '0 0 8px' }}>
              Item {i + 1} — Scrollable content line
            </p>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" />
    </ScrollArea.Root>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea.Root style={{ height: 100, width: 300 }}>
      <ScrollArea.Viewport>
        <div style={{ display: 'flex', gap: 16, padding: 16, width: 1200 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              style={{
                minWidth: 80,
                height: 60,
                background: '#f0f0f0',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" />
    </ScrollArea.Root>
  ),
}

export const BothAxes: Story = {
  render: () => (
    <ScrollArea.Root style={{ height: 200, width: 300 }}>
      <ScrollArea.Viewport>
        <div style={{ width: 600, padding: 16 }}>
          {Array.from({ length: 30 }, (_, i) => (
            <p key={i} style={{ margin: '0 0 8px', whiteSpace: 'nowrap' }}>
              Row {i + 1} — This is a long line of content that extends beyond the container width to demonstrate horizontal scrolling.
            </p>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" />
      <ScrollArea.Scrollbar orientation="horizontal" />
    </ScrollArea.Root>
  ),
}

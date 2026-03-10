import type { Meta, StoryObj } from '@storybook/react-vite'
import { Pop } from './Pop'

const meta = {
  title: 'Components/Pop',
  component: Pop,
  tags: ['autodocs'],
} satisfies Meta<typeof Pop>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <button type="button">Click me</button>,
    content: <div style={{ padding: 8 }}>Pop content</div>,
  },
}

export const SideTop: Story = {
  render: () => (
    <div style={{ paddingTop: 100 }}>
      <Pop side="top" content={<div style={{ padding: 8 }}>Above the trigger</div>}>
        <button type="button">Top</button>
      </Pop>
    </div>
  ),
}

export const SideRight: Story = {
  args: {
    side: 'right',
    children: <button type="button">Right</button>,
    content: <div style={{ padding: 8 }}>To the right</div>,
  },
}

export const SideLeft: Story = {
  render: () => (
    <div style={{ paddingLeft: 200 }}>
      <Pop side="left" content={<div style={{ padding: 8 }}>To the left</div>}>
        <button type="button">Left</button>
      </Pop>
    </div>
  ),
}

export const AlignStart: Story = {
  args: {
    align: 'start',
    children: <button type="button">Align Start</button>,
    content: <div style={{ padding: 8 }}>Aligned to start</div>,
  },
}

export const CustomOffset: Story = {
  args: {
    sideOffset: 24,
    children: <button type="button">Large Offset</button>,
    content: <div style={{ padding: 8 }}>24px offset from trigger</div>,
  },
}

export const RichContent: Story = {
  args: {
    children: <button type="button">Info</button>,
    content: (
      <div style={{ padding: 12, maxWidth: 200 }}>
        <strong>Details</strong>
        <p style={{ margin: '8px 0 0', fontSize: 13 }}>
          This pop shows richer content including formatted text and structure.
        </p>
      </div>
    ),
  },
}

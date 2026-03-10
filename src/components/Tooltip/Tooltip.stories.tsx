import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tooltip } from './Tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'This is a tooltip',
    children: <button type="button">Hover me</button>,
  },
}

export const SideBottom: Story = {
  args: {
    label: 'Tooltip on bottom',
    side: 'bottom',
    children: <button type="button">Bottom tooltip</button>,
  },
}

export const SideLeft: Story = {
  render: () => (
    <div style={{ paddingLeft: 150 }}>
      <Tooltip label="Left tooltip" side="left">
        <button type="button">Left tooltip</button>
      </Tooltip>
    </div>
  ),
}

export const SideRight: Story = {
  args: {
    label: 'Right tooltip',
    side: 'right',
    children: <button type="button">Right tooltip</button>,
  },
}

export const NoDelay: Story = {
  args: {
    label: 'Instant tooltip',
    delay: 0,
    children: <button type="button">No delay</button>,
  },
}

export const LongContent: Story = {
  args: {
    label: 'This is a longer tooltip message that provides more detailed information to the user about this element.',
    children: <button type="button">Long tooltip</button>,
  },
}

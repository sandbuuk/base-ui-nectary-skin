import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from './Separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>Content above</p>
      <Separator orientation="horizontal" />
      <p>Content below</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '40px' }}>
      <span>Left</span>
      <Separator orientation="vertical" style={{ height: '100%' }} />
      <span>Right</span>
    </div>
  ),
}

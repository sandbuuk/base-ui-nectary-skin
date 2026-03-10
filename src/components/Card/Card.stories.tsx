import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <h3 style={{ margin: '0 0 8px' }}>Card Title</h3>
      <p style={{ margin: 0, color: '#666' }}>This is a default card with some content inside it.</p>
    </Card>
  ),
}

export const Clickable: Story = {
  render: () => (
    <Card clickable onClick={() => alert('Card clicked')}>
      <h3 style={{ margin: '0 0 8px' }}>Clickable Card</h3>
      <p style={{ margin: 0, color: '#666' }}>Click this card to trigger an action.</p>
    </Card>
  ),
}

export const Selected: Story = {
  render: () => (
    <Card selected>
      <h3 style={{ margin: '0 0 8px' }}>Selected Card</h3>
      <p style={{ margin: 0, color: '#666' }}>This card is in a selected state.</p>
    </Card>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Card disabled clickable>
      <h3 style={{ margin: '0 0 8px' }}>Disabled Card</h3>
      <p style={{ margin: 0, color: '#666' }}>This card is disabled and cannot be interacted with.</p>
    </Card>
  ),
}

export const ClickableSelected: Story = {
  render: () => (
    <Card clickable selected onClick={() => alert('Clicked')}>
      <h3 style={{ margin: '0 0 8px' }}>Clickable + Selected</h3>
      <p style={{ margin: 0, color: '#666' }}>A card that is both clickable and selected.</p>
    </Card>
  ),
}

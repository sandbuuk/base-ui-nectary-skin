import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { PersistentOverlay } from './PersistentOverlay'

const meta = {
  title: 'Components/PersistentOverlay',
  component: PersistentOverlay,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PersistentOverlay>

export default meta
type Story = StoryObj<typeof meta>

export const Bottom: Story = {
  render: () => (
    <div style={{ height: '100vh', padding: 24 }}>
      <p>Page content goes here. The overlay is fixed at the bottom.</p>
      <PersistentOverlay position="bottom" onClose={() => console.log('Closed')}>
        <span>You have unsaved changes.</span>
      </PersistentOverlay>
    </div>
  ),
}

export const Top: Story = {
  render: () => (
    <div style={{ height: '100vh', padding: 24 }}>
      <p style={{ marginTop: 60 }}>Page content goes here. The overlay is fixed at the top.</p>
      <PersistentOverlay position="top" onClose={() => console.log('Closed')}>
        <span>A new version is available. Please refresh.</span>
      </PersistentOverlay>
    </div>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <div style={{ height: '100vh', padding: 24 }}>
      <p>This overlay has no close button.</p>
      <PersistentOverlay position="bottom">
        <span>Processing your request...</span>
      </PersistentOverlay>
    </div>
  ),
}

export const Dismissible: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div style={{ height: '100vh', padding: 24 }}>
        <p>Click the close button to dismiss the overlay.</p>
        {!open && (
          <button type="button" onClick={() => setOpen(true)}>
            Show Overlay
          </button>
        )}
        <PersistentOverlay open={open} onClose={() => setOpen(false)} position="bottom">
          <span>This overlay can be dismissed and re-shown.</span>
        </PersistentOverlay>
      </div>
    )
  },
}

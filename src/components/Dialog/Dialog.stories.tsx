import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog } from './Dialog'

const meta = {
  title: 'Components/Dialog',
  component: Dialog.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>
        <button type="button">Open Dialog</button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Description>
          This is a dialog description. It provides additional context about the dialog content.
        </Dialog.Description>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
          <Dialog.Close>
            <button type="button">Cancel</button>
          </Dialog.Close>
          <Dialog.Close>
            <button type="button">Confirm</button>
          </Dialog.Close>
        </div>
      </Dialog.Popup>
    </Dialog.Root>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>
        <button type="button">Edit Profile</button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Title>Edit Profile</Dialog.Title>
        <Dialog.Description>Update your profile information below.</Dialog.Description>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
          <label>
            Name
            <input type="text" placeholder="Enter name" style={{ display: 'block', width: '100%', marginTop: 4 }} />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter email" style={{ display: 'block', width: '100%', marginTop: 4 }} />
          </label>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
          <Dialog.Close>
            <button type="button">Cancel</button>
          </Dialog.Close>
          <Dialog.Close>
            <button type="button">Save</button>
          </Dialog.Close>
        </div>
      </Dialog.Popup>
    </Dialog.Root>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Dialog.Root defaultOpen>
      <Dialog.Trigger>
        <button type="button">Open Dialog</button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Title>Already Open</Dialog.Title>
        <Dialog.Description>This dialog was open by default.</Dialog.Description>
        <Dialog.Close>
          <button type="button" style={{ marginTop: 16 }}>Close</button>
        </Dialog.Close>
      </Dialog.Popup>
    </Dialog.Root>
  ),
}

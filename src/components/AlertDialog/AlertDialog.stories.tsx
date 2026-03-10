import type { Meta, StoryObj } from '@storybook/react-vite'
import { AlertDialog } from './AlertDialog'

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialog.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button type="button">Delete Item</button>
      </AlertDialog.Trigger>
      <AlertDialog.Popup>
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete the item from your account.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
          <AlertDialog.Close>
            <button type="button">Cancel</button>
          </AlertDialog.Close>
          <AlertDialog.Close>
            <button type="button">Delete</button>
          </AlertDialog.Close>
        </div>
      </AlertDialog.Popup>
    </AlertDialog.Root>
  ),
}

export const DestructiveAction: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button type="button" style={{ color: 'red' }}>Remove Account</button>
      </AlertDialog.Trigger>
      <AlertDialog.Popup>
        <AlertDialog.Title>Remove Account</AlertDialog.Title>
        <AlertDialog.Description>
          All your data, settings, and history will be permanently removed. This cannot be reversed.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
          <AlertDialog.Close>
            <button type="button">Keep Account</button>
          </AlertDialog.Close>
          <AlertDialog.Close>
            <button type="button" style={{ color: 'red' }}>Yes, Remove</button>
          </AlertDialog.Close>
        </div>
      </AlertDialog.Popup>
    </AlertDialog.Root>
  ),
}

export const UnsavedChanges: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button type="button">Discard Changes</button>
      </AlertDialog.Trigger>
      <AlertDialog.Popup>
        <AlertDialog.Title>Unsaved Changes</AlertDialog.Title>
        <AlertDialog.Description>
          You have unsaved changes. Do you want to discard them?
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
          <AlertDialog.Close>
            <button type="button">Go Back</button>
          </AlertDialog.Close>
          <AlertDialog.Close>
            <button type="button">Discard</button>
          </AlertDialog.Close>
        </div>
      </AlertDialog.Popup>
    </AlertDialog.Root>
  ),
}

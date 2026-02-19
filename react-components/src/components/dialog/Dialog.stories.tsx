import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { Button } from '../button'
import { Icon } from '../icon'
import { Text } from '../text'
import { Dialog, type DialogCloseDetail } from './Dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  args: {
    onClose: fn(),
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    caption: {
      control: 'text',
    },
    hideCloseButton: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

// Interactive wrapper component
const DialogDemo = ({
  caption = 'Dialog Title',
  hideCloseButton = false,
  icon,
  children,
  buttons,
}: {
  caption?: string,
  hideCloseButton?: boolean,
  icon?: React.ReactNode,
  children?: React.ReactNode,
  buttons?: (handleClose: () => void) => React.ReactNode,
}) => {
  const [open, setOpen] = useState(false)

  const handleClose = (detail: DialogCloseDetail) => {
    console.log('Dialog closed via:', detail)
    setOpen(false)
  }

  const closeDialog = () => setOpen(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        caption={caption}
        hideCloseButton={hideCloseButton}
        icon={icon}
        buttons={buttons?.(closeDialog)}
      >
        {children ?? (
          <Text>
            This is the dialog content. You can put any content here including
            forms, text, or other components.
          </Text>
        )}
      </Dialog>
    </>
  )
}

export const Default: Story = {
  render: () => <DialogDemo />,
}

export const WithCaption: Story = {
  render: () => (
    <DialogDemo caption="Confirm Delete">
      <Text>
        Are you sure you want to delete this item? This action cannot be undone.
      </Text>
    </DialogDemo>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <DialogDemo
      caption="Warning"
      icon={<Icon name="fa-triangle-exclamation" iconsVersion="2" size="md" />}
    >
      <Text>
        This action requires your attention before proceeding.
      </Text>
    </DialogDemo>
  ),
}

export const WithButtons: Story = {
  render: () => (
    <DialogDemo
      caption="Confirm Action"
      buttons={(handleClose) => (
        <>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </>
      )}
    >
      <Text>
        Are you sure you want to proceed with this action?
      </Text>
    </DialogDemo>
  ),
}

export const WithDestructiveAction: Story = {
  render: () => (
    <DialogDemo
      caption="Delete Item"
      icon={<Icon name="fa-trash" iconsVersion="2" size="md" />}
      buttons={(handleClose) => (
        <>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="destructive" onClick={handleClose}>
            Delete
          </Button>
        </>
      )}
    >
      <Text>
        Are you sure you want to delete this item? This action cannot be undone.
      </Text>
    </DialogDemo>
  ),
}

export const HiddenCloseButton: Story = {
  render: () => (
    <DialogDemo
      caption="Modal Dialog"
      hideCloseButton
      buttons={(handleClose) => (
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      )}
    >
      <Text>
        This dialog has no close button. You must use the button below to close it.
      </Text>
    </DialogDemo>
  ),
}

export const LongContent: Story = {
  render: () => (
    <DialogDemo
      caption="Terms and Conditions"
      buttons={(handleClose) => (
        <>
          <Button onClick={handleClose}>Decline</Button>
          <Button variant="primary" onClick={handleClose}>
            Accept
          </Button>
        </>
      )}
    >
      <div className="space-y-4">
        {Array.from({ length: 10 }, (_, i) => (
          <Text key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
        ))}
      </div>
    </DialogDemo>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [closeDetail, setCloseDetail] = useState<DialogCloseDetail | null>(null)

    const handleClose = (detail: DialogCloseDetail) => {
      setCloseDetail(detail)
      setOpen(false)
    }

    return (
      <div className="flex flex-col gap-4 items-center">
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        {closeDetail && (
          <Text type="xs" className="text-foreground-muted">
            Last closed via: {closeDetail}
          </Text>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          caption="Controlled Dialog"
          buttons={
            <>
              <Button onClick={() => handleClose('close')}>Cancel</Button>
              <Button variant="primary" onClick={() => handleClose('close')}>
                Save
              </Button>
            </>
          }
        >
          <Text>
            Try closing this dialog in different ways:
          </Text>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><Text>Click the X button (close)</Text></li>
            <li><Text>Press Escape key (escape)</Text></li>
            <li><Text>Click the backdrop (backdrop)</Text></li>
          </ul>
        </Dialog>
      </div>
    )
  },
}

export const NoCaption: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-label="Simple dialog"
          buttons={
            <Button variant="primary" onClick={() => setOpen(false)}>
              Got it
            </Button>
          }
        >
          <Text>
            This dialog has no caption, just content.
          </Text>
        </Dialog>
      </>
    )
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { Button } from '../button'
import { Sheet, SheetTitle } from './Sheet'

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onClose: fn(),
    onSheetAnimationStart: fn(),
    onSheetAnimationEnd: fn(),
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    overlay: {
      control: 'select',
      options: ['modal', 'push'],
    },
    open: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Sheet>

// Default story with interactive state
const InteractiveSheetTemplate = ({
  placement = 'right',
  overlay = 'modal',
}: {
  placement?: 'left' | 'right' | 'top' | 'bottom',
  overlay?: 'modal' | 'push',
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet</Button>
      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        placement={placement}
        overlay={overlay}
        title={
          <SheetTitle
            title="Sheet Title"
            description="This is a description for the sheet panel."
            onClose={() => setOpen(false)}
          />
        }
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Save
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <p>This is the sheet content. It can contain any React components.</p>
          <p>
            The sheet slides in from the {placement} edge of the screen.
          </p>
          <p>
            Try pressing Escape or clicking the backdrop to close the sheet.
          </p>
        </div>
      </Sheet>
    </div>
  )
}

export const Default: Story = {
  render: () => <InteractiveSheetTemplate />,
}

// Placement variants
export const PlacementRight: Story = {
  render: () => <InteractiveSheetTemplate placement="right" />,
  name: 'Placement: Right',
}

export const PlacementLeft: Story = {
  render: () => <InteractiveSheetTemplate placement="left" />,
  name: 'Placement: Left',
}

export const PlacementTop: Story = {
  render: () => <InteractiveSheetTemplate placement="top" />,
  name: 'Placement: Top',
}

export const PlacementBottom: Story = {
  render: () => <InteractiveSheetTemplate placement="bottom" />,
  name: 'Placement: Bottom',
}

// Overlay modes
export const ModalOverlay: Story = {
  render: () => <InteractiveSheetTemplate overlay="modal" />,
  name: 'Overlay: Modal',
}

export const PushOverlay: Story = {
  render: () => <InteractiveSheetTemplate overlay="push" />,
  name: 'Overlay: Push',
}

// Without title
const WithoutTitleTemplate = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet (No Title)</Button>
      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        footer={
          <Button onClick={() => setOpen(false)}>Close</Button>
        }
      >
        <div className="space-y-4">
          <p>This sheet has no title component.</p>
          <p>Useful for simple content that doesn't need a header.</p>
        </div>
      </Sheet>
    </div>
  )
}

export const WithoutTitle: Story = {
  render: () => <WithoutTitleTemplate />,
  name: 'Without Title',
}

// Without footer
const WithoutFooterTemplate = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet (No Footer)</Button>
      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        title={
          <SheetTitle
            title="Sheet Without Footer"
            onClose={() => setOpen(false)}
          />
        }
      >
        <div className="space-y-4">
          <p>This sheet has no footer component.</p>
          <p>The close button in the title is the only way to close it.</p>
        </div>
      </Sheet>
    </div>
  )
}

export const WithoutFooter: Story = {
  render: () => <WithoutFooterTemplate />,
  name: 'Without Footer',
}

// With scrollable content
const ScrollableContentTemplate = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet (Scrollable)</Button>
      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        title={
          <SheetTitle
            title="Scrollable Content"
            description="The content area scrolls independently"
            onClose={() => setOpen(false)}
          />
        }
        footer={
          <Button onClick={() => setOpen(false)}>Close</Button>
        }
      >
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </Sheet>
    </div>
  )
}

export const ScrollableContent: Story = {
  render: () => <ScrollableContentTemplate />,
  name: 'Scrollable Content',
}

// SheetTitle variants
const SheetTitleVariantsTemplate = () => {
  const [openBasic, setOpenBasic] = useState(false)
  const [openDescription, setOpenDescription] = useState(false)
  const [openNoClose, setOpenNoClose] = useState(false)

  return (
    <div className="p-8 space-x-4">
      <Button onClick={() => setOpenBasic(true)}>Basic Title</Button>
      <Button onClick={() => setOpenDescription(true)}>With Description</Button>
      <Button onClick={() => setOpenNoClose(true)}>No Close Button</Button>

      <Sheet
        open={openBasic}
        onClose={() => setOpenBasic(false)}
        title={
          <SheetTitle
            title="Basic Title"
            onClose={() => setOpenBasic(false)}
          />
        }
      >
        <p>Sheet with basic title only.</p>
      </Sheet>

      <Sheet
        open={openDescription}
        onClose={() => setOpenDescription(false)}
        title={
          <SheetTitle
            title="Title with Description"
            description="This is a helpful description that provides more context."
            onClose={() => setOpenDescription(false)}
          />
        }
      >
        <p>Sheet with title and description.</p>
      </Sheet>

      <Sheet
        open={openNoClose}
        onClose={() => setOpenNoClose(false)}
        title={
          <SheetTitle
            title="No Close Button"
            hideCloseButton
          />
        }
        footer={
          <Button onClick={() => setOpenNoClose(false)}>Close via Footer</Button>
        }
      >
        <p>This sheet title has no close button. Close using the footer button or press Escape.</p>
      </Sheet>
    </div>
  )
}

export const SheetTitleVariants: Story = {
  render: () => <SheetTitleVariantsTemplate />,
  name: 'SheetTitle Variants',
}

// All placements showcase
const AllPlacementsTemplate = () => {
  const [openPlacement, setOpenPlacement] = useState<'left' | 'right' | 'top' | 'bottom' | null>(null)

  return (
    <div className="p-8 space-x-4">
      <Button onClick={() => setOpenPlacement('left')}>Left</Button>
      <Button onClick={() => setOpenPlacement('right')}>Right</Button>
      <Button onClick={() => setOpenPlacement('top')}>Top</Button>
      <Button onClick={() => setOpenPlacement('bottom')}>Bottom</Button>

      {(['left', 'right', 'top', 'bottom'] as const).map((placement) => (
        <Sheet
          key={placement}
          open={openPlacement === placement}
          onClose={() => setOpenPlacement(null)}
          placement={placement}
          title={
            <SheetTitle
              title={`${placement.charAt(0).toUpperCase() + placement.slice(1)} Sheet`}
              description={`This sheet slides in from the ${placement}`}
              onClose={() => setOpenPlacement(null)}
            />
          }
          footer={
            <Button onClick={() => setOpenPlacement(null)}>Close</Button>
          }
        >
          <p>Content for the {placement} sheet.</p>
        </Sheet>
      ))}
    </div>
  )
}

export const AllPlacements: Story = {
  render: () => <AllPlacementsTemplate />,
  name: 'All Placements',
}

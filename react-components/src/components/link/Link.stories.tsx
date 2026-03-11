import { fn } from '@storybook/test'
import { Link } from './Link'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text content of the link',
    },
    href: {
      control: 'text',
      description: 'URL that the link points to',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    external: {
      control: 'boolean',
      description: 'When true, opens link in new tab and shows external icon',
    },
    standalone: {
      control: 'boolean',
      description: 'Standalone mode displays as block with an arrow icon',
    },
    useHistory: {
      control: 'boolean',
      description: 'When true, uses history.pushState instead of navigating',
    },
    preventDefault: {
      control: 'boolean',
      description: 'Prevents default anchor behavior on click',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A navigation link component supporting inline and standalone modes, external link indicators, and SPA-friendly history navigation.\n\nKeyboard: Tab to focus. Enter to navigate.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

// Default inline link
export const Default: Story = {
  args: {
    text: 'Click here',
    href: 'https://example.com',
  },
}

// Link with children instead of text prop
export const WithChildren: Story = {
  args: {
    href: 'https://example.com',
    children: 'Link using children',
  },
}

// External link (opens in new tab with icon)
export const External: Story = {
  args: {
    text: 'External link',
    href: 'https://example.com',
    external: true,
  },
}

// Standalone link (block display with arrow)
export const Standalone: Story = {
  args: {
    text: 'Standalone link',
    href: '/some-page',
    standalone: true,
  },
}

// Standalone external link
export const StandaloneExternal: Story = {
  args: {
    text: 'External standalone link',
    href: 'https://example.com',
    standalone: true,
    external: true,
  },
}

// Disabled link
export const Disabled: Story = {
  args: {
    text: 'Disabled link',
    href: 'https://example.com',
    disabled: true,
  },
}

// Disabled external link
export const DisabledExternal: Story = {
  args: {
    text: 'Disabled external link',
    href: 'https://example.com',
    disabled: true,
    external: true,
  },
}

// Disabled standalone link
export const DisabledStandalone: Story = {
  args: {
    text: 'Disabled standalone link',
    href: '/some-page',
    disabled: true,
    standalone: true,
  },
}

// Link in paragraph context (inline)
export const InParagraph: Story = {
  render: () => (
    <p className="text-foreground">
      This is a paragraph with an <Link href="/inline" text="inline link"/> in
      the middle of the text content.
    </p>
  ),
}

// Link with external in paragraph
export const ExternalInParagraph: Story = {
  render: () => (
    <p className="text-foreground">
      Learn more at the{' '}
      <Link href="https://sinch.com" text="Sinch website" external/> for
      additional documentation.
    </p>
  ),
}

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-foreground mb-2 font-semibold">Inline Links</h3>
        <div className="flex flex-col gap-2">
          <p className="text-foreground">
            Default: <Link href="#" text="Default link"/>
          </p>
          <p className="text-foreground">
            External: <Link href="#" text="External link" external/>
          </p>
          <p className="text-foreground">
            Disabled: <Link href="#" text="Disabled link" disabled/>
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-foreground mb-2 font-semibold">Standalone Links</h3>
        <div className="flex flex-col gap-2">
          <Link href="#" text="Standalone link" standalone/>
          <Link href="#" text="Standalone external" standalone external/>
          <Link href="#" text="Standalone disabled" standalone disabled/>
        </div>
      </div>
    </div>
  ),
}

// SPA navigation demo
export const SPANavigation: Story = {
  args: {
    text: 'SPA Navigation (uses history.pushState)',
    href: '/new-route',
    useHistory: true,
    standalone: true,
  },
}

// With custom className
export const WithCustomClassName: Story = {
  args: {
    text: 'Custom styled link',
    href: '#',
    className: 'text-lg font-bold',
  },
}

// Interactive state demo
export const InteractiveStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-foreground-muted text-sm">
        Hover over the links to see state changes:
      </p>
      <div className="flex flex-col gap-2">
        <p className="text-foreground">
          <Link href="#" text="Hover me (inline)"/>
        </p>
        <Link href="#" text="Hover me (standalone)" standalone/>
        <Link href="#" text="Hover me (external)" external/>
      </div>
    </div>
  ),
}

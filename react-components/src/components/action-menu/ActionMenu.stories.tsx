import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ActionMenu } from './ActionMenu'
import { ActionMenuOption } from './ActionMenuOption'

const meta: Meta<typeof ActionMenu> = {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'How many rows to show before scrolling',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A dropdown menu displaying a list of action options with keyboard navigation support and customizable row scrolling limits. Compose with `ActionMenuOption` children for each menu item.\n\nKeyboard: Arrow Up/Down to navigate options. Enter or Space to select. Escape to close.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ActionMenu>

/**
 * Default ActionMenu with a few options.
 */
export const Default: Story = {
  render: () => (
    <ActionMenu aria-label="Actions">
      <ActionMenuOption text="Edit" onClick={fn()} />
      <ActionMenuOption text="Duplicate" onClick={fn()} />
      <ActionMenuOption text="Archive" onClick={fn()} />
      <ActionMenuOption text="Delete" onClick={fn()} />
    </ActionMenu>
  ),
}

/**
 * ActionMenu with some disabled options.
 */
export const WithDisabledOptions: Story = {
  render: () => (
    <ActionMenu aria-label="Actions">
      <ActionMenuOption text="Edit" onClick={fn()} />
      <ActionMenuOption text="Duplicate" disabled />
      <ActionMenuOption text="Archive" onClick={fn()} />
      <ActionMenuOption text="Delete" disabled />
    </ActionMenu>
  ),
}

/**
 * ActionMenu with limited visible rows and scrolling.
 */
export const WithRows: Story = {
  render: () => (
    <ActionMenu aria-label="Actions" rows={3}>
      <ActionMenuOption text="Option 1" onClick={fn()} />
      <ActionMenuOption text="Option 2" onClick={fn()} />
      <ActionMenuOption text="Option 3" onClick={fn()} />
      <ActionMenuOption text="Option 4" onClick={fn()} />
      <ActionMenuOption text="Option 5" onClick={fn()} />
      <ActionMenuOption text="Option 6" onClick={fn()} />
      <ActionMenuOption text="Option 7" onClick={fn()} />
    </ActionMenu>
  ),
}

/**
 * ActionMenu with icons on options.
 */
export const WithIcons: Story = {
  render: () => (
    <ActionMenu aria-label="Actions">
      <ActionMenuOption
        text="Edit"
        icon={<span className="text-[color:var(--sinch-global-color-icon)]">✏️</span>}
        onClick={fn()}
      />
      <ActionMenuOption
        text="Copy"
        icon={<span className="text-[color:var(--sinch-global-color-icon)]">📋</span>}
        onClick={fn()}
      />
      <ActionMenuOption
        text="Delete"
        icon={<span className="text-[color:var(--sinch-global-color-icon)]">🗑️</span>}
        onClick={fn()}
      />
    </ActionMenu>
  ),
}

/**
 * ActionMenu with right-side icons (e.g., keyboard shortcuts).
 */
export const WithRightIcons: Story = {
  render: () => (
    <ActionMenu aria-label="Actions">
      <ActionMenuOption
        text="Cut"
        rightIcon={<span className="text-xs text-foreground-muted">⌘X</span>}
        onClick={fn()}
      />
      <ActionMenuOption
        text="Copy"
        rightIcon={<span className="text-xs text-foreground-muted">⌘C</span>}
        onClick={fn()}
      />
      <ActionMenuOption
        text="Paste"
        rightIcon={<span className="text-xs text-foreground-muted">⌘V</span>}
        onClick={fn()}
      />
    </ActionMenu>
  ),
}

/**
 * ActionMenu with both left and right icons.
 */
export const WithBothIcons: Story = {
  render: () => (
    <ActionMenu aria-label="File actions">
      <ActionMenuOption
        text="Save"
        icon={<span>💾</span>}
        rightIcon={<span className="text-xs text-foreground-muted">⌘S</span>}
        onClick={fn()}
      />
      <ActionMenuOption
        text="Open"
        icon={<span>📂</span>}
        rightIcon={<span className="text-xs text-foreground-muted">⌘O</span>}
        onClick={fn()}
      />
      <ActionMenuOption
        text="Export"
        icon={<span>📤</span>}
        onClick={fn()}
      />
    </ActionMenu>
  ),
}

/**
 * ActionMenu with long text that gets truncated.
 */
export const WithLongText: Story = {
  render: () => (
    <div className="w-48">
      <ActionMenu aria-label="Actions">
        <ActionMenuOption text="Short option" onClick={fn()} />
        <ActionMenuOption text="This is a very long option text that should be truncated" onClick={fn()} />
        <ActionMenuOption text="Another really long option text that won't fit" onClick={fn()} />
      </ActionMenu>
    </div>
  ),
}

/**
 * Empty ActionMenu (edge case).
 */
export const Empty: Story = {
  render: () => (
    <ActionMenu aria-label="Empty menu">
      {/* No options */}
    </ActionMenu>
  ),
}

/**
 * ActionMenu showcasing keyboard navigation.
 * Focus the menu and use Arrow Up/Down to navigate, Enter/Space to select.
 */
export const KeyboardNavigation: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-foreground-muted">
        Click on the menu, then use Arrow Up/Down to navigate, Enter or Space to select.
      </p>
      <ActionMenu aria-label="Keyboard navigation demo">
        <ActionMenuOption text="First Option" onClick={() => alert('First clicked!')} />
        <ActionMenuOption text="Second Option" onClick={() => alert('Second clicked!')} />
        <ActionMenuOption text="Third Option (disabled)" disabled />
        <ActionMenuOption text="Fourth Option" onClick={() => alert('Fourth clicked!')} />
        <ActionMenuOption text="Fifth Option" onClick={() => alert('Fifth clicked!')} />
      </ActionMenu>
    </div>
  ),
}

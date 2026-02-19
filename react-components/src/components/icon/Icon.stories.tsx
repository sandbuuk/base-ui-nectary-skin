import { Icon } from './Icon'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Icon name to display',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the icon',
    },
    iconsVersion: {
      control: 'select',
      options: ['1', '2'],
      description: 'Icon font version',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Icon component for displaying icon font glyphs. Uses the icon name as text content with icon font families.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

/**
 * Default icon with medium size.
 */
export const Default: Story = {
  args: {
    name: 'circle-check',
  },
}

/**
 * Common icons used throughout the design system.
 */
export const CommonIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="circle-check"/>
        <span className="text-xs text-foreground-muted">circle-check</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="circle-cross"/>
        <span className="text-xs text-foreground-muted">circle-cross</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="circle-info"/>
        <span className="text-xs text-foreground-muted">circle-info</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="circle-exclamation"/>
        <span className="text-xs text-foreground-muted">circle-exclamation</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="bell"/>
        <span className="text-xs text-foreground-muted">bell</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="envelope"/>
        <span className="text-xs text-foreground-muted">envelope</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="eye"/>
        <span className="text-xs text-foreground-muted">eye</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="eye-slash"/>
        <span className="text-xs text-foreground-muted">eye-slash</span>
      </div>
    </div>
  ),
}

/**
 * All available size variants.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="bell" size="xs"/>
        <span className="text-xs text-foreground-muted">xs (16px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="bell" size="sm"/>
        <span className="text-xs text-foreground-muted">sm (20px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="bell" size="md"/>
        <span className="text-xs text-foreground-muted">md (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="bell" size="lg"/>
        <span className="text-xs text-foreground-muted">lg (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="bell" size="xl"/>
        <span className="text-xs text-foreground-muted">xl (40px)</span>
      </div>
    </div>
  ),
}

/**
 * Icons with custom colors using text color utilities.
 */
export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Icon name="circle-check" className="text-success"/>
      <Icon name="circle-cross" className="text-danger"/>
      <Icon name="circle-exclamation" className="text-warning"/>
      <Icon name="circle-info" className="text-info"/>
      <Icon name="bell" className="text-primary"/>
      <Icon name="envelope" className="text-foreground-muted"/>
    </div>
  ),
}

/**
 * Small size icons - ideal for inline usage or compact UI.
 */
export const ExtraSmall: Story = {
  args: {
    name: 'circle-check',
    size: 'xs',
  },
}

/**
 * Small size icons.
 */
export const Small: Story = {
  args: {
    name: 'circle-check',
    size: 'sm',
  },
}

/**
 * Medium size icons - the default size.
 */
export const Medium: Story = {
  args: {
    name: 'circle-check',
    size: 'md',
  },
}

/**
 * Large size icons.
 */
export const Large: Story = {
  args: {
    name: 'circle-check',
    size: 'lg',
  },
}

/**
 * Extra large size icons - for prominent display.
 */
export const ExtraLarge: Story = {
  args: {
    name: 'circle-check',
    size: 'xl',
  },
}

/**
 * Icon used inline with text content.
 */
export const InlineWithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Icon name="circle-check" size="sm" className="text-success"/>
      <span>Task completed successfully</span>
    </div>
  ),
}

/**
 * Icons in a notification badge style.
 */
export const NotificationBadge: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="relative">
        <Icon name="bell" size="lg"/>
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[10px] text-pure">
          3
        </span>
      </div>
      <div className="relative">
        <Icon name="envelope" size="lg"/>
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-pure">
          5
        </span>
      </div>
    </div>
  ),
}

/**
 * Icon version 2 with different font families based on icon name prefix.
 */
export const IconVersion2: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon name="fa-star" iconsVersion="2"/>
        <span className="text-xs text-foreground-muted">fa-star (p-z)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="fa-heart" iconsVersion="2"/>
        <span className="text-xs text-foreground-muted">fa-heart (e-o)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="fa-check" iconsVersion="2"/>
        <span className="text-xs text-foreground-muted">fa-check (0-d)</span>
      </div>
    </div>
  ),
}

/**
 * Icons on dark background.
 */
export const OnDarkBackground: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-6 rounded-lg bg-pure-inverted p-8">
      <Icon name="circle-check" size="sm" className="text-pure"/>
      <Icon name="circle-info" size="md" className="text-pure"/>
      <Icon name="bell" size="lg" className="text-pure"/>
      <Icon name="envelope" size="xl" className="text-pure"/>
    </div>
  ),
}

/**
 * Icon grid showing multiple icons in a layout.
 */
export const IconGrid: Story = {
  render: () => {
    const icons = [
      'ai',
      'alarm-clock',
      'bell',
      'book-open',
      'briefcase',
      'calendar-lines',
      'camera',
      'car',
      'cart-shopping',
      'circle-check',
      'circle-cross',
      'circle-info',
      'circle-exclamation',
      'clock-three',
      'cloud',
      'database',
      'envelope',
      'eye',
      'crown',
    ]

    return (
      <div className="grid grid-cols-5 gap-4">
        {icons.map((iconName) => (
          <div
            key={iconName}
            className="flex flex-col items-center gap-2 rounded-md border border-border p-3"
          >
            <Icon name={iconName}/>
            <span className="text-center text-xs text-foreground-muted">
              {iconName}
            </span>
          </div>
        ))}
      </div>
    )
  },
}

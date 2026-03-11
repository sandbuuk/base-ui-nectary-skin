import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { SegmentCollapse } from './SegmentCollapse'

const meta: Meta<typeof SegmentCollapse> = {
  title: 'Components/SegmentCollapse',
  component: SegmentCollapse,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toggle button controlling section expansion/collapse with a rotating chevron icon and smooth animation.\n\nKeyboard: Tab to focus. Enter or Space to toggle expansion.',
      },
    },
  },
  args: {
    onChange: fn(),
    'aria-label': 'Toggle section',
  },
  argTypes: {
    value: {
      control: 'boolean',
      description: 'Expanded state (controlled)',
    },
    defaultValue: {
      control: 'boolean',
      description: 'Default expanded state (uncontrolled)',
    },
    onChange: {
      description: 'Callback fired when toggle state changes',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the button',
    },
    iconSize: {
      control: 'text',
      description: 'Custom icon size override',
    },
  },
}

export default meta
type Story = StoryObj<typeof SegmentCollapse>

/**
 * Default collapsed state
 */
export const Default: Story = {
  args: {
    'aria-label': 'Toggle section',
  },
}

/**
 * Expanded state (chevron points up)
 */
export const Expanded: Story = {
  args: {
    value: true,
    'aria-label': 'Toggle section',
  },
}

/**
 * Collapsed state (chevron points down)
 */
export const Collapsed: Story = {
  args: {
    value: false,
    'aria-label': 'Toggle section',
  },
}

/**
 * Interactive controlled example showing usage with React state
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [expanded, setExpanded] = useState(false)

    return (
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-4">
          <SegmentCollapse
            value={expanded}
            onChange={setExpanded}
            aria-label="Toggle content visibility"
          />
          <span className="text-sm text-foreground-muted">
            {expanded ? 'Expanded' : 'Collapsed'}
          </span>
        </div>
        {expanded && (
          <div className="p-4 bg-surface-secondary rounded-md">
            <p className="text-foreground">
              This content is visible when expanded.
            </p>
          </div>
        )}
      </div>
    )
  },
}

/**
 * Uncontrolled example with default value
 */
export const Uncontrolled: Story = {
  args: {
    defaultValue: false,
    'aria-label': 'Toggle section',
  },
}

/**
 * Example with a collapsible section
 */
export const WithCollapsibleContent: Story = {
  render: function CollapsibleContentExample() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <div className="w-64 border border-border rounded-md overflow-hidden">
        <div className="flex items-center justify-between p-3 bg-surface-secondary">
          <span className="font-medium text-foreground">Section Title</span>
          <SegmentCollapse
            value={isExpanded}
            onChange={setIsExpanded}
            aria-label={isExpanded ? 'Collapse section' : 'Expand section'}
          />
        </div>
        {isExpanded && (
          <div className="p-3 bg-surface-primary">
            <p className="text-sm text-foreground-muted">
              This is the collapsible content that appears when the section is expanded.
            </p>
          </div>
        )}
      </div>
    )
  },
}

/**
 * Multiple collapsible sections (accordion-like behavior)
 */
export const MultipleSections: Story = {
  render: function MultipleSectionsExample() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
      section1: true,
      section2: false,
      section3: false,
    })

    const toggleSection = (section: string) => {
      setExpanded((prev) => ({
        ...prev,
        [section]: !prev[section],
      }))
    }

    const sections = [
      { id: 'section1', title: 'Section One', content: 'Content for section one.' },
      { id: 'section2', title: 'Section Two', content: 'Content for section two.' },
      { id: 'section3', title: 'Section Three', content: 'Content for section three.' },
    ]

    return (
      <div className="w-72 border border-border rounded-md divide-y divide-border">
        {sections.map((section) => (
          <div key={section.id}>
            <div className="flex items-center justify-between p-3 bg-surface-secondary">
              <span className="font-medium text-foreground">{section.title}</span>
              <SegmentCollapse
                value={expanded[section.id]}
                onChange={() => toggleSection(section.id)}
                aria-label={`Toggle ${section.title}`}
              />
            </div>
            {expanded[section.id] && (
              <div className="p-3 bg-surface-primary">
                <p className="text-sm text-foreground-muted">{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  },
}

/**
 * All states side by side for visual comparison
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <SegmentCollapse value={false} aria-label="Collapsed state" />
        <span className="text-xs text-foreground-muted">Collapsed</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <SegmentCollapse value={true} aria-label="Expanded state" />
        <span className="text-xs text-foreground-muted">Expanded</span>
      </div>
    </div>
  ),
}

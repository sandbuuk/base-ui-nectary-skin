import { Text } from './Text'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['m', 's', 'xs', 'xxs'],
      description: 'Text size type',
    },
    inline: {
      control: 'boolean',
      description: 'Display as inline element',
    },
    emphasized: {
      control: 'boolean',
      description: 'Apply emphasized (bolder) styling',
    },
    ellipsis: {
      control: 'boolean',
      description: 'Truncate with ellipsis',
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label'],
      description: 'HTML element to render as',
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
          'Text component for displaying body text with various sizes and styles. Supports four sizes (m, s, xs, xxs), emphasized styling, inline/block display modes, and text truncation.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

const sampleText =
  'The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate the text component styling.'

/**
 * Default text with medium size.
 */
export const Default: Story = {
  args: {
    children: sampleText,
  },
}

/**
 * All available text sizes displayed together for comparison.
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Text type="m" className="text-foreground-muted">
          Medium (m) - Default
        </Text>
        <Text type="m">{sampleText}</Text>
      </div>
      <div>
        <Text type="s" className="text-foreground-muted">
          Small (s)
        </Text>
        <Text type="s">{sampleText}</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          Extra Small (xs)
        </Text>
        <Text type="xs">{sampleText}</Text>
      </div>
      <div>
        <Text type="xxs" className="text-foreground-muted">
          Extra Extra Small (xxs)
        </Text>
        <Text type="xxs">{sampleText}</Text>
      </div>
    </div>
  ),
}

/**
 * Medium size text.
 */
export const Medium: Story = {
  args: {
    type: 'm',
    children: sampleText,
  },
}

/**
 * Small size text.
 */
export const Small: Story = {
  args: {
    type: 's',
    children: sampleText,
  },
}

/**
 * Extra small size text.
 */
export const ExtraSmall: Story = {
  args: {
    type: 'xs',
    children: sampleText,
  },
}

/**
 * Extra extra small size text.
 */
export const ExtraExtraSmall: Story = {
  args: {
    type: 'xxs',
    children: sampleText,
  },
}

/**
 * Emphasized text with bolder weight. Available for 'm' and 's' sizes.
 */
export const Emphasized: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Text type="m" className="text-foreground-muted">
          Medium Emphasized
        </Text>
        <Text type="m" emphasized>
          {sampleText}
        </Text>
      </div>
      <div>
        <Text type="s" className="text-foreground-muted">
          Small Emphasized
        </Text>
        <Text type="s" emphasized>
          {sampleText}
        </Text>
      </div>
    </div>
  ),
}

/**
 * Comparison of regular vs emphasized text.
 */
export const RegularVsEmphasized: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Text type="m">Regular medium text</Text>
        <Text type="m" emphasized>
          Emphasized medium text
        </Text>
      </div>
      <div>
        <Text type="s">Regular small text</Text>
        <Text type="s" emphasized>
          Emphasized small text
        </Text>
      </div>
    </div>
  ),
}

/**
 * Inline text that flows with surrounding content.
 */
export const Inline: Story = {
  render: () => (
    <div>
      This is regular text with{' '}
      <Text inline type="m">
        inline text component
      </Text>{' '}
      in the middle of a sentence.
    </div>
  ),
}

/**
 * Text truncated with ellipsis when it overflows its container.
 */
export const WithEllipsis: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="w-64 border border-border p-2">
        <Text ellipsis>
          This is a very long text that will be truncated with an ellipsis when
          it exceeds the container width.
        </Text>
      </div>
      <div className="w-64 border border-border p-2">
        <Text type="s" ellipsis>
          Small text that will also be truncated with ellipsis behavior applied.
        </Text>
      </div>
    </div>
  ),
}

/**
 * Text with custom color using Tailwind classes.
 */
export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text className="text-foreground">Default foreground</Text>
      <Text className="text-foreground-muted">Muted foreground</Text>
      <Text className="text-foreground-caption">Caption foreground</Text>
      <Text className="text-primary">Primary color</Text>
      <Text className="text-danger">Danger color</Text>
      <Text className="text-success">Success color</Text>
      <Text className="text-warning">Warning color</Text>
      <Text className="text-info">Info color</Text>
    </div>
  ),
}

/**
 * Text rendered as different HTML elements using the `as` prop.
 */
export const PolymorphicRendering: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="p" (default for block)
        </Text>
        <Text as="p">Rendered as a paragraph element</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="span"
        </Text>
        <Text as="span">Rendered as a span element</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="div"
        </Text>
        <Text as="div">Rendered as a div element</Text>
      </div>
      <div>
        <Text type="xs" className="text-foreground-muted">
          as="label"
        </Text>
        <Text as="label" type="s">
          Rendered as a label element
        </Text>
      </div>
    </div>
  ),
}

/**
 * Inline text with various sizes mixed in a paragraph.
 */
export const MixedInlineSizes: Story = {
  render: () => (
    <p>
      This paragraph contains{' '}
      <Text inline type="m" emphasized>
        emphasized medium
      </Text>
      ,{' '}
      <Text inline type="s">
        small
      </Text>
      , and{' '}
      <Text inline type="xs">
        extra small
      </Text>{' '}
      text components inline.
    </p>
  ),
}

/**
 * Text inside various layout contexts.
 */
export const InLayoutContexts: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="rounded-md border border-border p-4">
        <Text type="m" emphasized>
          Card Title
        </Text>
        <Text type="s" className="text-foreground-muted">
          This is a card description using smaller muted text.
        </Text>
      </div>

      <div className="flex items-center gap-4 rounded-md bg-surface-secondary p-4">
        <div className="h-10 w-10 rounded-full bg-primary"/>
        <div>
          <Text type="s" emphasized>
            User Name
          </Text>
          <Text type="xs" className="text-foreground-muted">
            user@email.com
          </Text>
        </div>
      </div>

      <div className="rounded-md bg-info-subtle p-4">
        <Text type="s">
          Information message with default text styling on a colored background.
        </Text>
      </div>
    </div>
  ),
}

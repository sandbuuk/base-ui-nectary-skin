import { Title } from './Title'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['xl', 'l', 'm', 's', 'xs'],
      description: 'Title size type',
    },
    level: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'Semantic heading level',
    },
    ellipsis: {
      control: 'boolean',
      description: 'Truncate with ellipsis',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div'],
      description: 'HTML element to render',
    },
  },
}

export default meta
type Story = StoryObj<typeof Title>

/**
 * Default title with medium size
 */
export const Default: Story = {
  args: {
    children: 'Default Title',
  },
}

/**
 * All title size types
 */
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Title type="xl">Extra Large Title (xl)</Title>
      <Title type="l">Large Title (l)</Title>
      <Title type="m">Medium Title (m)</Title>
      <Title type="s">Small Title (s)</Title>
      <Title type="xs">Extra Small Title (xs)</Title>
    </div>
  ),
}

/**
 * Extra large title - h1 by default
 */
export const ExtraLarge: Story = {
  args: {
    type: 'xl',
    children: 'Extra Large Heading',
  },
}

/**
 * Large title - h2 by default
 */
export const Large: Story = {
  args: {
    type: 'l',
    children: 'Large Heading',
  },
}

/**
 * Medium title - h3 by default
 */
export const Medium: Story = {
  args: {
    type: 'm',
    children: 'Medium Heading',
  },
}

/**
 * Small title - h4 by default
 */
export const Small: Story = {
  args: {
    type: 's',
    children: 'Small Heading',
  },
}

/**
 * Extra small title - h5 by default
 */
export const ExtraSmall: Story = {
  args: {
    type: 'xs',
    children: 'Extra Small Heading',
  },
}

/**
 * Visual size and semantic level can be set independently.
 * Here we have a small visual size but h1 semantic importance.
 */
export const IndependentSizeAndLevel: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Title type="s" level="1">
        Small size, but h1 level (for accessibility)
      </Title>
      <Title type="xl" level="4">
        Extra large size, but h4 level
      </Title>
    </div>
  ),
}

/**
 * Titles with ellipsis truncation enabled
 */
export const WithEllipsis: Story = {
  render: () => (
    <div className="w-64 flex flex-col gap-4">
      <Title ellipsis>
        This is a very long title that will be truncated with an ellipsis
      </Title>
      <Title type="l" ellipsis>
        Another long title demonstrating ellipsis on large text
      </Title>
    </div>
  ),
}

/**
 * Render title as different HTML elements
 */
export const AsCustomElement: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Title as="span" type="m">
        Rendered as span
      </Title>
      <Title as="div" type="m">
        Rendered as div
      </Title>
      <Title as="h1" type="xs">
        Extra small size, but rendered as h1
      </Title>
    </div>
  ),
}

/**
 * Demonstration of semantic heading hierarchy
 */
export const HeadingHierarchy: Story = {
  render: () => (
    <article className="flex flex-col gap-4">
      <Title type="xl">Document Title (h1)</Title>
      <p className="text-foreground-muted">Introduction paragraph...</p>

      <Title type="l">Section 1 (h2)</Title>
      <p className="text-foreground-muted">Section content...</p>

      <Title type="m">Subsection 1.1 (h3)</Title>
      <p className="text-foreground-muted">Subsection content...</p>

      <Title type="s">Minor Heading (h4)</Title>
      <p className="text-foreground-muted">Minor content...</p>

      <Title type="xs">Detail Heading (h5)</Title>
      <p className="text-foreground-muted">Detail content...</p>
    </article>
  ),
}

/**
 * Title with custom className for additional styling
 */
export const WithCustomClassName: Story = {
  args: {
    children: 'Custom Styled Title',
    className: 'text-primary underline',
  },
}

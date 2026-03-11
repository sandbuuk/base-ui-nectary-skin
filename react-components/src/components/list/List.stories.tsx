import type { Meta, StoryObj } from '@storybook/react'
import { List } from './List'
import { ListItem } from './ListItem'

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A container component for displaying vertical lists of items with consistent styling. Compose with `ListItem` children for each row.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof List>

/**
 * Default list with multiple items
 */
export const Default: Story = {
  render: () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ),
}

/**
 * Empty list with no items
 */
export const Empty: Story = {
  render: () => <List />,
}

/**
 * Single item in a list
 */
export const SingleItem: Story = {
  render: () => (
    <List>
      <ListItem>Only item</ListItem>
    </List>
  ),
}

/**
 * List with many items demonstrating scroll behavior
 */
export const ManyItems: Story = {
  render: () => (
    <div className="h-64">
      <List>
        {Array.from({ length: 20 }, (_, i) => (
          <ListItem key={i}>Item {i + 1}</ListItem>
        ))}
      </List>
    </div>
  ),
}

/**
 * List items with rich content
 */
export const WithRichContent: Story = {
  render: () => (
    <List>
      <ListItem>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary" />
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-foreground-muted">john@example.com</div>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-success" />
          <div>
            <div className="font-medium">Jane Smith</div>
            <div className="text-sm text-foreground-muted">jane@example.com</div>
          </div>
        </div>
      </ListItem>
      <ListItem>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-info" />
          <div>
            <div className="font-medium">Bob Johnson</div>
            <div className="text-sm text-foreground-muted">bob@example.com</div>
          </div>
        </div>
      </ListItem>
    </List>
  ),
}

/**
 * List with clickable items
 */
export const ClickableItems: Story = {
  render: () => (
    <List>
      <ListItem className="cursor-pointer" onClick={() => alert('Clicked Item 1')}>
        Click me - Item 1
      </ListItem>
      <ListItem className="cursor-pointer" onClick={() => alert('Clicked Item 2')}>
        Click me - Item 2
      </ListItem>
      <ListItem className="cursor-pointer" onClick={() => alert('Clicked Item 3')}>
        Click me - Item 3
      </ListItem>
    </List>
  ),
}

/**
 * List with custom styling
 */
export const CustomStyling: Story = {
  render: () => (
    <List className="max-w-md rounded-lg border border-border bg-surface-primary">
      <ListItem>
        <div className="px-4">Styled list item 1</div>
      </ListItem>
      <ListItem>
        <div className="px-4">Styled list item 2</div>
      </ListItem>
      <ListItem>
        <div className="px-4">Styled list item 3</div>
      </ListItem>
    </List>
  ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { List } from './List'

const meta = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <List>
      <List.Item>First item</List.Item>
      <List.Item>Second item</List.Item>
      <List.Item>Third item</List.Item>
    </List>
  ),
}

export const WithoutDividers: Story = {
  render: () => (
    <List dividers={false}>
      <List.Item>First item</List.Item>
      <List.Item>Second item</List.Item>
      <List.Item>Third item</List.Item>
    </List>
  ),
}

export const ClickableItems: Story = {
  render: () => (
    <List>
      <List.Item onClick={() => alert('Clicked item 1')}>Clickable item 1</List.Item>
      <List.Item onClick={() => alert('Clicked item 2')}>Clickable item 2</List.Item>
      <List.Item onClick={() => alert('Clicked item 3')}>Clickable item 3</List.Item>
    </List>
  ),
}

export const SelectedItem: Story = {
  render: () => (
    <List>
      <List.Item>Regular item</List.Item>
      <List.Item selected>Selected item</List.Item>
      <List.Item>Regular item</List.Item>
    </List>
  ),
}

export const DisabledItem: Story = {
  render: () => (
    <List>
      <List.Item onClick={() => {}}>Enabled item</List.Item>
      <List.Item disabled onClick={() => {}}>Disabled item</List.Item>
      <List.Item onClick={() => {}}>Enabled item</List.Item>
    </List>
  ),
}

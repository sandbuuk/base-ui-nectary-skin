import type { Meta, StoryObj } from '@storybook/react-vite'
import { Menu } from './Menu'

const meta = {
  title: 'Components/Menu',
  component: Menu.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>
        <button type="button">Open Menu</button>
      </Menu.Trigger>
      <Menu.Popup>
        <Menu.Item onClick={() => console.log('Edit')}>Edit</Menu.Item>
        <Menu.Item onClick={() => console.log('Duplicate')}>Duplicate</Menu.Item>
        <Menu.Separator />
        <Menu.Item onClick={() => console.log('Delete')} style={{ color: 'red' }}>Delete</Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>
        <button type="button">Actions</button>
      </Menu.Trigger>
      <Menu.Popup>
        <Menu.Group label="Edit">
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Group label="View">
          <Menu.Item>Zoom In</Menu.Item>
          <Menu.Item>Zoom Out</Menu.Item>
          <Menu.Item>Reset Zoom</Menu.Item>
        </Menu.Group>
      </Menu.Popup>
    </Menu.Root>
  ),
}

export const WithCheckboxItems: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>
        <button type="button">View Options</button>
      </Menu.Trigger>
      <Menu.Popup>
        <Menu.CheckboxItem defaultChecked>Show Toolbar</Menu.CheckboxItem>
        <Menu.CheckboxItem defaultChecked>Show Sidebar</Menu.CheckboxItem>
        <Menu.CheckboxItem>Show Status Bar</Menu.CheckboxItem>
      </Menu.Popup>
    </Menu.Root>
  ),
}

export const WithRadioItems: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>
        <button type="button">Sort By</button>
      </Menu.Trigger>
      <Menu.Popup>
        <Menu.RadioGroup defaultValue="name">
          <Menu.RadioItem value="name">Name</Menu.RadioItem>
          <Menu.RadioItem value="date">Date Modified</Menu.RadioItem>
          <Menu.RadioItem value="size">Size</Menu.RadioItem>
          <Menu.RadioItem value="type">Type</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Popup>
    </Menu.Root>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>
        <button type="button">Edit</button>
      </Menu.Trigger>
      <Menu.Popup>
        <Menu.Item>Undo</Menu.Item>
        <Menu.Item disabled>Redo</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Cut</Menu.Item>
        <Menu.Item>Copy</Menu.Item>
        <Menu.Item disabled>Paste</Menu.Item>
      </Menu.Popup>
    </Menu.Root>
  ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Table } from './Table'

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Alice Johnson</Table.Cell>
          <Table.Cell>alice@example.com</Table.Cell>
          <Table.Cell>Admin</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Smith</Table.Cell>
          <Table.Cell>bob@example.com</Table.Cell>
          <Table.Cell>Editor</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Charlie Brown</Table.Cell>
          <Table.Cell>charlie@example.com</Table.Cell>
          <Table.Cell>Viewer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

export const WithAlignment: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Product</Table.HeadCell>
          <Table.HeadCell align="center">Quantity</Table.HeadCell>
          <Table.HeadCell align="right">Price</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Widget A</Table.Cell>
          <Table.Cell align="center">150</Table.Cell>
          <Table.Cell align="right">$12.99</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Widget B</Table.Cell>
          <Table.Cell align="center">89</Table.Cell>
          <Table.Cell align="right">$24.50</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

export const ClickableRows: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row onClick={() => alert('Clicked row 1')}>
          <Table.Cell>Project Alpha</Table.Cell>
          <Table.Cell>Active</Table.Cell>
        </Table.Row>
        <Table.Row onClick={() => alert('Clicked row 2')}>
          <Table.Cell>Project Beta</Table.Cell>
          <Table.Cell>Paused</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

export const SelectedRow: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Department</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Jane Doe</Table.Cell>
          <Table.Cell>Engineering</Table.Cell>
        </Table.Row>
        <Table.Row selected>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>Design</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jim Doe</Table.Cell>
          <Table.Cell>Marketing</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

export const WithColumnWidths: Story = {
  render: () => (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell width={60}>#</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell width={120} align="right">Amount</Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>Monthly subscription</Table.Cell>
          <Table.Cell align="right">$9.99</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>Add-on storage</Table.Cell>
          <Table.Cell align="right">$4.99</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
}

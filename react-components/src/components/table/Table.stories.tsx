import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableHeadCell } from './TableHeadCell'
import { TableCell } from './TableCell'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A semantic table component system with Table, TableHead, TableBody, TableRow, TableHeadCell, and TableCell components.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

/**
 * Default table with header and body
 */
export const Default: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
          <TableHeadCell text="Role" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Table with different column alignments
 */
export const WithAlignment: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Product" />
          <TableHeadCell text="Quantity" align="center" />
          <TableHeadCell text="Price" align="end" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell align="center">10</TableCell>
          <TableCell align="end">$99.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell align="center">25</TableCell>
          <TableCell align="end">$149.99</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell align="center">5</TableCell>
          <TableCell align="end">$299.99</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Table with selected rows
 */
export const WithSelectedRows: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Status" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Item 1</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow selected>
          <TableCell>Item 2 (selected)</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Item 3</TableCell>
          <TableCell>Inactive</TableCell>
        </TableRow>
        <TableRow selected>
          <TableCell>Item 4 (selected)</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Table with sticky header (scroll to see effect)
 */
export const WithStickyHeader: Story = {
  render: () => (
    <div className="h-64 overflow-auto border border-border rounded-md">
      <Table>
        <TableHead>
          <TableRow sticky>
            <TableHeadCell text="ID" fit />
            <TableHeadCell text="Name" />
            <TableHeadCell text="Email" />
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 20 }, (_, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>User {i + 1}</TableCell>
              <TableCell>user{i + 1}@example.com</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

/**
 * Table with fit column (shrinks to content width)
 */
export const WithFitColumn: Story = {
  render: () => (
    <Table className="w-full">
      <TableHead>
        <TableRow>
          <TableHeadCell text="#" fit />
          <TableHeadCell text="Name" />
          <TableHeadCell text="Description" />
          <TableHeadCell text="Actions" fit />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Item One</TableCell>
          <TableCell>This is a description of the first item</TableCell>
          <TableCell>
            <button className="px-2 py-1 text-sm bg-primary text-primary-foreground rounded">Edit</button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Item Two</TableCell>
          <TableCell>This is a description of the second item</TableCell>
          <TableCell>
            <button className="px-2 py-1 text-sm bg-primary text-primary-foreground rounded">Edit</button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Table with header cell slots (checkbox, tooltip, etc.)
 */
export const WithHeaderSlots: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell
            checkboxContent={<input type="checkbox" className="w-4 h-4" />}
            fit
          />
          <TableHeadCell
            text="Name"
            tooltipContent={<span className="text-foreground-muted ml-1" title="User's full name">(?)</span>}
          />
          <TableHeadCell
            text="Status"
            rightContent={<span className="text-xs text-foreground-muted">(sortable)</span>}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell><input type="checkbox" className="w-4 h-4" /></TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell><input type="checkbox" className="w-4 h-4" /></TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>Pending</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Empty table
 */
export const Empty: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
          <TableHeadCell text="Role" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell colSpan={3}>
            <div className="text-center text-foreground-muted py-8">
              No data available
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Table with complex cell content
 */
export const WithComplexContent: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="User" />
          <TableHeadCell text="Details" />
          <TableHeadCell text="Status" align="center" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                JD
              </div>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-foreground-muted">Admin</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <div className="text-sm">
              <div>john@example.com</div>
              <div className="text-foreground-muted">Joined Jan 2024</div>
            </div>
          </TableCell>
          <TableCell align="center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-subtle text-success-strong">
              Active
            </span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-info flex items-center justify-center text-pure font-medium">
                JS
              </div>
              <div>
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-foreground-muted">Editor</div>
              </div>
            </div>
          </TableCell>
          <TableCell>
            <div className="text-sm">
              <div>jane@example.com</div>
              <div className="text-foreground-muted">Joined Feb 2024</div>
            </div>
          </TableCell>
          <TableCell align="center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning-subtle text-warning-strong">
              Pending
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Clickable rows
 */
export const ClickableRows: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className="cursor-pointer" onClick={() => alert('Clicked row 1')}>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer" onClick={() => alert('Clicked row 2')}>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
        <TableRow className="cursor-pointer" onClick={() => alert('Clicked row 3')}>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

/**
 * Full width table
 */
export const FullWidth: Story = {
  render: () => (
    <Table className="w-full">
      <TableHead>
        <TableRow>
          <TableHeadCell text="Name" />
          <TableHeadCell text="Email" />
          <TableHeadCell text="Role" />
          <TableHeadCell text="Status" align="end" />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
          <TableCell align="end">Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
          <TableCell align="end">Active</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>Editor</TableCell>
          <TableCell align="end">Inactive</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}

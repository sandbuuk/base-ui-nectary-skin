import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Table } from './Table'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableHeadCell } from './TableHeadCell'
import { TableCell } from './TableCell'

describe('Table', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <Table>
          <tbody>
            <tr>
              <td>Test content</td>
            </tr>
          </tbody>
        </Table>
      )
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders as a table element', () => {
      render(<Table data-testid="table" />)
      expect(screen.getByTestId('table').tagName).toBe('TABLE')
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(<Table ref={ref}>Test</Table>)
      expect(ref.current).toBeInstanceOf(HTMLTableElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(<Table className="custom-class" data-testid="table" />)
      expect(screen.getByTestId('table')).toHaveClass('custom-class')
    })

    it('spreads additional props', () => {
      render(<Table data-testid="table" aria-label="Data table" />)
      expect(screen.getByTestId('table')).toHaveAttribute('aria-label', 'Data table')
    })
  })

  describe('accessibility', () => {
    it('has table role by default', () => {
      render(<Table data-testid="table" />)
      expect(screen.getByRole('table')).toBeInTheDocument()
    })
  })
})

describe('TableHead', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <table>
          <TableHead>
            <tr>
              <th>Header</th>
            </tr>
          </TableHead>
        </table>
      )
      expect(screen.getByText('Header')).toBeInTheDocument()
    })

    it('renders as a thead element', () => {
      render(
        <table>
          <TableHead data-testid="thead" />
        </table>
      )
      expect(screen.getByTestId('thead').tagName).toBe('THEAD')
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(
        <table>
          <TableHead ref={ref}>
            <tr>
              <th>Test</th>
            </tr>
          </TableHead>
        </table>
      )
      expect(ref.current).toBeInstanceOf(HTMLTableSectionElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(
        <table>
          <TableHead className="custom-class" data-testid="thead" />
        </table>
      )
      expect(screen.getByTestId('thead')).toHaveClass('custom-class')
    })
  })

  describe('accessibility', () => {
    it('has rowgroup role', () => {
      render(
        <table>
          <TableHead data-testid="thead" />
        </table>
      )
      expect(screen.getByRole('rowgroup')).toBeInTheDocument()
    })
  })
})

describe('TableBody', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <table>
          <TableBody>
            <tr>
              <td>Cell</td>
            </tr>
          </TableBody>
        </table>
      )
      expect(screen.getByText('Cell')).toBeInTheDocument()
    })

    it('renders as a tbody element', () => {
      render(
        <table>
          <TableBody data-testid="tbody" />
        </table>
      )
      expect(screen.getByTestId('tbody').tagName).toBe('TBODY')
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(
        <table>
          <TableBody ref={ref}>
            <tr>
              <td>Test</td>
            </tr>
          </TableBody>
        </table>
      )
      expect(ref.current).toBeInstanceOf(HTMLTableSectionElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(
        <table>
          <TableBody className="custom-class" data-testid="tbody" />
        </table>
      )
      expect(screen.getByTestId('tbody')).toHaveClass('custom-class')
    })
  })

  describe('accessibility', () => {
    it('has rowgroup role', () => {
      render(
        <table>
          <TableBody data-testid="tbody" />
        </table>
      )
      expect(screen.getByRole('rowgroup')).toBeInTheDocument()
    })
  })
})

describe('TableRow', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <table>
          <tbody>
            <TableRow>
              <td>Cell content</td>
            </TableRow>
          </tbody>
        </table>
      )
      expect(screen.getByText('Cell content')).toBeInTheDocument()
    })

    it('renders as a tr element', () => {
      render(
        <table>
          <tbody>
            <TableRow data-testid="row" />
          </tbody>
        </table>
      )
      expect(screen.getByTestId('row').tagName).toBe('TR')
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(
        <table>
          <tbody>
            <TableRow ref={ref}>
              <td>Test</td>
            </TableRow>
          </tbody>
        </table>
      )
      expect(ref.current).toBeInstanceOf(HTMLTableRowElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(
        <table>
          <tbody>
            <TableRow className="custom-class" data-testid="row" />
          </tbody>
        </table>
      )
      expect(screen.getByTestId('row')).toHaveClass('custom-class')
    })

    it('applies selected state', () => {
      render(
        <table>
          <tbody>
            <TableRow selected data-testid="row" />
          </tbody>
        </table>
      )
      expect(screen.getByTestId('row')).toHaveAttribute('data-selected', 'true')
    })

    it('applies sticky state', () => {
      render(
        <table>
          <thead>
            <TableRow sticky data-testid="row" />
          </thead>
        </table>
      )
      expect(screen.getByTestId('row')).toHaveAttribute('data-sticky', 'true')
    })
  })

  describe('events', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn()
      render(
        <table>
          <tbody>
            <TableRow onClick={handleClick} data-testid="row">
              <td>Click me</td>
            </TableRow>
          </tbody>
        </table>
      )
      await userEvent.click(screen.getByTestId('row'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('accessibility', () => {
    it('has row role', () => {
      render(
        <table>
          <tbody>
            <TableRow data-testid="row" />
          </tbody>
        </table>
      )
      expect(screen.getByRole('row')).toBeInTheDocument()
    })
  })
})

describe('TableHeadCell', () => {
  describe('rendering', () => {
    it('renders text prop', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell text="Header" />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByText('Header')).toBeInTheDocument()
    })

    it('renders children when no text prop', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell>Custom content</TableHeadCell>
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByText('Custom content')).toBeInTheDocument()
    })

    it('prefers text prop over children', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell text="Text prop">Children</TableHeadCell>
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByText('Text prop')).toBeInTheDocument()
      expect(screen.queryByText('Children')).not.toBeInTheDocument()
    })

    it('renders as a th element', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell data-testid="th" text="Header" />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('th').tagName).toBe('TH')
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell ref={ref} text="Test" />
            </tr>
          </thead>
        </table>
      )
      expect(ref.current).toBeInstanceOf(HTMLTableCellElement)
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell className="custom-class" data-testid="th" text="Header" />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('th')).toHaveClass('custom-class')
    })

    it('renders leftContent', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell text="Header" leftContent={<span data-testid="left">L</span>} />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('left')).toBeInTheDocument()
    })

    it('renders rightContent', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell text="Header" rightContent={<span data-testid="right">R</span>} />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('right')).toBeInTheDocument()
    })

    it('renders checkboxContent', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell text="Header" checkboxContent={<input type="checkbox" data-testid="checkbox" />} />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('checkbox')).toBeInTheDocument()
    })

    it('renders tooltipContent', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell text="Header" tooltipContent={<span data-testid="tooltip">?</span>} />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('tooltip')).toBeInTheDocument()
    })

    it('applies fit variant', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell fit data-testid="th" text="Header" />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('th')).toHaveClass('w-px')
    })
  })

  describe('alignment', () => {
    it('applies start alignment by default', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell data-testid="th" text="Header" />
            </tr>
          </thead>
        </table>
      )
      const wrapper = screen.getByTestId('th').querySelector('div')
      expect(wrapper).toHaveClass('justify-start')
    })

    it('applies center alignment', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell align="center" data-testid="th" text="Header" />
            </tr>
          </thead>
        </table>
      )
      const wrapper = screen.getByTestId('th').querySelector('div')
      expect(wrapper).toHaveClass('justify-center')
    })

    it('applies end alignment', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell align="end" data-testid="th" text="Header" />
            </tr>
          </thead>
        </table>
      )
      const wrapper = screen.getByTestId('th').querySelector('div')
      expect(wrapper).toHaveClass('justify-end')
    })
  })

  describe('accessibility', () => {
    it('has columnheader role', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell text="Header" />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByRole('columnheader')).toBeInTheDocument()
    })

    it('has scope="col" attribute', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHeadCell data-testid="th" text="Header" />
            </tr>
          </thead>
        </table>
      )
      expect(screen.getByTestId('th')).toHaveAttribute('scope', 'col')
    })
  })
})

describe('TableCell', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell>Cell content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(screen.getByText('Cell content')).toBeInTheDocument()
    })

    it('renders as a td element', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell data-testid="td">Content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(screen.getByTestId('td').tagName).toBe('TD')
    })

    it('forwards ref', () => {
      const ref = { current: null }
      render(
        <table>
          <tbody>
            <tr>
              <TableCell ref={ref}>Test</TableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(ref.current).toBeInstanceOf(HTMLTableCellElement)
    })

    it('renders complex children', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell>
                <div data-testid="complex">
                  <span>Title</span>
                  <span>Subtitle</span>
                </div>
              </TableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(screen.getByTestId('complex')).toBeInTheDocument()
      expect(screen.getByText('Title')).toBeInTheDocument()
      expect(screen.getByText('Subtitle')).toBeInTheDocument()
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell className="custom-class" data-testid="td">Content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(screen.getByTestId('td')).toHaveClass('custom-class')
    })

    it('spreads additional props', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell data-testid="td" colSpan={2}>Content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(screen.getByTestId('td')).toHaveAttribute('colspan', '2')
    })
  })

  describe('alignment', () => {
    it('applies start alignment by default', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell data-testid="td">Content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      const wrapper = screen.getByTestId('td').querySelector('div')
      expect(wrapper).toHaveClass('text-start')
      expect(wrapper).toHaveClass('items-start')
    })

    it('applies center alignment', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell align="center" data-testid="td">Content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      const wrapper = screen.getByTestId('td').querySelector('div')
      expect(wrapper).toHaveClass('text-center')
      expect(wrapper).toHaveClass('items-center')
    })

    it('applies end alignment', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell align="end" data-testid="td">Content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      const wrapper = screen.getByTestId('td').querySelector('div')
      expect(wrapper).toHaveClass('text-end')
      expect(wrapper).toHaveClass('items-end')
    })
  })

  describe('accessibility', () => {
    it('has cell role', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell>Content</TableCell>
            </tr>
          </tbody>
        </table>
      )
      expect(screen.getByRole('cell')).toBeInTheDocument()
    })
  })
})

describe('Full Table integration', () => {
  it('renders a complete table structure', () => {
    render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell text="Name" />
            <TableHeadCell text="Email" />
            <TableHeadCell text="Status" align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell align="center">Active</TableCell>
          </TableRow>
          <TableRow selected>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell align="center">Inactive</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    // Check headers
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()

    // Check cells
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('Active')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
    expect(screen.getByText('Inactive')).toBeInTheDocument()

    // Check structure
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getAllByRole('rowgroup')).toHaveLength(2) // thead + tbody
    expect(screen.getAllByRole('row')).toHaveLength(3) // 1 header + 2 body
    expect(screen.getAllByRole('columnheader')).toHaveLength(3)
    expect(screen.getAllByRole('cell')).toHaveLength(6)
  })

  it('handles row click events correctly', async () => {
    const handleRowClick = vi.fn()
    render(
      <Table>
        <TableBody>
          <TableRow onClick={handleRowClick} data-testid="clickable-row">
            <TableCell>Click me</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    await userEvent.click(screen.getByTestId('clickable-row'))
    expect(handleRowClick).toHaveBeenCalledTimes(1)
  })

  it('renders table with sticky header', () => {
    render(
      <Table>
        <TableHead>
          <TableRow sticky data-testid="sticky-row">
            <TableHeadCell text="Header" />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Content</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('sticky-row')).toHaveAttribute('data-sticky', 'true')
  })

  it('renders table with selected rows', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row-1">
            <TableCell>Row 1</TableCell>
          </TableRow>
          <TableRow selected data-testid="row-2">
            <TableCell>Row 2 (selected)</TableCell>
          </TableRow>
          <TableRow data-testid="row-3">
            <TableCell>Row 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByTestId('row-1')).not.toHaveAttribute('data-selected')
    expect(screen.getByTestId('row-2')).toHaveAttribute('data-selected', 'true')
    expect(screen.getByTestId('row-3')).not.toHaveAttribute('data-selected')
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import { describe, expect, it, vi } from 'vitest'
import {
  Select,
  SelectButton,
  SelectMenu,
  SelectMenuOption,
} from './SelectMenu'

// ============================================================================
// SelectMenu Tests
// ============================================================================

describe('SelectMenu', () => {
  // Basic rendering
  describe('rendering', () => {
    it('renders with options', () => {
      render(
        <SelectMenu aria-label="Test menu">
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" />
        </SelectMenu>
      )
      expect(screen.getByRole('listbox')).toBeInTheDocument()
      expect(screen.getByText('Option A')).toBeInTheDocument()
      expect(screen.getByText('Option B')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = createRef<HTMLDivElement>()

      render(
        <SelectMenu ref={ref} aria-label="Test menu">
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className', () => {
      render(
        <SelectMenu aria-label="Test menu" className="custom-class">
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )
      expect(screen.getByRole('listbox')).toHaveClass('custom-class')
    })

    it('sets aria-label', () => {
      render(
        <SelectMenu aria-label="Select an option">
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )
      expect(screen.getByLabelText('Select an option')).toBeInTheDocument()
    })

    it('sets aria-multiselectable when multiple', () => {
      render(
        <SelectMenu aria-label="Test menu" multiple>
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )
      expect(screen.getByRole('listbox')).toHaveAttribute(
        'aria-multiselectable',
        'true'
      )
    })
  })

  // Selection
  describe('selection', () => {
    it('marks option as selected when value matches', () => {
      render(
        <SelectMenu aria-label="Test menu" value="b">
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" />
        </SelectMenu>
      )

      const optionB = screen.getByText('Option B').closest('[role="option"]')

      expect(optionB).toHaveAttribute('aria-selected', 'true')
    })

    it('calls onChange when option is clicked', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SelectMenu aria-label="Test menu" onChange={handleChange}>
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" />
        </SelectMenu>
      )

      await user.click(screen.getByText('Option A'))
      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('toggles value in multiple mode', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SelectMenu
          aria-label="Test menu"
          multiple
          value="a"
          onChange={handleChange}
        >
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" />
        </SelectMenu>
      )

      // Click B to add it
      await user.click(screen.getByText('Option B'))
      expect(handleChange).toHaveBeenCalledWith('a,b')
    })

    it('removes value in multiple mode when clicking selected option', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SelectMenu
          aria-label="Test menu"
          multiple
          value="a,b"
          onChange={handleChange}
        >
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" />
        </SelectMenu>
      )

      // Click A to remove it
      await user.click(screen.getByText('Option A'))
      expect(handleChange).toHaveBeenCalledWith('b')
    })
  })

  // Keyboard navigation
  describe('keyboard navigation', () => {
    it('navigates with arrow keys', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SelectMenu aria-label="Test menu" onChange={handleChange}>
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" />
          <SelectMenuOption value="c" text="Option C" />
        </SelectMenu>
      )

      const listbox = screen.getByRole('listbox')

      // Focus the listbox
      await user.click(listbox)

      // Press down to select first option
      await user.keyboard('{ArrowDown}')

      // Press Enter to select
      await user.keyboard('{Enter}')
      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('selects with Space key', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SelectMenu aria-label="Test menu" onChange={handleChange}>
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      await user.keyboard('{ArrowDown}')
      await user.keyboard(' ')
      expect(handleChange).toHaveBeenCalledWith('a')
    })

    it('skips disabled options during navigation', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SelectMenu aria-label="Test menu" onChange={handleChange}>
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" disabled />
          <SelectMenuOption value="c" text="Option C" />
        </SelectMenu>
      )

      const listbox = screen.getByRole('listbox')

      await user.click(listbox)
      await user.keyboard('{ArrowDown}')
      await user.keyboard('{ArrowDown}')
      await user.keyboard('{Enter}')

      // Should skip B and select C
      expect(handleChange).toHaveBeenCalledWith('c')
    })
  })

  // Search functionality
  describe('search', () => {
    it('shows search when searchable is true', () => {
      render(
        <SelectMenu aria-label="Test menu" searchable>
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )

      expect(
        screen.getByPlaceholderText('Search')
      ).toBeInTheDocument()
    })

    it('hides search when searchable is false', () => {
      render(
        <SelectMenu aria-label="Test menu" searchable={false}>
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )

      expect(
        screen.queryByPlaceholderText('Search')
      ).not.toBeInTheDocument()
    })

    it('filters options based on search value', async () => {
      const user = userEvent.setup()

      render(
        <SelectMenu aria-label="Test menu" searchable>
          <SelectMenuOption value="apple" text="Apple" />
          <SelectMenuOption value="banana" text="Banana" />
          <SelectMenuOption value="cherry" text="Cherry" />
        </SelectMenu>
      )

      const searchInput = screen.getByPlaceholderText('Search')

      await user.type(searchInput, 'ban')

      // Only Banana should be visible
      expect(screen.getByText('Banana')).toBeInTheDocument()
      expect(screen.queryByText('Apple')).not.toBeInTheDocument()
      expect(screen.queryByText('Cherry')).not.toBeInTheDocument()
    })

    it('shows no results message when search has no matches', async () => {
      const user = userEvent.setup()

      render(
        <SelectMenu aria-label="Test menu" searchable>
          <SelectMenuOption value="apple" text="Apple" />
          <SelectMenuOption value="banana" text="Banana" />
        </SelectMenu>
      )

      const searchInput = screen.getByPlaceholderText('Search')

      await user.type(searchInput, 'xyz')

      expect(screen.getByText('No results')).toBeInTheDocument()
    })

    it('calls onSearchChange when search value changes', async () => {
      const user = userEvent.setup()
      const handleSearchChange = vi.fn()

      render(
        <SelectMenu
          aria-label="Test menu"
          searchable
          onSearchChange={handleSearchChange}
        >
          <SelectMenuOption value="a" text="Option A" />
        </SelectMenu>
      )

      const searchInput = screen.getByPlaceholderText('Search')

      await user.type(searchInput, 'test')
      expect(handleSearchChange).toHaveBeenCalled()
    })
  })

  // Rows/scrolling
  describe('rows', () => {
    it('applies max-height based on rows prop', () => {
      render(
        <SelectMenu aria-label="Test menu" rows={3}>
          <SelectMenuOption value="a" text="Option A" />
          <SelectMenuOption value="b" text="Option B" />
          <SelectMenuOption value="c" text="Option C" />
          <SelectMenuOption value="d" text="Option D" />
          <SelectMenuOption value="e" text="Option E" />
        </SelectMenu>
      )

      const listbox = screen.getByRole('presentation')

      expect(listbox).toHaveStyle({ maxHeight: '140px' })
    })
  })

  // Disabled options
  describe('disabled options', () => {
    it('does not call onChange when clicking disabled option', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()

      render(
        <SelectMenu aria-label="Test menu" onChange={handleChange}>
          <SelectMenuOption value="a" text="Option A" disabled />
        </SelectMenu>
      )

      await user.click(screen.getByText('Option A'))
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('sets aria-disabled on disabled options', () => {
      render(
        <SelectMenu aria-label="Test menu">
          <SelectMenuOption value="a" text="Option A" disabled />
        </SelectMenu>
      )

      const option = screen.getByText('Option A').closest('[role="option"]')

      expect(option).toHaveAttribute('aria-disabled', 'true')
    })
  })
})

// ============================================================================
// SelectMenuOption Tests
// ============================================================================

describe('SelectMenuOption', () => {
  it('renders with text', () => {
    render(
      <SelectMenu aria-label="Test menu">
        <SelectMenuOption value="test" text="Test Option" />
      </SelectMenu>
    )
    expect(screen.getByText('Test Option')).toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLDivElement>()

    render(
      <SelectMenu aria-label="Test menu">
        <SelectMenuOption ref={ref} value="test" text="Test Option" />
      </SelectMenu>
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders with icon', () => {
    render(
      <SelectMenu aria-label="Test menu">
        <SelectMenuOption
          value="test"
          text="Test Option"
          icon={<span data-testid="test-icon">icon</span>}
        />
      </SelectMenu>
    )
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('renders with custom content', () => {
    render(
      <SelectMenu aria-label="Test menu">
        <SelectMenuOption
          value="test"
          text="Test"
          customContent={<div data-testid="custom-content">Custom</div>}
        />
      </SelectMenu>
    )
    expect(screen.getByTestId('custom-content')).toBeInTheDocument()
  })

  it('sets aria-label', () => {
    render(
      <SelectMenu aria-label="Test menu">
        <SelectMenuOption
          value="test"
          text="Test Option"
          aria-label="Custom label"
        />
      </SelectMenu>
    )
    expect(screen.getByLabelText('Custom label')).toBeInTheDocument()
  })

  it('uses text as aria-label when no aria-label provided', () => {
    render(
      <SelectMenu aria-label="Test menu">
        <SelectMenuOption value="test" text="Test Option" />
      </SelectMenu>
    )
    expect(screen.getByLabelText('Test Option')).toBeInTheDocument()
  })
})

// ============================================================================
// SelectButton Tests
// ============================================================================

describe('SelectButton', () => {
  describe('rendering', () => {
    it('renders with placeholder', () => {
      render(
        <SelectButton aria-label="Test" placeholder="Select an option..." />
      )
      expect(screen.getByText('Select an option...')).toBeInTheDocument()
    })

    it('renders with text', () => {
      render(
        <SelectButton
          aria-label="Test"
          text="Selected value"
          placeholder="Select..."
        />
      )
      expect(screen.getByText('Selected value')).toBeInTheDocument()
      expect(screen.queryByText('Select...')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = createRef<HTMLDivElement>()

      render(<SelectButton ref={ref} aria-label="Test" />)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className', () => {
      render(
        <SelectButton aria-label="Test" className="custom-class" />
      )
      expect(screen.getByRole('button')).toHaveClass('custom-class')
    })

    it('renders with icon', () => {
      render(
        <SelectButton
          aria-label="Test"
          icon={<span data-testid="test-icon">icon</span>}
        />
      )
      expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    })

    it('renders dropdown icon', () => {
      render(<SelectButton aria-label="Test" />)
      expect(screen.getByText('fa-chevron-down')).toBeInTheDocument()
    })
  })

  describe('sizes', () => {
    it('renders small size', () => {
      render(<SelectButton aria-label="Test" size="s" />)
      expect(screen.getByRole('button')).toHaveClass(
        'h-[var(--sinch-comp-select-button-size-container-s,32px)]'
      )
    })

    it('renders medium size (default)', () => {
      render(<SelectButton aria-label="Test" />)
      expect(screen.getByRole('button')).toHaveClass(
        'h-[var(--sinch-comp-select-button-size-container-m,40px)]'
      )
    })

    it('renders large size', () => {
      render(<SelectButton aria-label="Test" size="l" />)
      expect(screen.getByRole('button')).toHaveClass(
        'h-[var(--sinch-comp-select-button-size-container-l,48px)]'
      )
    })
  })

  describe('states', () => {
    it('applies invalid state', () => {
      render(<SelectButton aria-label="Test" invalid />)
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-invalid',
        'true'
      )
    })

    it('applies disabled state', () => {
      render(<SelectButton aria-label="Test" disabled />)
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-disabled',
        'true'
      )
    })

    it('prevents click when disabled', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(
        <SelectButton aria-label="Test" disabled onClick={handleClick} />
      )

      await user.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('events', () => {
    it('calls onClick when clicked', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<SelectButton aria-label="Test" onClick={handleClick} />)

      await user.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('calls onFocus when focused', async () => {
      const user = userEvent.setup()
      const handleFocus = vi.fn()

      render(<SelectButton aria-label="Test" onFocus={handleFocus} />)

      await user.tab()
      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('calls onBlur when blurred', async () => {
      const user = userEvent.setup()
      const handleBlur = vi.fn()

      render(<SelectButton aria-label="Test" onBlur={handleBlur} />)

      await user.tab()
      await user.tab()
      expect(handleBlur).toHaveBeenCalledTimes(1)
    })

    it('triggers click on Enter key', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<SelectButton aria-label="Test" onClick={handleClick} />)

      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('triggers click on Space key', async () => {
      const user = userEvent.setup()
      const handleClick = vi.fn()

      render(<SelectButton aria-label="Test" onClick={handleClick} />)

      const button = screen.getByRole('button')

      button.focus()
      await user.keyboard(' ')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})

// ============================================================================
// Compound Component Tests
// ============================================================================

describe('Select compound component', () => {
  it('exports all subcomponents', () => {
    expect(Select).toBeDefined()
    expect(Select.Option).toBeDefined()
    expect(Select.Button).toBeDefined()
  })

  it('renders a complete select with compound pattern', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()

    render(
      <div>
        <Select.Button
          aria-label="Select fruit"
          placeholder="Select a fruit..."
        />
        <Select aria-label="Select fruit" onChange={handleChange}>
          <Select.Option value="apple" text="Apple" />
          <Select.Option value="banana" text="Banana" />
        </Select>
      </div>
    )

    // Button should be rendered
    expect(screen.getByText('Select a fruit...')).toBeInTheDocument()

    // Menu should have options
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()

    // Click an option
    await user.click(screen.getByText('Apple'))
    expect(handleChange).toHaveBeenCalledWith('apple')
  })
})

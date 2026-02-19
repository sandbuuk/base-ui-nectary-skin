import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { DatePicker } from './DatePicker'

describe('DatePicker', () => {
  // Mock date to ensure consistent tests
  const mockDate = new Date('2024-06-15T12:00:00Z')

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(mockDate)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('rendering', () => {
    it('renders the calendar grid', () => {
      render(<DatePicker />)
      // Should render day buttons (at least 28 days in any month)
      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThan(20) // Days + navigation buttons
    })

    it('renders navigation buttons', () => {
      render(<DatePicker />)
      expect(screen.getByLabelText('Previous year')).toBeInTheDocument()
      expect(screen.getByLabelText('Next year')).toBeInTheDocument()
      expect(screen.getByLabelText('Previous month')).toBeInTheDocument()
      expect(screen.getByLabelText('Next month')).toBeInTheDocument()
    })

    it('renders weekday names', () => {
      render(<DatePicker locale="en-US" />)
      // Monday through Sunday (starting Monday) - check that we have 7 weekday cells
      // Use getAllByText since some letters repeat (T for Tue/Thu, S for Sat/Sun)
      expect(screen.getByText('M')).toBeInTheDocument()
      expect(screen.getAllByText('T').length).toBe(2) // Tuesday and Thursday
      expect(screen.getByText('W')).toBeInTheDocument()
      expect(screen.getByText('F')).toBeInTheDocument()
      expect(screen.getAllByText('S').length).toBe(2) // Saturday and Sunday
    })

    it('renders month and year in header', () => {
      render(<DatePicker value="2024-06-20" />)
      // Uses role="status" with aria-live="polite" for the header text
      const header = screen.getByRole('status')
      expect(header).toHaveTextContent(/Jun.*2024/i)
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<DatePicker ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('applies custom className', () => {
      render(<DatePicker className="custom-class" data-testid="datepicker" />)
      expect(screen.getByTestId('datepicker')).toHaveClass('custom-class')
    })
  })

  describe('date selection - single mode', () => {
    it('calls onChange when a date is clicked', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onChange = vi.fn()

      render(<DatePicker value="2024-06-10" onChange={onChange} />)

      // Find and click day 20
      const day20 = screen.getByRole('button', { name: '20' })
      await user.click(day20)

      expect(onChange).toHaveBeenCalledWith('2024-06-20')
    })

    it('highlights selected date (not today)', () => {
      // Use a date that is NOT today (which is June 15)
      render(<DatePicker value="2024-06-20" />)

      const day20 = screen.getByRole('button', { name: '20' })
      // Selected dates have the checked background color class
      expect(day20).toHaveClass('bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]')
    })

    it('highlights today when not selected', () => {
      render(<DatePicker />)

      // Today is June 15, 2024 (mocked) - no value selected
      const today = screen.getByRole('button', { name: '15' })
      expect(today).toHaveClass('bg-[var(--sinch-comp-date-picker-today-color-default-background-initial)]')
    })

    it('highlights today with selected style when today is selected', () => {
      // Select today (June 15)
      render(<DatePicker value="2024-06-15" />)

      const today = screen.getByRole('button', { name: '15' })
      // When today is selected, it gets the "today selected" style
      expect(today).toHaveClass('bg-[var(--sinch-comp-date-picker-today-color-checked-background-initial)]')
    })

    it('works in uncontrolled mode with defaultValue', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onChange = vi.fn()

      render(<DatePicker defaultValue="2024-06-10" onChange={onChange} />)

      const day20 = screen.getByRole('button', { name: '20' })
      await user.click(day20)

      expect(onChange).toHaveBeenCalledWith('2024-06-20')
    })
  })

  describe('date selection - range mode', () => {
    it('selects a range when two dates are clicked', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onChange = vi.fn()

      render(<DatePicker range value="" onChange={onChange} />)

      const day10 = screen.getByRole('button', { name: '10' })
      const day20 = screen.getByRole('button', { name: '20' })

      // Click first date
      await user.click(day10)
      expect(onChange).not.toHaveBeenCalled() // Not called until range is complete

      // Click second date
      await user.click(day20)
      expect(onChange).toHaveBeenCalledWith('2024-06-10,2024-06-20')
    })

    it('sorts dates in range (end before start)', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onChange = vi.fn()

      render(<DatePicker range value="" onChange={onChange} />)

      const day20 = screen.getByRole('button', { name: '20' })
      const day10 = screen.getByRole('button', { name: '10' })

      // Click dates in reverse order
      await user.click(day20)
      await user.click(day10)

      // Should be sorted
      expect(onChange).toHaveBeenCalledWith('2024-06-10,2024-06-20')
    })

    it('displays existing range selection', () => {
      render(<DatePicker range value="2024-06-10,2024-06-20" />)

      const day10 = screen.getByRole('button', { name: '10' })
      const day20 = screen.getByRole('button', { name: '20' })

      // Both endpoints should be selected
      expect(day10).toHaveClass('bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]')
      expect(day20).toHaveClass('bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]')
    })
  })

  describe('navigation', () => {
    it('navigates to previous month', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

      render(<DatePicker value="2024-06-20" />)

      const prevMonth = screen.getByLabelText('Previous month')
      await user.click(prevMonth)

      const header = screen.getByRole('status')
      expect(header).toHaveTextContent(/May.*2024/i)
    })

    it('navigates to next month', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

      render(<DatePicker value="2024-06-20" />)

      const nextMonth = screen.getByLabelText('Next month')
      await user.click(nextMonth)

      const header = screen.getByRole('status')
      expect(header).toHaveTextContent(/Jul.*2024/i)
    })

    it('navigates to previous year', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

      render(<DatePicker value="2024-06-20" />)

      const prevYear = screen.getByLabelText('Previous year')
      await user.click(prevYear)

      const header = screen.getByRole('status')
      expect(header).toHaveTextContent(/Jun.*2023/i)
    })

    it('navigates to next year', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

      render(<DatePicker value="2024-06-20" />)

      const nextYear = screen.getByLabelText('Next year')
      await user.click(nextYear)

      const header = screen.getByRole('status')
      expect(header).toHaveTextContent(/Jun.*2025/i)
    })
  })

  describe('min/max constraints', () => {
    it('disables dates before min', () => {
      render(<DatePicker min="2024-06-10" max="2024-06-30" value="2024-06-20" />)

      const day5 = screen.getByRole('button', { name: '5' })
      expect(day5).toBeDisabled()
    })

    it('disables dates after max', () => {
      render(<DatePicker min="2024-06-01" max="2024-06-20" value="2024-06-10" />)

      const day25 = screen.getByRole('button', { name: '25' })
      expect(day25).toBeDisabled()
    })

    it('disables previous month button at min boundary', () => {
      render(<DatePicker min="2024-06-01" max="2024-12-31" value="2024-06-20" />)

      const prevMonth = screen.getByLabelText('Previous month')
      expect(prevMonth).toBeDisabled()
    })

    it('disables next month button at max boundary', () => {
      render(<DatePicker min="2024-01-01" max="2024-06-30" value="2024-06-20" />)

      const nextMonth = screen.getByLabelText('Next month')
      expect(nextMonth).toBeDisabled()
    })

    it('disables previous year button at min boundary', () => {
      render(<DatePicker min="2024-01-01" max="2025-12-31" value="2024-06-20" />)

      const prevYear = screen.getByLabelText('Previous year')
      expect(prevYear).toBeDisabled()
    })

    it('disables next year button at max boundary', () => {
      render(<DatePicker min="2023-01-01" max="2024-12-31" value="2024-06-20" />)

      const nextYear = screen.getByLabelText('Next year')
      expect(nextYear).toBeDisabled()
    })

    it('does not call onChange for disabled dates', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      const onChange = vi.fn()

      render(<DatePicker min="2024-06-10" max="2024-06-30" value="2024-06-20" onChange={onChange} />)

      const day5 = screen.getByRole('button', { name: '5' })
      await user.click(day5)

      expect(onChange).not.toHaveBeenCalled()
    })
  })

  describe('localization', () => {
    it('uses en-US locale by default', () => {
      render(<DatePicker value="2024-06-20" />)

      const header = screen.getByRole('status')
      expect(header).toHaveTextContent(/Jun/i)
    })

    it('uses specified locale for month names', () => {
      render(<DatePicker locale="de-DE" value="2024-06-20" />)

      const header = screen.getByRole('status')
      // German locale should show "Juni" or "Jun" (depending on Intl support)
      expect(header).toHaveTextContent(/Jun/i)
      expect(header).toHaveTextContent(/2024/)
    })

    it('uses specified locale for day names', () => {
      render(<DatePicker locale="fr-FR" value="2024-06-20" />)

      // French day abbreviations (L for Lundi, etc.)
      expect(screen.getByText('L')).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('has aria-live on month/year header', () => {
      render(<DatePicker value="2024-06-20" />)

      const header = screen.getByRole('status')
      expect(header).toHaveAttribute('aria-live', 'polite')
    })

    it('supports custom aria labels for navigation', () => {
      render(
        <DatePicker
          value="2024-06-20"
          prevYearAriaLabel="Go back one year"
          nextYearAriaLabel="Go forward one year"
          prevMonthAriaLabel="Go back one month"
          nextMonthAriaLabel="Go forward one month"
        />
      )

      expect(screen.getByLabelText('Go back one year')).toBeInTheDocument()
      expect(screen.getByLabelText('Go forward one year')).toBeInTheDocument()
      expect(screen.getByLabelText('Go back one month')).toBeInTheDocument()
      expect(screen.getByLabelText('Go forward one month')).toBeInTheDocument()
    })

    it('hides empty day cells from screen readers', () => {
      render(<DatePicker value="2024-06-01" />)

      // Find buttons with aria-hidden
      const hiddenButtons = screen.getAllByRole('button', { hidden: true })
        .filter(btn => btn.getAttribute('aria-hidden') === 'true')

      expect(hiddenButtons.length).toBeGreaterThan(0)
    })

    it('all day buttons have type="button"', () => {
      render(<DatePicker value="2024-06-20" />)

      const buttons = screen.getAllByRole('button')
      buttons.forEach(button => {
        expect(button).toHaveAttribute('type', 'button')
      })
    })
  })

  describe('data attributes', () => {
    it('sets data-date attribute on day buttons', () => {
      render(<DatePicker value="2024-06-20" />)

      const day20 = screen.getByRole('button', { name: '20' })
      expect(day20).toHaveAttribute('data-date', '2024-06-20')
    })
  })

  describe('controlled vs uncontrolled', () => {
    it('controlled: value prop determines selection', () => {
      const { rerender } = render(<DatePicker value="2024-06-10" />)

      let day10 = screen.getByRole('button', { name: '10' })
      expect(day10).toHaveClass('bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]')

      rerender(<DatePicker value="2024-06-20" />)

      const day20 = screen.getByRole('button', { name: '20' })
      expect(day20).toHaveClass('bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]')

      day10 = screen.getByRole('button', { name: '10' })
      expect(day10).not.toHaveClass('bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]')
    })

    it('uncontrolled: manages its own state', async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

      render(<DatePicker defaultValue="2024-06-10" />)

      const day20 = screen.getByRole('button', { name: '20' })
      await user.click(day20)

      // After clicking, day 20 should be selected
      expect(day20).toHaveClass('bg-[var(--sinch-comp-date-picker-day-color-checked-background-initial)]')
    })
  })
})

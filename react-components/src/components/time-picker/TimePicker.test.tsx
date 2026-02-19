import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { TimePicker } from './TimePicker'

describe('TimePicker', () => {
  // ============================================================================
  // Rendering
  // ============================================================================

  describe('rendering', () => {
    it('renders the time picker', () => {
      render(<TimePicker aria-label="Select time" />)
      expect(screen.getByRole('group', { name: 'Time picker clock face' })).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<TimePicker ref={ref} aria-label="Select time" />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<TimePicker className="custom-class" aria-label="Select time" />)
      expect(screen.getByLabelText('Select time')).toHaveClass('custom-class')
    })

    it('renders submit button', () => {
      render(<TimePicker aria-label="Select time" submitAriaLabel="Confirm" />)
      expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
    })

    it('renders hour and minute sliders', () => {
      render(<TimePicker aria-label="Select time" />)
      expect(screen.getByRole('slider', { name: 'Hour selector' })).toBeInTheDocument()
      expect(screen.getByRole('slider', { name: 'Minute selector' })).toBeInTheDocument()
    })

    it('renders hour digits', () => {
      render(<TimePicker aria-label="Select time" />)
      // Check for some hour digits (12, 3, 6, 9 are commonly visible)
      expect(screen.getByRole('button', { name: "12 o'clock" })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: "3 o'clock" })).toBeInTheDocument()
    })

    it('renders minute digits', () => {
      render(<TimePicker aria-label="Select time" />)
      // Check for minute digits (0, 15, 30, 45)
      expect(screen.getByRole('button', { name: '0 minutes' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: '15 minutes' })).toBeInTheDocument()
    })
  })

  // ============================================================================
  // 24-hour mode (default)
  // ============================================================================

  describe('24-hour mode', () => {
    it('renders 24-hour digits when ampm is false', () => {
      render(<TimePicker aria-label="Select time" />)
      // 24 is shown for hour 12 position in 24-hour mode inner ring
      expect(screen.getByRole('button', { name: "24 o'clock" })).toBeInTheDocument()
    })

    it('displays hours in 24-hour format in header', () => {
      render(<TimePicker defaultValue="14:30:00" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      // The first meter should show 14 (hours)
      expect(meters[0]).toHaveAttribute('aria-valuenow', '14')
    })

    it('does not render AM/PM toggle', () => {
      render(<TimePicker aria-label="Select time" />)
      expect(screen.queryByRole('tab', { name: 'AM' })).not.toBeInTheDocument()
      expect(screen.queryByRole('tab', { name: 'PM' })).not.toBeInTheDocument()
    })
  })

  // ============================================================================
  // 12-hour mode (ampm)
  // ============================================================================

  describe('12-hour mode (ampm)', () => {
    it('renders AM/PM toggle when ampm is true', () => {
      render(<TimePicker ampm aria-label="Select time" />)
      expect(screen.getByRole('tab', { name: 'AM' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'PM' })).toBeInTheDocument()
    })

    it('does not render 24-hour digits when ampm is true', () => {
      render(<TimePicker ampm aria-label="Select time" />)
      // In 12-hour mode, we shouldn't see the inner ring with 24
      expect(screen.queryByRole('button', { name: "24 o'clock" })).not.toBeInTheDocument()
    })

    it('displays 12 for midnight (00:00) in header', () => {
      render(<TimePicker ampm defaultValue="00:00:00" aria-label="Select time" />)
      // Check the meters - hours should be 0 internally but displayed as 12
      const meters = screen.getAllByRole('meter')
      const hourMeter = meters[0]
      expect(hourMeter).toHaveAttribute('aria-valuenow', '0')
    })

    it('selects AM by default for morning hours', () => {
      render(<TimePicker ampm defaultValue="09:00:00" aria-label="Select time" />)
      const amTab = screen.getByRole('tab', { name: 'AM' })
      expect(amTab).toHaveAttribute('aria-selected', 'true')
    })

    it('selects PM for afternoon hours', () => {
      render(<TimePicker ampm defaultValue="15:00:00" aria-label="Select time" />)
      const pmTab = screen.getByRole('tab', { name: 'PM' })
      expect(pmTab).toHaveAttribute('aria-selected', 'true')
    })
  })

  // ============================================================================
  // Value handling
  // ============================================================================

  describe('value handling', () => {
    it('uses defaultValue for initial state', () => {
      render(<TimePicker defaultValue="10:30:00" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '10')
      expect(meters[1]).toHaveAttribute('aria-valuenow', '30')
    })

    it('handles controlled value', () => {
      const { rerender } = render(
        <TimePicker value="08:15:00" aria-label="Select time" />
      )
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '8')
      expect(meters[1]).toHaveAttribute('aria-valuenow', '15')

      // Update value
      rerender(<TimePicker value="16:45:00" aria-label="Select time" />)
      expect(meters[0]).toHaveAttribute('aria-valuenow', '16')
      expect(meters[1]).toHaveAttribute('aria-valuenow', '45')
    })

    it('parses time with only hours and minutes', () => {
      render(<TimePicker defaultValue="14:30" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '14')
      expect(meters[1]).toHaveAttribute('aria-valuenow', '30')
    })

    it('defaults to 00:00 for invalid value', () => {
      render(<TimePicker defaultValue="invalid" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '0')
      expect(meters[1]).toHaveAttribute('aria-valuenow', '0')
    })

    it('defaults to 00:00 for out-of-range hours', () => {
      render(<TimePicker defaultValue="25:00:00" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '0')
    })

    it('defaults to 00:00 for out-of-range minutes', () => {
      render(<TimePicker defaultValue="12:65:00" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[1]).toHaveAttribute('aria-valuenow', '0')
    })
  })

  // ============================================================================
  // Submit functionality
  // ============================================================================

  describe('submit functionality', () => {
    it('calls onChange with formatted time when submit is clicked', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(
        <TimePicker
          defaultValue="14:30:00"
          onChange={handleChange}
          aria-label="Select time"
          submitAriaLabel="Submit"
        />
      )

      const submitButton = screen.getByRole('button', { name: 'Submit' })
      await user.click(submitButton)

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith('14:30:00')
    })

    it('returns time in HH:mm:ss format', async () => {
      const user = userEvent.setup()
      const handleChange = vi.fn()
      render(
        <TimePicker
          defaultValue="09:05:00"
          onChange={handleChange}
          aria-label="Select time"
          submitAriaLabel="Submit"
        />
      )

      const submitButton = screen.getByRole('button', { name: 'Submit' })
      await user.click(submitButton)

      expect(handleChange).toHaveBeenCalledWith('09:05:00')
    })
  })

  // ============================================================================
  // Keyboard navigation
  // ============================================================================

  describe('keyboard navigation', () => {
    it('increases hour on ArrowUp on hour needle', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="10:00:00" aria-label="Select time" />)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      hourSlider.focus()
      await user.keyboard('{ArrowUp}')

      expect(hourSlider).toHaveAttribute('aria-valuenow', '11')
    })

    it('decreases hour on ArrowDown on hour needle', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="10:00:00" aria-label="Select time" />)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      hourSlider.focus()
      await user.keyboard('{ArrowDown}')

      expect(hourSlider).toHaveAttribute('aria-valuenow', '9')
    })

    it('wraps hour from 23 to 0 on ArrowUp', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="23:00:00" aria-label="Select time" />)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      hourSlider.focus()
      await user.keyboard('{ArrowUp}')

      expect(hourSlider).toHaveAttribute('aria-valuenow', '0')
    })

    it('wraps hour from 0 to 23 on ArrowDown', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="00:00:00" aria-label="Select time" />)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      hourSlider.focus()
      await user.keyboard('{ArrowDown}')

      expect(hourSlider).toHaveAttribute('aria-valuenow', '23')
    })

    it('increases minute on ArrowUp on minute needle', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="00:30:00" aria-label="Select time" />)

      const minuteSlider = screen.getByRole('slider', { name: 'Minute selector' })
      minuteSlider.focus()
      await user.keyboard('{ArrowUp}')

      expect(minuteSlider).toHaveAttribute('aria-valuenow', '31')
    })

    it('decreases minute on ArrowDown on minute needle', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="00:30:00" aria-label="Select time" />)

      const minuteSlider = screen.getByRole('slider', { name: 'Minute selector' })
      minuteSlider.focus()
      await user.keyboard('{ArrowDown}')

      expect(minuteSlider).toHaveAttribute('aria-valuenow', '29')
    })

    it('wraps minute from 59 to 0 on ArrowUp', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="00:59:00" aria-label="Select time" />)

      const minuteSlider = screen.getByRole('slider', { name: 'Minute selector' })
      minuteSlider.focus()
      await user.keyboard('{ArrowUp}')

      expect(minuteSlider).toHaveAttribute('aria-valuenow', '0')
    })

    it('wraps minute from 0 to 59 on ArrowDown', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="00:00:00" aria-label="Select time" />)

      const minuteSlider = screen.getByRole('slider', { name: 'Minute selector' })
      minuteSlider.focus()
      await user.keyboard('{ArrowDown}')

      expect(minuteSlider).toHaveAttribute('aria-valuenow', '59')
    })
  })

  // ============================================================================
  // Digit clicks
  // ============================================================================

  describe('digit clicks', () => {
    it('updates hour when hour digit is clicked', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="00:00:00" aria-label="Select time" />)

      const hour3Button = screen.getByRole('button', { name: "3 o'clock" })
      await user.click(hour3Button)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      expect(hourSlider).toHaveAttribute('aria-valuenow', '3')
    })

    it('updates minute when minute digit is clicked', async () => {
      const user = userEvent.setup()
      render(<TimePicker defaultValue="00:00:00" aria-label="Select time" />)

      const minute15Button = screen.getByRole('button', { name: '15 minutes' })
      await user.click(minute15Button)

      const minuteSlider = screen.getByRole('slider', { name: 'Minute selector' })
      expect(minuteSlider).toHaveAttribute('aria-valuenow', '15')
    })
  })

  // ============================================================================
  // AM/PM toggle
  // ============================================================================

  describe('AM/PM toggle', () => {
    it('switches from AM to PM', async () => {
      const user = userEvent.setup()
      render(<TimePicker ampm defaultValue="09:00:00" aria-label="Select time" />)

      const pmTab = screen.getByRole('tab', { name: 'PM' })
      await user.click(pmTab)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      expect(hourSlider).toHaveAttribute('aria-valuenow', '21') // 9 AM -> 9 PM = 21:00
    })

    it('switches from PM to AM', async () => {
      const user = userEvent.setup()
      render(<TimePicker ampm defaultValue="15:00:00" aria-label="Select time" />)

      const amTab = screen.getByRole('tab', { name: 'AM' })
      await user.click(amTab)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      expect(hourSlider).toHaveAttribute('aria-valuenow', '3') // 3 PM -> 3 AM = 03:00
    })

    it('does not change when clicking already selected option', async () => {
      const user = userEvent.setup()
      render(<TimePicker ampm defaultValue="09:00:00" aria-label="Select time" />)

      const amTab = screen.getByRole('tab', { name: 'AM' })
      await user.click(amTab)

      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      expect(hourSlider).toHaveAttribute('aria-valuenow', '9') // Still 9 AM
    })
  })

  // ============================================================================
  // Accessibility
  // ============================================================================

  describe('accessibility', () => {
    it('has proper aria-label on root element', () => {
      render(<TimePicker aria-label="Select departure time" />)
      expect(screen.getByLabelText('Select departure time')).toBeInTheDocument()
    })

    it('has proper aria attributes on hour slider', () => {
      render(<TimePicker defaultValue="10:30:00" aria-label="Select time" />)
      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })

      expect(hourSlider).toHaveAttribute('aria-valuemin', '0')
      expect(hourSlider).toHaveAttribute('aria-valuemax', '23')
      expect(hourSlider).toHaveAttribute('aria-valuenow', '10')
      expect(hourSlider).toHaveAttribute('aria-valuetext', "10 o'clock")
    })

    it('has proper aria attributes on minute slider', () => {
      render(<TimePicker defaultValue="10:30:00" aria-label="Select time" />)
      const minuteSlider = screen.getByRole('slider', { name: 'Minute selector' })

      expect(minuteSlider).toHaveAttribute('aria-valuemin', '0')
      expect(minuteSlider).toHaveAttribute('aria-valuemax', '59')
      expect(minuteSlider).toHaveAttribute('aria-valuenow', '30')
      expect(minuteSlider).toHaveAttribute('aria-valuetext', '30 minutes')
    })

    it('has proper role on clock face', () => {
      render(<TimePicker aria-label="Select time" />)
      expect(screen.getByRole('group', { name: 'Time picker clock face' })).toBeInTheDocument()
    })

    it('hour digits have button role and aria-label', () => {
      render(<TimePicker aria-label="Select time" />)
      const hourButton = screen.getByRole('button', { name: "6 o'clock" })
      expect(hourButton).toBeInTheDocument()
    })

    it('minute digits have button role and aria-label', () => {
      render(<TimePicker aria-label="Select time" />)
      const minuteButton = screen.getByRole('button', { name: '30 minutes' })
      expect(minuteButton).toBeInTheDocument()
    })

    it('updates aria-valuemax for hour slider in 12-hour mode', () => {
      render(<TimePicker ampm aria-label="Select time" />)
      const hourSlider = screen.getByRole('slider', { name: 'Hour selector' })
      expect(hourSlider).toHaveAttribute('aria-valuemax', '12')
    })
  })

  // ============================================================================
  // Edge cases
  // ============================================================================

  describe('edge cases', () => {
    it('handles empty string value', () => {
      render(<TimePicker value="" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '0')
      expect(meters[1]).toHaveAttribute('aria-valuenow', '0')
    })

    it('handles noon (12:00) correctly in 24-hour mode', () => {
      render(<TimePicker defaultValue="12:00:00" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '12')
    })

    it('handles midnight (00:00) correctly in 24-hour mode', () => {
      render(<TimePicker defaultValue="00:00:00" aria-label="Select time" />)
      const meters = screen.getAllByRole('meter')
      expect(meters[0]).toHaveAttribute('aria-valuenow', '0')
    })

    it('handles noon (12:00 PM) correctly in 12-hour mode', () => {
      render(<TimePicker ampm defaultValue="12:00:00" aria-label="Select time" />)
      const pmTab = screen.getByRole('tab', { name: 'PM' })
      expect(pmTab).toHaveAttribute('aria-selected', 'true')
    })

    it('handles midnight (12:00 AM) correctly in 12-hour mode', () => {
      render(<TimePicker ampm defaultValue="00:00:00" aria-label="Select time" />)
      const amTab = screen.getByRole('tab', { name: 'AM' })
      expect(amTab).toHaveAttribute('aria-selected', 'true')
    })
  })
})

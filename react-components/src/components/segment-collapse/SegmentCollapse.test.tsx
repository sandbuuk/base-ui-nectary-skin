import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SegmentCollapse } from './SegmentCollapse'

describe('SegmentCollapse', () => {
  describe('rendering', () => {
    it('renders as a button', () => {
      render(<SegmentCollapse aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('renders with the chevron icon', () => {
      render(<SegmentCollapse aria-label="Toggle section" />)
      expect(screen.getByRole('img', { name: 'fa-chevron-down' })).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<SegmentCollapse ref={ref} aria-label="Toggle section" />)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })

    it('applies custom className', () => {
      render(<SegmentCollapse aria-label="Toggle section" className="custom-class" />)
      expect(screen.getByRole('checkbox')).toHaveClass('custom-class')
    })
  })

  describe('controlled mode', () => {
    it('reflects controlled value=true (expanded)', () => {
      render(<SegmentCollapse value={true} aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
    })

    it('reflects controlled value=false (collapsed)', () => {
      render(<SegmentCollapse value={false} aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
    })

    it('calls onChange with toggled value when clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentCollapse value={false} onChange={onChange} aria-label="Toggle section" />
      )

      await user.click(screen.getByRole('checkbox'))
      expect(onChange).toHaveBeenCalledWith(true)
    })

    it('calls onChange with opposite value when expanded and clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentCollapse value={true} onChange={onChange} aria-label="Toggle section" />
      )

      await user.click(screen.getByRole('checkbox'))
      expect(onChange).toHaveBeenCalledWith(false)
    })

    it('does not update state internally when controlled', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(
        <SegmentCollapse value={false} onChange={onChange} aria-label="Toggle section" />
      )

      await user.click(screen.getByRole('checkbox'))
      // Still shows false because controlled mode doesn't update internally
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
    })
  })

  describe('uncontrolled mode', () => {
    it('defaults to collapsed (value=false)', () => {
      render(<SegmentCollapse aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
    })

    it('respects defaultValue=true', () => {
      render(<SegmentCollapse defaultValue={true} aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
    })

    it('respects defaultValue=false', () => {
      render(<SegmentCollapse defaultValue={false} aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'false')
    })

    it('toggles internal state when clicked', async () => {
      const user = userEvent.setup()

      render(<SegmentCollapse aria-label="Toggle section" />)
      const button = screen.getByRole('checkbox')

      expect(button).toHaveAttribute('aria-checked', 'false')

      await user.click(button)
      expect(button).toHaveAttribute('aria-checked', 'true')

      await user.click(button)
      expect(button).toHaveAttribute('aria-checked', 'false')
    })

    it('calls onChange even in uncontrolled mode', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<SegmentCollapse onChange={onChange} aria-label="Toggle section" />)

      await user.click(screen.getByRole('checkbox'))
      expect(onChange).toHaveBeenCalledWith(true)
    })
  })

  describe('icon rotation', () => {
    it('icon is rotated 180deg when collapsed (value=false)', () => {
      render(<SegmentCollapse value={false} aria-label="Toggle section" />)
      const icon = screen.getByRole('img', { name: 'fa-chevron-down' })
      expect(icon).toHaveStyle({ transform: 'rotate(180deg)' })
    })

    it('icon is rotated 0deg when expanded (value=true)', () => {
      render(<SegmentCollapse value={true} aria-label="Toggle section" />)
      const icon = screen.getByRole('img', { name: 'fa-chevron-down' })
      expect(icon).toHaveStyle({ transform: 'rotate(0deg)' })
    })
  })

  describe('accessibility', () => {
    it('has role="checkbox"', () => {
      render(<SegmentCollapse aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toBeInTheDocument()
    })

    it('has aria-checked attribute', () => {
      render(<SegmentCollapse value={true} aria-label="Toggle section" />)
      expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'true')
    })

    it('applies aria-label', () => {
      render(<SegmentCollapse aria-label="Toggle details" />)
      expect(screen.getByLabelText('Toggle details')).toBeInTheDocument()
    })

    it('is focusable', () => {
      render(<SegmentCollapse aria-label="Toggle section" />)
      const button = screen.getByRole('checkbox')
      button.focus()
      expect(button).toHaveFocus()
    })

    it('can be toggled with keyboard (Enter)', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<SegmentCollapse onChange={onChange} aria-label="Toggle section" />)
      const button = screen.getByRole('checkbox')

      button.focus()
      await user.keyboard('{Enter}')
      expect(onChange).toHaveBeenCalledWith(true)
    })

    it('can be toggled with keyboard (Space)', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<SegmentCollapse onChange={onChange} aria-label="Toggle section" />)
      const button = screen.getByRole('checkbox')

      button.focus()
      await user.keyboard(' ')
      expect(onChange).toHaveBeenCalledWith(true)
    })
  })

  describe('styling', () => {
    it('applies custom icon size through CSS variable', () => {
      render(
        <SegmentCollapse
          aria-label="Toggle section"
          iconSize="24px"
        />
      )
      const button = screen.getByRole('checkbox')
      expect(button).toHaveStyle({ '--sinch-global-size-icon': '24px' })
    })

    it('passes through additional styles', () => {
      render(
        <SegmentCollapse
          aria-label="Toggle section"
          style={{ marginTop: '10px' }}
        />
      )
      const button = screen.getByRole('checkbox')
      expect(button).toHaveStyle({ marginTop: '10px' })
    })
  })
})

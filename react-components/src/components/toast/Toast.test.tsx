import { useEffect } from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Toast, ToastProvider, ToastManager, useToast } from './Toast'

describe('Toast', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('rendering', () => {
    it('renders with text prop', () => {
      render(<Toast text="Test message" />)
      expect(screen.getByText('Test message')).toBeInTheDocument()
    })

    it('renders with children', () => {
      render(<Toast>Child content</Toast>)
      expect(screen.getByText('Child content')).toBeInTheDocument()
    })

    it('prefers text prop over children', () => {
      render(<Toast text="Text prop">Child content</Toast>)
      expect(screen.getByText('Text prop')).toBeInTheDocument()
      expect(screen.queryByText('Child content')).not.toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<Toast ref={ref} text="Test" />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('has role="alert"', () => {
      render(<Toast text="Test" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('has aria-atomic="true"', () => {
      render(<Toast text="Test" />)
      expect(screen.getByRole('alert')).toHaveAttribute('aria-atomic', 'true')
    })
  })

  describe('types', () => {
    it('renders info type by default', () => {
      render(<Toast text="Info message" />)
      const toast = screen.getByRole('alert')
      expect(toast).toHaveClass('bg-[var(--sinch-comp-toast-color-info-default-background)]')
    })

    it('renders success type', () => {
      render(<Toast type="success" text="Success message" />)
      const toast = screen.getByRole('alert')
      expect(toast).toHaveClass('bg-[var(--sinch-comp-toast-color-success-default-background)]')
    })

    it('renders warn type', () => {
      render(<Toast type="warn" text="Warning message" />)
      const toast = screen.getByRole('alert')
      expect(toast).toHaveClass('bg-[var(--sinch-comp-toast-color-warning-default-background)]')
    })

    it('renders error type', () => {
      render(<Toast type="error" text="Error message" />)
      const toast = screen.getByRole('alert')
      expect(toast).toHaveClass('bg-[var(--sinch-comp-toast-color-error-default-background)]')
    })
  })

  describe('icons', () => {
    it('renders info icon for info type', () => {
      render(<Toast type="info" text="Info" />)
      expect(screen.getByLabelText('circle-info')).toBeInTheDocument()
    })

    it('renders success icon for success type', () => {
      render(<Toast type="success" text="Success" />)
      expect(screen.getByLabelText('circle-check')).toBeInTheDocument()
    })

    it('renders warning icon for warn type', () => {
      render(<Toast type="warn" text="Warning" />)
      expect(screen.getByLabelText('triangle-exclamation')).toBeInTheDocument()
    })

    it('renders error icon for error type', () => {
      render(<Toast type="error" text="Error" />)
      expect(screen.getByLabelText('octagon-exclamation')).toBeInTheDocument()
    })
  })

  describe('timeout', () => {
    it('calls onTimeout after 5 seconds', () => {
      const onTimeout = vi.fn()
      render(<Toast text="Test" onTimeout={onTimeout} />)

      expect(onTimeout).not.toHaveBeenCalled()

      act(() => {
        vi.advanceTimersByTime(5000)
      })

      expect(onTimeout).toHaveBeenCalledTimes(1)
    })

    it('does not call onTimeout when persistent', () => {
      const onTimeout = vi.fn()
      render(<Toast text="Test" persistent onTimeout={onTimeout} />)

      act(() => {
        vi.advanceTimersByTime(10000)
      })

      expect(onTimeout).not.toHaveBeenCalled()
    })

    it('clears timeout on unmount', () => {
      const onTimeout = vi.fn()
      const { unmount } = render(<Toast text="Test" onTimeout={onTimeout} />)

      unmount()

      act(() => {
        vi.advanceTimersByTime(5000)
      })

      expect(onTimeout).not.toHaveBeenCalled()
    })
  })

  describe('slots', () => {
    it('renders action slot', () => {
      render(
        <Toast
          text="Test"
          action={<button data-testid="action-btn">Action</button>}
        />
      )
      expect(screen.getByTestId('action-btn')).toBeInTheDocument()
    })

    it('renders close slot', () => {
      render(
        <Toast
          text="Test"
          close={<button data-testid="close-btn">Close</button>}
        />
      )
      expect(screen.getByTestId('close-btn')).toBeInTheDocument()
    })
  })

  describe('custom className', () => {
    it('applies custom className', () => {
      render(<Toast text="Test" className="custom-class" />)
      expect(screen.getByRole('alert')).toHaveClass('custom-class')
    })
  })
})

describe('ToastProvider', () => {
  function TestComponent({ onToastsChange }: { onToastsChange?: (count: number) => void }) {
    const { addToast, removeToast, toasts, clearAll } = useToast()

    // Report toast count changes
    useEffect(() => {
      onToastsChange?.(toasts.length)
    }, [toasts.length, onToastsChange])

    return (
      <div>
        <span data-testid="count">{toasts.length}</span>
        <button onClick={() => addToast({ type: 'success', text: 'Test toast' })}>
          Add Toast
        </button>
        <button onClick={() => addToast({ type: 'error', text: 'Error toast', persistent: true })}>
          Add Persistent
        </button>
        <button onClick={clearAll}>Clear All</button>
        {toasts.map((t) => (
          <button key={t.id} data-testid={`remove-${t.id}`} onClick={() => removeToast(t.id)}>
            Remove {t.id}
          </button>
        ))}
      </div>
    )
  }

  it('provides toast context', () => {
    render(
      <ToastProvider reduceMotion>
        <TestComponent />
      </ToastProvider>
    )

    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('throws error when useToast is used outside provider', () => {
    // Suppress console.error for this test
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useToast must be used within a ToastProvider')

    spy.mockRestore()
  })

  it('adds toast via addToast', async () => {
    const user = userEvent.setup({ advanceTimers: () => Promise.resolve() })

    render(
      <ToastProvider reduceMotion>
        <TestComponent />
      </ToastProvider>
    )

    expect(screen.getByTestId('count')).toHaveTextContent('0')

    await user.click(screen.getByText('Add Toast'))

    expect(screen.getByTestId('count')).toHaveTextContent('1')
    expect(screen.getByText('Test toast')).toBeInTheDocument()
  })

  it('removes toast via removeToast', async () => {
    const user = userEvent.setup({ advanceTimers: () => Promise.resolve() })

    render(
      <ToastProvider reduceMotion>
        <TestComponent />
      </ToastProvider>
    )

    // Add a persistent toast
    await user.click(screen.getByText('Add Persistent'))
    expect(screen.getByTestId('count')).toHaveTextContent('1')

    // Find and click the remove button
    const removeButton = screen.getByRole('button', { name: /Remove toast-/i })
    await user.click(removeButton)

    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('clears all toasts via clearAll', async () => {
    const user = userEvent.setup({ advanceTimers: () => Promise.resolve() })

    render(
      <ToastProvider reduceMotion>
        <TestComponent />
      </ToastProvider>
    )

    // Add multiple persistent toasts
    await user.click(screen.getByText('Add Persistent'))
    await user.click(screen.getByText('Add Persistent'))
    expect(screen.getByTestId('count')).toHaveTextContent('2')

    await user.click(screen.getByText('Clear All'))
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  describe('origin', () => {
    it('renders at bottom-right by default', () => {
      render(
        <ToastProvider reduceMotion>
          <div>App</div>
        </ToastProvider>
      )

      const container = document.querySelector('.fixed.bottom-4')
      expect(container).toBeInTheDocument()
    })

    it('renders at top-right when origin is top-right', () => {
      render(
        <ToastProvider origin="top-right" reduceMotion>
          <div>App</div>
        </ToastProvider>
      )

      const container = document.querySelector('.fixed.top-4')
      expect(container).toBeInTheDocument()
    })
  })
})

describe('ToastManager', () => {
  it('renders children as toasts', () => {
    render(
      <ToastManager>
        <Toast type="info" text="First toast" />
        <Toast type="success" text="Second toast" />
      </ToastManager>
    )

    // ToastManager renders children in both hidden slot and visible list
    // so we need to use getAllByText
    expect(screen.getAllByText('First toast').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Second toast').length).toBeGreaterThanOrEqual(1)
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(
      <ToastManager ref={ref}>
        <Toast type="info" text="Test" />
      </ToastManager>
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
  })

  it('applies custom className', () => {
    const { container } = render(
      <ToastManager className="custom-manager">
        <Toast type="info" text="Test" />
      </ToastManager>
    )
    expect(container.firstChild).toHaveClass('custom-manager')
  })

  describe('origin', () => {
    it('renders at bottom-right by default', () => {
      render(
        <ToastManager>
          <Toast type="info" text="Test" />
        </ToastManager>
      )

      const container = document.querySelector('.fixed.bottom-0')
      expect(container).toBeInTheDocument()
    })

    it('renders at top-right when origin is top-right', () => {
      render(
        <ToastManager origin="top-right">
          <Toast type="info" text="Test" />
        </ToastManager>
      )

      const container = document.querySelector('.fixed.top-4')
      expect(container).toBeInTheDocument()
    })
  })
})

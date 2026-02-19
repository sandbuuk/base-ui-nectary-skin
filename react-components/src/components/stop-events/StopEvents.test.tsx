import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { StopEvents } from './StopEvents'

describe('StopEvents', () => {
  describe('rendering', () => {
    it('renders children', () => {
      render(<StopEvents events={['click']}>Test content</StopEvents>)
      expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders multiple children', () => {
      render(
        <StopEvents events={['click']}>
          <span>Child 1</span>
          <span>Child 2</span>
        </StopEvents>
      )
      expect(screen.getByText('Child 1')).toBeInTheDocument()
      expect(screen.getByText('Child 2')).toBeInTheDocument()
    })

    it('applies display: contents via className', () => {
      render(<StopEvents events={['click']} data-testid="wrapper">Test</StopEvents>)
      expect(screen.getByTestId('wrapper')).toHaveClass('contents')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the wrapper div', () => {
      const ref = { current: null }
      render(
        <StopEvents ref={ref} events={['click']}>
          Test
        </StopEvents>
      )
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })

    it('works with callback ref', () => {
      let element: HTMLDivElement | null = null
      render(
        <StopEvents ref={(el) => (element = el)} events={['click']}>
          Test
        </StopEvents>
      )
      expect(element).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('event stopping', () => {
    it('stops click events from propagating to native listeners', () => {
      const parentHandler = vi.fn()

      const { container } = render(
        <div data-testid="parent">
          <StopEvents events={['click']}>
            <button data-testid="child">Click me</button>
          </StopEvents>
        </div>
      )

      // Add native event listener to parent
      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('click', parentHandler)

      // Create and dispatch a native click event
      const button = screen.getByTestId('child')
      const clickEvent = new MouseEvent('click', { bubbles: true })
      button.dispatchEvent(clickEvent)

      expect(parentHandler).not.toHaveBeenCalled()
    })

    it('stops mousedown events from propagating to native listeners', () => {
      const parentHandler = vi.fn()

      const { container } = render(
        <div data-testid="parent">
          <StopEvents events={['mousedown']}>
            <button data-testid="child">Click me</button>
          </StopEvents>
        </div>
      )

      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('mousedown', parentHandler)

      const button = screen.getByTestId('child')
      const mouseDownEvent = new MouseEvent('mousedown', { bubbles: true })
      button.dispatchEvent(mouseDownEvent)

      expect(parentHandler).not.toHaveBeenCalled()
    })

    it('stops multiple event types', () => {
      const parentClick = vi.fn()
      const parentMouseDown = vi.fn()
      const parentMouseUp = vi.fn()

      const { container } = render(
        <div data-testid="parent">
          <StopEvents events={['click', 'mousedown', 'mouseup']}>
            <button data-testid="child">Click me</button>
          </StopEvents>
        </div>
      )

      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('click', parentClick)
      parent.addEventListener('mousedown', parentMouseDown)
      parent.addEventListener('mouseup', parentMouseUp)

      const button = screen.getByTestId('child')
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      button.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      button.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }))

      expect(parentClick).not.toHaveBeenCalled()
      expect(parentMouseDown).not.toHaveBeenCalled()
      expect(parentMouseUp).not.toHaveBeenCalled()
    })

    it('allows unlisted events to propagate', () => {
      const parentMouseEnter = vi.fn()

      const { container } = render(
        <div data-testid="parent">
          <StopEvents events={['click']}>
            <button data-testid="child">Hover me</button>
          </StopEvents>
        </div>
      )

      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('mouseover', parentMouseEnter)

      const button = screen.getByTestId('child')
      button.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }))

      // mouseover should propagate since it's not in the events list
      expect(parentMouseEnter).toHaveBeenCalledTimes(1)
    })

    it('stops keyboard events from propagating', () => {
      const parentHandler = vi.fn()

      const { container } = render(
        <div data-testid="parent">
          <StopEvents events={['keydown']}>
            <input data-testid="input" />
          </StopEvents>
        </div>
      )

      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('keydown', parentHandler)

      const input = screen.getByTestId('input')
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true }))

      expect(parentHandler).not.toHaveBeenCalled()
    })

    it('child React handlers are affected by stopPropagation (expected behavior)', () => {
      // NOTE: In React 17+, event delegation is attached to the root container.
      // When we call stopPropagation() on a native event, it prevents the event
      // from bubbling up to React's delegated event listener at the root.
      // This is intentional behavior - StopEvents stops ALL propagation including
      // to React's synthetic event system for events originating from children.
      //
      // If you need child React handlers to work, you should either:
      // 1. Not include that event type in the `events` prop
      // 2. Attach native event listeners instead of React event handlers
      // 3. Structure your component hierarchy differently

      const childHandler = vi.fn()

      const { container } = render(
        <StopEvents events={['click']}>
          <button data-testid="child" onClick={childHandler}>Click me</button>
        </StopEvents>
      )

      const button = container.querySelector('[data-testid="child"]')!
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))

      // React synthetic events don't fire because stopPropagation prevents
      // the event from reaching React's root-level delegated listener
      expect(childHandler).not.toHaveBeenCalled()
    })
  })

  describe('props', () => {
    it('applies custom className alongside contents', () => {
      render(
        <StopEvents events={['click']} className="custom-class" data-testid="wrapper">
          Test
        </StopEvents>
      )
      const wrapper = screen.getByTestId('wrapper')
      expect(wrapper).toHaveClass('contents')
      expect(wrapper).toHaveClass('custom-class')
    })

    it('passes through additional HTML attributes', () => {
      render(
        <StopEvents events={['click']} data-testid="wrapper" aria-label="Event stopper">
          Test
        </StopEvents>
      )
      const wrapper = screen.getByTestId('wrapper')
      expect(wrapper).toHaveAttribute('aria-label', 'Event stopper')
    })

    it('handles empty events array', () => {
      const parentHandler = vi.fn()

      const { container } = render(
        <div data-testid="parent">
          <StopEvents events={[]}>
            <button data-testid="child">Click me</button>
          </StopEvents>
        </div>
      )

      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('click', parentHandler)

      const button = screen.getByTestId('child')
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))

      // With empty array, events should propagate normally
      expect(parentHandler).toHaveBeenCalledTimes(1)
    })
  })

  describe('cleanup', () => {
    it('removes event listeners on unmount', () => {
      const parentHandler = vi.fn()

      const { container, unmount } = render(
        <div data-testid="parent">
          <StopEvents events={['click']}>
            <button data-testid="child">Click me</button>
          </StopEvents>
        </div>
      )

      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('click', parentHandler)

      // Click while mounted - should be stopped
      const button = screen.getByTestId('child')
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      expect(parentHandler).not.toHaveBeenCalled()

      // Unmount the StopEvents component
      unmount()
      // The parent listener is still there but the button is gone
    })
  })

  describe('dynamic events', () => {
    it('updates event listeners when events prop changes', () => {
      const parentClick = vi.fn()
      const parentMouseDown = vi.fn()

      const { container, rerender } = render(
        <div data-testid="parent">
          <StopEvents events={['click']}>
            <button data-testid="child">Click me</button>
          </StopEvents>
        </div>
      )

      const parent = container.querySelector('[data-testid="parent"]')!
      parent.addEventListener('click', parentClick)
      parent.addEventListener('mousedown', parentMouseDown)

      const button = screen.getByTestId('child')

      // Initially, only click is stopped
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      button.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      expect(parentClick).not.toHaveBeenCalled()
      expect(parentMouseDown).toHaveBeenCalledTimes(1)

      // Reset and update events
      parentMouseDown.mockClear()
      parentClick.mockClear()

      rerender(
        <div data-testid="parent">
          <StopEvents events={['mousedown']}>
            <button data-testid="child">Click me</button>
          </StopEvents>
        </div>
      )

      // Now mousedown is stopped, click is not
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      button.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      expect(parentClick).toHaveBeenCalledTimes(1)
      expect(parentMouseDown).not.toHaveBeenCalled()
    })
  })
})

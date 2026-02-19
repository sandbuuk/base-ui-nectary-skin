import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  describe('rendering', () => {
    it('renders with default person icon when no src or alt', () => {
      const { container } = render(<Avatar/>)
      const svg = container.querySelector('svg')

      expect(svg).toBeInTheDocument()
    })

    it('renders initials when alt is provided and no src', () => {
      render(<Avatar alt="JD"/>)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('renders image when src is provided', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="User"/>)

      const img = screen.getByRole('img')

      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg')
      expect(img).toHaveAttribute('alt', 'User')
    })

    it('hides initials when image is present', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="JD"/>)
      // Image should be present
      expect(screen.getByRole('img')).toBeInTheDocument()
      // Initials text should not be rendered
      expect(screen.queryByText('JD')).not.toBeInTheDocument()
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the root element', () => {
      const ref = { current: null }

      render(<Avatar ref={ref} alt="Test"/>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('className', () => {
    it('applies custom className', () => {
      const { container } = render(<Avatar className="custom-class"/>)

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      const { container } = render(<Avatar className="custom-class"/>)
      const element = container.firstChild as HTMLElement

      expect(element).toHaveClass('custom-class')
      expect(element).toHaveClass('inline-block')
    })
  })

  describe('sizes', () => {
    it('renders small size', () => {
      const { container } = render(<Avatar size="s" alt="S"/>)
      const wrapper = container.querySelector('[class*="h-[var(--sinch-comp-avatar-size-s)]"]')

      expect(wrapper).toBeInTheDocument()
    })

    it('renders medium size by default', () => {
      const { container } = render(<Avatar alt="M"/>)
      const wrapper = container.querySelector('[class*="h-[var(--sinch-comp-avatar-size-m)]"]')

      expect(wrapper).toBeInTheDocument()
    })

    it('renders large size', () => {
      const { container } = render(<Avatar size="l" alt="L"/>)
      const wrapper = container.querySelector('[class*="h-[var(--sinch-comp-avatar-size-l)]"]')

      expect(wrapper).toBeInTheDocument()
    })
  })

  describe('status indicator', () => {
    it('does not render status indicator by default', () => {
      const { container } = render(<Avatar alt="Test"/>)
      // Status wrapper should not be present
      const statusWrapper = container.querySelector('[class*="left-[calc(85%-5px)]"]')

      expect(statusWrapper).not.toBeInTheDocument()
    })

    it('renders online status indicator', () => {
      const { container } = render(<Avatar alt="Test" status="online"/>)
      const statusIndicator = container.querySelector('[class*="bg-[var(--sinch-comp-avatar-status-color-online-default-background)]"]')

      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders away status indicator', () => {
      const { container } = render(<Avatar alt="Test" status="away"/>)
      const statusIndicator = container.querySelector('[class*="bg-[var(--sinch-comp-avatar-status-color-away-default-background)]"]')

      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders busy status indicator', () => {
      const { container } = render(<Avatar alt="Test" status="busy"/>)
      const statusIndicator = container.querySelector('[class*="bg-[var(--sinch-comp-avatar-status-color-busy-default-background)]"]')

      expect(statusIndicator).toBeInTheDocument()
    })

    it('renders offline status indicator', () => {
      const { container } = render(<Avatar alt="Test" status="offline"/>)
      const statusIndicator = container.querySelector('[class*="bg-[var(--sinch-comp-avatar-status-color-offline-default-background)]"]')

      expect(statusIndicator).toBeInTheDocument()
    })
  })

  describe('color', () => {
    it('applies color style for background and foreground', () => {
      const { container } = render(<Avatar color="blue" alt="BL"/>)
      const circle = container.querySelector('[class*="rounded-full"]') as HTMLElement

      expect(circle).toHaveStyle({
        backgroundColor: 'var(--sinch-comp-avatar-container-color-blue-background)',
        color: 'var(--sinch-comp-avatar-container-color-blue-foreground)',
      })
    })

    it('does not apply color style when color is undefined', () => {
      const { container } = render(<Avatar alt="Test"/>)
      const circle = container.querySelector('[class*="rounded-full"]') as HTMLElement

      expect(circle.style.backgroundColor).toBe('')
    })
  })

  describe('image error handling', () => {
    it('shows initials when image fails to load', () => {
      render(<Avatar src="https://invalid-url.jpg" alt="FB"/>)

      const img = screen.getByRole('img')

      // Trigger error
      fireEvent.error(img)

      // Now initials should be shown
      expect(screen.getByText('FB')).toBeInTheDocument()
    })

    it('shows person icon when image fails and no alt', () => {
      const { container } = render(<Avatar src="https://invalid-url.jpg"/>)
      const img = screen.getByRole('img')

      // Trigger error
      fireEvent.error(img)

      // Now person icon should be shown
      const svg = container.querySelector('svg')

      expect(svg).toBeInTheDocument()
    })

    it('calls onImageError callback when image fails', () => {
      const onImageError = vi.fn()

      render(<Avatar src="https://invalid-url.jpg" alt="Test" onImageError={onImageError}/>)

      const img = screen.getByRole('img')

      // Trigger error
      fireEvent.error(img)

      expect(onImageError).toHaveBeenCalledTimes(1)
    })
  })

  describe('accessibility', () => {
    it('image has alt attribute', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="John Doe"/>)

      const img = screen.getByRole('img')

      expect(img).toHaveAttribute('alt', 'John Doe')
    })

    it('image has empty alt when not provided', () => {
      render(<Avatar src="https://example.com/avatar.jpg"/>)

      const img = screen.getByRole('img')

      expect(img).toHaveAttribute('alt', '')
    })
  })

  describe('empty string handling', () => {
    it('treats empty src as no image', () => {
      render(<Avatar src="" alt="EM"/>)

      // Should show initials, not image
      expect(screen.getByText('EM')).toBeInTheDocument()
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })

    it('treats empty alt as no initials', () => {
      const { container } = render(<Avatar alt=""/>)
      // Should show person icon
      const svg = container.querySelector('svg')

      expect(svg).toBeInTheDocument()
    })
  })

  describe('style prop', () => {
    it('passes through style prop', () => {
      const { container } = render(<Avatar style={{ margin: '10px' }} alt="Test"/>)

      expect(container.firstChild).toHaveStyle({ margin: '10px' })
    })
  })

  describe('other HTML attributes', () => {
    it('passes through data attributes', () => {
      const { container } = render(<Avatar data-testid="avatar" alt="Test"/>)

      expect(container.querySelector('[data-testid="avatar"]')).toBeInTheDocument()
    })

    it('passes through id attribute', () => {
      const { container } = render(<Avatar id="my-avatar" alt="Test"/>)

      expect(container.querySelector('#my-avatar')).toBeInTheDocument()
    })
  })
})

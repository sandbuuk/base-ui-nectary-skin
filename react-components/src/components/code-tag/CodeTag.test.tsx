import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { CodeTag } from './CodeTag'

describe('CodeTag', () => {
  describe('rendering', () => {
    it('renders with children content', () => {
      render(<CodeTag>npm install</CodeTag>)
      expect(screen.getByText('npm install')).toBeInTheDocument()
    })

    it('renders with text prop', () => {
      render(<CodeTag text="const x = 1" />)
      expect(screen.getByText('const x = 1')).toBeInTheDocument()
    })

    it('prefers text prop over children when both provided', () => {
      render(<CodeTag text="from text">from children</CodeTag>)
      expect(screen.getByText('from text')).toBeInTheDocument()
      expect(screen.queryByText('from children')).not.toBeInTheDocument()
    })

    it('renders as a code element', () => {
      render(<CodeTag text="code" />)
      const element = screen.getByText('code')
      expect(element.tagName.toLowerCase()).toBe('code')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the code element', () => {
      const ref = { current: null as HTMLElement | null }
      render(<CodeTag ref={ref}>Test</CodeTag>)
      expect(ref.current).toBeInstanceOf(HTMLElement)
      expect(ref.current?.tagName.toLowerCase()).toBe('code')
    })
  })

  describe('styling', () => {
    it('applies custom className', () => {
      render(<CodeTag className="custom-class">Test</CodeTag>)
      expect(screen.getByText('Test')).toHaveClass('custom-class')
    })

    it('applies base monospace font class', () => {
      render(<CodeTag>Test</CodeTag>)
      expect(screen.getByText('Test')).toHaveClass('font-mono')
    })

    it('applies inline display class', () => {
      render(<CodeTag>Test</CodeTag>)
      expect(screen.getByText('Test')).toHaveClass('inline')
    })

    it('applies border class', () => {
      render(<CodeTag>Test</CodeTag>)
      expect(screen.getByText('Test')).toHaveClass('border')
    })
  })

  describe('props', () => {
    it('passes through additional HTML attributes', () => {
      render(<CodeTag data-testid="my-code" title="code snippet">Test</CodeTag>)
      const element = screen.getByTestId('my-code')
      expect(element).toHaveAttribute('title', 'code snippet')
    })

    it('supports aria attributes for accessibility', () => {
      render(<CodeTag aria-label="code example">Test</CodeTag>)
      expect(screen.getByLabelText('code example')).toBeInTheDocument()
    })
  })

  describe('inline usage', () => {
    it('renders correctly inline with other text', () => {
      render(
        <p data-testid="paragraph">
          Run <CodeTag text="npm install" /> to install.
        </p>
      )
      const paragraph = screen.getByTestId('paragraph')
      expect(paragraph).toHaveTextContent('Run npm install to install.')
      expect(screen.getByText('npm install')).toBeInTheDocument()
    })
  })
})

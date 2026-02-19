import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Emoji } from './Emoji'

const MOCK_BASE_URL = 'https://example.com/emoji/%s.png'

describe('Emoji', () => {
  describe('rendering', () => {
    it('renders an image when char and baseUrl are provided', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      expect(img).toBeInTheDocument()
    })

    it('renders nothing when char is empty', () => {
      const { container } = render(<Emoji char="" baseUrl={MOCK_BASE_URL} />)
      expect(container.querySelector('img')).not.toBeInTheDocument()
    })

    it('renders nothing when baseUrl is not provided', () => {
      const { container } = render(<Emoji char="😀" />)
      expect(container.querySelector('img')).not.toBeInTheDocument()
    })

    it('sets the alt attribute to the emoji character', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('alt', '😀')
    })

    it('sets loading="lazy" on the image', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('loading', 'lazy')
    })
  })

  describe('URL generation', () => {
    it('generates correct URL for simple emoji', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      // 😀 = U+1F600 = 1f600
      expect(img).toHaveAttribute('src', 'https://example.com/emoji/1f600.png')
    })

    it('generates correct URL for emoji with skin tone', () => {
      render(<Emoji char="👍🏻" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      // 👍🏻 = U+1F44D U+1F3FB = 1f44d-1f3fb
      expect(img).toHaveAttribute('src', 'https://example.com/emoji/1f44d-1f3fb.png')
    })

    it('generates correct URL for heart emoji', () => {
      render(<Emoji char="❤️" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      // ❤️ = U+2764 U+FE0F, but FE0F should be removed when no ZWJ
      expect(img).toHaveAttribute('src', 'https://example.com/emoji/2764.png')
    })

    it('generates correct URL for ZWJ sequence emoji', () => {
      render(<Emoji char="👩‍💻" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      // 👩‍💻 = U+1F469 U+200D U+1F4BB
      expect(img).toHaveAttribute('src', 'https://example.com/emoji/1f469-200d-1f4bb.png')
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref to the span element', () => {
      const ref = { current: null }
      render(<Emoji ref={ref} char="😀" baseUrl={MOCK_BASE_URL} />)
      expect(ref.current).toBeInstanceOf(HTMLSpanElement)
    })
  })

  describe('className', () => {
    it('applies custom className', () => {
      const { container } = render(
        <Emoji char="😀" baseUrl={MOCK_BASE_URL} className="custom-class" />
      )
      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('applies default variant classes', () => {
      const { container } = render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} />)
      expect(container.firstChild).toHaveClass('contents')
    })
  })

  describe('sizes', () => {
    it('applies xs size variant', () => {
      const { container } = render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} size="xs" />)
      expect(container.firstChild).toHaveClass('[--emoji-size:16px]')
    })

    it('applies sm size variant', () => {
      const { container } = render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} size="sm" />)
      expect(container.firstChild).toHaveClass('[--emoji-size:20px]')
    })

    it('applies md size variant', () => {
      const { container } = render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} size="md" />)
      expect(container.firstChild).toHaveClass('[--emoji-size:24px]')
    })

    it('applies lg size variant', () => {
      const { container } = render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} size="lg" />)
      expect(container.firstChild).toHaveClass('[--emoji-size:32px]')
    })

    it('applies xl size variant', () => {
      const { container } = render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} size="xl" />)
      expect(container.firstChild).toHaveClass('[--emoji-size:48px]')
    })
  })

  describe('customSize', () => {
    it('applies custom size to image', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} customSize={64} />)
      const img = screen.getByRole('img')
      expect(img).toHaveStyle({ width: '64px', height: '64px' })
    })
  })

  describe('verticalAlign', () => {
    it('applies default vertical-align when not specified', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      expect(img).toHaveStyle({ verticalAlign: 'initial' })
    })

    it('applies middle vertical-align', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} verticalAlign="middle" />)
      const img = screen.getByRole('img')
      expect(img).toHaveStyle({ verticalAlign: 'middle' })
    })

    it('applies baseline vertical-align', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} verticalAlign="baseline" />)
      const img = screen.getByRole('img')
      expect(img).toHaveStyle({ verticalAlign: 'baseline' })
    })
  })

  describe('image styles', () => {
    it('sets pointer-events to none', () => {
      render(<Emoji char="😀" baseUrl={MOCK_BASE_URL} />)
      const img = screen.getByRole('img')
      expect(img).toHaveStyle({ pointerEvents: 'none' })
    })
  })

  describe('additional props', () => {
    it('passes through additional HTML attributes', () => {
      render(
        <Emoji
          char="😀"
          baseUrl={MOCK_BASE_URL}
          data-testid="emoji"
          title="Grinning Face"
        />
      )
      const emoji = screen.getByTestId('emoji')
      expect(emoji).toHaveAttribute('title', 'Grinning Face')
    })

    it('passes through style prop', () => {
      const { container } = render(
        <Emoji
          char="😀"
          baseUrl={MOCK_BASE_URL}
          style={{ marginLeft: '10px' }}
        />
      )
      expect(container.firstChild).toHaveStyle({ marginLeft: '10px' })
    })
  })
})

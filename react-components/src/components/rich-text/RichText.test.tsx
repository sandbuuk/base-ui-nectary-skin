import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { RichText } from './RichText'
import { RichTextarea } from './RichTextarea'
import { RichTextareaChip } from './RichTextareaChip'
import { parseRichText } from './utils'

describe('RichText', () => {
  describe('rendering', () => {
    it('renders plain text', () => {
      render(<RichText text="Hello world" />)
      expect(screen.getByText('Hello world')).toBeInTheDocument()
    })

    it('renders bold text', () => {
      render(<RichText text="Hello **bold** world" />)
      expect(screen.getByText('bold')).toBeInTheDocument()
    })

    it('renders italic text', () => {
      render(<RichText text="Hello *italic* world" />)
      expect(screen.getByText('italic')).toBeInTheDocument()
    })

    it('renders strikethrough text', () => {
      render(<RichText text="Hello ~~strike~~ world" />)
      expect(screen.getByText('strike')).toBeInTheDocument()
    })

    it('renders code inline', () => {
      render(<RichText text="Hello `code` world" />)
      expect(screen.getByText('code')).toBeInTheDocument()
    })

    it('renders links', () => {
      render(<RichText text="Visit [link](https://example.com)" />)
      const link = screen.getByRole('link', { name: 'link' })

      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', 'https://example.com')
    })

    it('renders chips', () => {
      render(<RichText text="Status: {{pending}}" />)
      expect(screen.getByText('pending')).toBeInTheDocument()
    })
  })

  describe('props', () => {
    it('forwards ref', () => {
      const ref = { current: null }

      render(<RichText ref={ref} text="Test" />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<RichText text="Test" className="custom-class" />)
      expect(screen.getByRole('paragraph')).toHaveClass('custom-class')
    })

    it('applies size variants', () => {
      const { rerender } = render(<RichText text="Test" size="m" />)

      expect(screen.getByRole('paragraph')).toHaveClass('[font:var(--sinch-sys-font-body-m)]')

      rerender(<RichText text="Test" size="s" />)
      expect(screen.getByRole('paragraph')).toHaveClass('[font:var(--sinch-sys-font-body-s)]')
    })

    it('calls onElementClick when link is clicked', async () => {
      const handleClick = vi.fn()

      render(
        <RichText
          text="Click [here](https://example.com)"
          onElementClick={handleClick}
        />
      )

      await userEvent.click(screen.getByRole('link', { name: 'here' }))
      expect(handleClick).toHaveBeenCalled()
    })

    it('uses chipResolver for chip properties', () => {
      const chipResolver = vi.fn().mockReturnValue({ color: 'success' })

      render(
        <RichText
          text="Status: {{active}}"
          chipResolver={chipResolver}
        />
      )

      expect(chipResolver).toHaveBeenCalledWith('active')
    })
  })
})

describe('RichTextarea', () => {
  describe('rendering', () => {
    it('renders with placeholder', () => {
      render(<RichTextarea placeholder="Type here..." aria-label="Input" />)
      expect(screen.getByText('Type here...')).toBeInTheDocument()
    })

    it('renders with initial value', () => {
      render(<RichTextarea value="Hello" aria-label="Input" />)
      expect(screen.getByRole('textbox')).toHaveTextContent('Hello')
    })
  })

  describe('props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <RichTextarea className="custom-class" aria-label="Input" />
      )

      expect(container.firstChild).toHaveClass('custom-class')
    })

    it('applies disabled state', () => {
      render(<RichTextarea disabled aria-label="Input" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('contenteditable', 'false')
    })

    it('applies aria-invalid when invalid', () => {
      render(<RichTextarea invalid aria-label="Input" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('hides placeholder when there is content', () => {
      render(<RichTextarea value="Has content" placeholder="Type here..." aria-label="Input" />)
      expect(screen.queryByText('Type here...')).not.toBeInTheDocument()
    })
  })

  describe('events', () => {
    it('calls onChange when content changes', async () => {
      const handleChange = vi.fn()

      render(<RichTextarea onChange={handleChange} aria-label="Input" />)

      const editor = screen.getByRole('textbox')

      fireEvent.input(editor, { target: { innerHTML: 'Hello' } })
      expect(handleChange).toHaveBeenCalled()
    })

    it('calls onFocus when focused', async () => {
      const handleFocus = vi.fn()

      render(<RichTextarea onFocus={handleFocus} aria-label="Input" />)

      const editor = screen.getByRole('textbox')

      fireEvent.focus(editor)
      expect(handleFocus).toHaveBeenCalled()
    })

    it('calls onBlur when blurred', async () => {
      const handleBlur = vi.fn()

      render(<RichTextarea onBlur={handleBlur} aria-label="Input" />)

      const editor = screen.getByRole('textbox')

      fireEvent.focus(editor)
      fireEvent.blur(editor)
      expect(handleBlur).toHaveBeenCalled()
    })
  })

  describe('slots', () => {
    it('renders top content', () => {
      render(
        <RichTextarea
          topContent={<div>Top content</div>}
          aria-label="Input"
        />
      )
      expect(screen.getByText('Top content')).toBeInTheDocument()
    })

    it('renders bottom content', () => {
      render(
        <RichTextarea
          bottomContent={<div>Bottom content</div>}
          aria-label="Input"
        />
      )
      expect(screen.getByText('Bottom content')).toBeInTheDocument()
    })
  })
})

describe('RichTextareaChip', () => {
  describe('rendering', () => {
    it('renders with text', () => {
      render(<RichTextareaChip text="chip" />)
      expect(screen.getByText('chip')).toBeInTheDocument()
    })

    it('renders close button by default', () => {
      render(<RichTextareaChip text="chip" />)
      expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument()
    })

    it('hides close button when readonly', () => {
      render(<RichTextareaChip text="chip" readonly />)
      expect(screen.queryByRole('button', { name: /remove/i })).not.toBeInTheDocument()
    })
  })

  describe('props', () => {
    it('forwards ref', () => {
      const ref = { current: null }

      render(<RichTextareaChip ref={ref} text="chip" />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      render(<RichTextareaChip text="chip" className="custom-class" />)
      expect(screen.getByRole('button', { name: 'chip' })).toHaveClass('custom-class')
    })

    it('applies color styles', () => {
      render(<RichTextareaChip text="chip" color="success" />)
      const chip = screen.getByRole('button', { name: 'chip' })

      expect(chip).toHaveStyle({
        backgroundColor: 'var(--sinch-comp-tag-color-success-background)',
      })
    })
  })

  describe('events', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = vi.fn()

      render(<RichTextareaChip text="chip" onClick={handleClick} />)

      await userEvent.click(screen.getByText('chip'))
      expect(handleClick).toHaveBeenCalled()
    })

    it('calls onRemove when close button is clicked', async () => {
      const handleRemove = vi.fn()

      render(<RichTextareaChip text="chip" onRemove={handleRemove} />)

      await userEvent.click(screen.getByRole('button', { name: /remove/i }))
      expect(handleRemove).toHaveBeenCalled()
    })

    it('does not call onClick when close button is clicked', async () => {
      const handleClick = vi.fn()
      const handleRemove = vi.fn()

      render(<RichTextareaChip text="chip" onClick={handleClick} onRemove={handleRemove} />)

      await userEvent.click(screen.getByRole('button', { name: /remove/i }))
      expect(handleRemove).toHaveBeenCalled()
      expect(handleClick).not.toHaveBeenCalled()
    })
  })
})

describe('parseRichText', () => {
  it('parses empty string', () => {
    expect(parseRichText('')).toEqual([])
  })

  it('parses plain text', () => {
    const result = parseRichText('Hello world')

    expect(result).toHaveLength(1)
    expect(result[0].type).toBe('paragraph')
  })

  it('parses bold text', () => {
    const result = parseRichText('**bold**')

    expect(result).toHaveLength(1)
    expect(result[0].type).toBe('paragraph')
    expect(result[0].children?.[0].type).toBe('bold')
  })

  it('parses italic text', () => {
    const result = parseRichText('*italic*')

    expect(result).toHaveLength(1)
    expect(result[0].children?.[0].type).toBe('italic')
  })

  it('parses strikethrough text', () => {
    const result = parseRichText('~~strike~~')

    expect(result).toHaveLength(1)
    expect(result[0].children?.[0].type).toBe('strikethrough')
  })

  it('parses code', () => {
    const result = parseRichText('`code`')

    expect(result).toHaveLength(1)
    expect(result[0].children?.[0].type).toBe('code')
    expect(result[0].children?.[0].content).toBe('code')
  })

  it('parses links', () => {
    const result = parseRichText('[text](https://example.com)')

    expect(result).toHaveLength(1)
    expect(result[0].children?.[0].type).toBe('link')
    expect(result[0].children?.[0].content).toBe('text')
    expect(result[0].children?.[0].href).toBe('https://example.com')
  })

  it('parses chips', () => {
    const result = parseRichText('{{chip}}')

    expect(result).toHaveLength(1)
    expect(result[0].children?.[0].type).toBe('chip')
    expect(result[0].children?.[0].content).toBe('chip')
  })

  it('parses unordered lists', () => {
    const result = parseRichText('- item 1\n- item 2')

    expect(result).toHaveLength(1)
    expect(result[0].type).toBe('list')
    expect(result[0].ordered).toBe(false)
    expect(result[0].children).toHaveLength(2)
  })

  it('parses ordered lists', () => {
    const result = parseRichText('1. first\n2. second')

    expect(result).toHaveLength(1)
    expect(result[0].type).toBe('list')
    expect(result[0].ordered).toBe(true)
    expect(result[0].children).toHaveLength(2)
  })

  it('parses escaped characters', () => {
    const result = parseRichText('\\*not italic\\*')

    expect(result).toHaveLength(1)
    // Should be plain text, not italic
    expect(result[0].children?.find(c => c.type === 'italic')).toBeUndefined()
  })
})

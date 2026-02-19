import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { EmojiPicker } from './EmojiPicker'

describe('EmojiPicker', () => {
  describe('rendering', () => {
    it('renders the component', () => {
      render(<EmojiPicker />)
      expect(screen.getByLabelText('Search emojis')).toBeInTheDocument()
    })

    it('renders category tabs', () => {
      render(<EmojiPicker />)
      expect(screen.getByRole('tablist', { name: 'Emoji groups' })).toBeInTheDocument()
    })

    it('renders emoji buttons', () => {
      render(<EmojiPicker />)
      // Should render emoji buttons
      const buttons = screen.getAllByRole('button')

      // At least some emoji buttons should exist (plus toolbar buttons)
      expect(buttons.length).toBeGreaterThan(5)
    })

    it('renders skin tone selector button', () => {
      render(<EmojiPicker />)
      expect(screen.getByLabelText('Select emoji skin tones')).toBeInTheDocument()
    })

    it('forwards ref correctly', () => {
      const ref = { current: null }

      render(<EmojiPicker ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })

    it('applies custom className', () => {
      const { container } = render(<EmojiPicker className="custom-class" />)

      expect(container.firstChild).toHaveClass('custom-class')
    })
  })

  describe('search functionality', () => {
    it('filters emojis when searching', async () => {
      const user = userEvent.setup()

      render(<EmojiPicker />)

      const searchInput = screen.getByLabelText('Search emojis')

      await user.type(searchInput, 'smile')

      // Wait for debounce
      await waitFor(
        () => {
          // Should find some smiling emojis
          const emojiButtons = screen.getAllByRole('button')

          expect(emojiButtons.some((btn) => btn.getAttribute('aria-label')?.includes('smil'))).toBe(true)
        },
        { timeout: 500 }
      )
    })

    it('shows no results message when search has no matches', async () => {
      const user = userEvent.setup()

      render(<EmojiPicker />)

      const searchInput = screen.getByLabelText('Search emojis')

      await user.type(searchInput, 'xyznonexistent')

      // Wait for debounce
      await waitFor(
        () => {
          expect(screen.getByText('No results')).toBeInTheDocument()
        },
        { timeout: 500 }
      )
    })

    it('clears search when clear button is clicked', async () => {
      const user = userEvent.setup()

      render(<EmojiPicker />)

      const searchInput = screen.getByLabelText('Search emojis')

      await user.type(searchInput, 'smile')

      // Wait for clear button to appear
      await waitFor(() => {
        expect(screen.getByLabelText('Clear')).toBeInTheDocument()
      })

      await user.click(screen.getByLabelText('Clear'))

      expect(searchInput).toHaveValue('')
    })
  })

  describe('emoji selection', () => {
    it('calls onChange when an emoji is clicked', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<EmojiPicker onChange={onChange} />)

      // Get the first emoji button (skip toolbar buttons)
      const emojiButtons = screen.getAllByRole('button').filter(
        (btn) => btn.getAttribute('data-value') !== null
      )

      if (emojiButtons.length > 0) {
        await user.click(emojiButtons[0])
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith(expect.any(String))
      }
    })

    it('passes the emoji character to onChange', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()

      render(<EmojiPicker onChange={onChange} />)

      // Get an emoji button with data-value
      const emojiButtons = screen.getAllByRole('button').filter(
        (btn) => btn.getAttribute('data-value') !== null
      )

      if (emojiButtons.length > 0) {
        const expectedEmoji = emojiButtons[0].getAttribute('data-value')

        await user.click(emojiButtons[0])
        expect(onChange).toHaveBeenCalledWith(expectedEmoji)
      }
    })
  })

  describe('category tabs', () => {
    it('has first category tab selected by default', () => {
      render(<EmojiPicker />)

      const tabs = screen.getAllByRole('tab')

      expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    })

    it('changes category when a tab is clicked', async () => {
      const user = userEvent.setup()

      render(<EmojiPicker />)

      const tabs = screen.getAllByRole('tab')

      // Click the second tab
      if (tabs.length > 1) {
        await user.click(tabs[1])
        expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
        expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
      }
    })
  })

  describe('skin tone selection', () => {
    it('opens skin tone popover when button is clicked', async () => {
      const user = userEvent.setup()

      render(<EmojiPicker />)

      const skinToneButton = screen.getByLabelText('Select emoji skin tones')

      await user.click(skinToneButton)

      // Should open the popover with skin tone options
      expect(screen.getByLabelText('Emoji skin tone menu')).toBeInTheDocument()
    })
  })

  describe('props', () => {
    it('accepts emojiBaseUrl prop', () => {
      const baseUrl = 'https://example.com/emojis/%s.png'

      render(<EmojiPicker emojiBaseUrl={baseUrl} />)

      // Component should render without errors
      expect(screen.getByLabelText('Search emojis')).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('has accessible search input', () => {
      render(<EmojiPicker />)

      const searchInput = screen.getByLabelText('Search emojis')

      expect(searchInput).toBeInTheDocument()
      expect(searchInput.tagName).toBe('INPUT')
    })

    it('has accessible tab list', () => {
      render(<EmojiPicker />)

      const tablist = screen.getByRole('tablist')

      expect(tablist).toHaveAttribute('aria-label', 'Emoji groups')
    })

    it('emoji buttons have aria-labels', () => {
      render(<EmojiPicker />)

      const emojiButtons = screen.getAllByRole('button').filter(
        (btn) => btn.getAttribute('data-value') !== null
      )

      // Check that emoji buttons have aria-labels
      if (emojiButtons.length > 0) {
        expect(emojiButtons[0]).toHaveAttribute('aria-label')
        expect(emojiButtons[0].getAttribute('aria-label')?.length).toBeGreaterThan(0)
      }
    })
  })
})

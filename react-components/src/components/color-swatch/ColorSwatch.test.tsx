import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {
  ColorSwatch,
  SWATCH_COLORS,
  SKINTONE_SWATCH_COLORS,
  isSwatchColor,
  getSwatchColorBg,
  getSwatchColorFg,
} from './ColorSwatch'

describe('ColorSwatch', () => {
  describe('rendering', () => {
    it('renders without a name (shows gradient)', () => {
      render(<ColorSwatch data-testid="swatch" />)
      const swatch = screen.getByTestId('swatch')
      expect(swatch).toBeInTheDocument()
      expect(swatch).toHaveAttribute('role', 'img')
    })

    it('renders with a predefined swatch color', () => {
      render(<ColorSwatch name="blue" data-testid="swatch" />)
      const swatch = screen.getByTestId('swatch')
      expect(swatch).toBeInTheDocument()
    })

    it('renders with a custom hex color', () => {
      render(<ColorSwatch name="#ff0000" data-testid="swatch" />)
      const swatch = screen.getByTestId('swatch')
      expect(swatch).toBeInTheDocument()
    })

    it('renders with a custom rgb color', () => {
      render(<ColorSwatch name="rgb(255, 0, 0)" data-testid="swatch" />)
      const swatch = screen.getByTestId('swatch')
      expect(swatch).toBeInTheDocument()
    })
  })

  describe('ref forwarding', () => {
    it('forwards ref correctly', () => {
      const ref = { current: null }
      render(<ColorSwatch ref={ref} name="red" />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })

  describe('className', () => {
    it('applies custom className', () => {
      render(<ColorSwatch className="custom-class" data-testid="swatch" />)
      expect(screen.getByTestId('swatch')).toHaveClass('custom-class')
    })

    it('merges custom className with default classes', () => {
      render(<ColorSwatch className="custom-class" data-testid="swatch" />)
      const swatch = screen.getByTestId('swatch')
      expect(swatch).toHaveClass('inline-block')
      expect(swatch).toHaveClass('custom-class')
    })
  })

  describe('aria-label', () => {
    it('sets aria-label to color name when using swatch color without custom label', () => {
      render(<ColorSwatch name="blue" data-testid="swatch" />)
      expect(screen.getByTestId('swatch')).toHaveAttribute('aria-label', 'blue')
    })

    it('uses custom aria-label when provided', () => {
      render(<ColorSwatch name="blue" aria-label="Custom label" data-testid="swatch" />)
      expect(screen.getByTestId('swatch')).toHaveAttribute('aria-label', 'Custom label')
    })

    it('does not set aria-label when using custom color without label', () => {
      render(<ColorSwatch name="#ff0000" data-testid="swatch" />)
      expect(screen.getByTestId('swatch')).not.toHaveAttribute('aria-label')
    })

    it('uses custom aria-label with custom color', () => {
      render(<ColorSwatch name="#ff0000" aria-label="Red color" data-testid="swatch" />)
      expect(screen.getByTestId('swatch')).toHaveAttribute('aria-label', 'Red color')
    })
  })

  describe('background color', () => {
    it('applies CSS variable for swatch colors', () => {
      const { container } = render(<ColorSwatch name="red" />)
      const inner = container.querySelector('[class*="rounded-full"]')
      expect(inner).toHaveStyle({
        backgroundColor: 'var(--sinch-comp-color-swatch-color-red-background)',
      })
    })

    it('applies direct color for custom hex colors', () => {
      const { container } = render(<ColorSwatch name="#ff0000" />)
      const inner = container.querySelector('[class*="rounded-full"]')
      expect(inner).toHaveStyle({ backgroundColor: '#ff0000' })
    })

    it('applies gradient when no color is specified', () => {
      const { container } = render(<ColorSwatch />)
      const inner = container.querySelector('[class*="rounded-full"]')
      expect(inner).toHaveAttribute('style')
      expect(inner?.getAttribute('style')).toContain('linear-gradient')
    })

    it('applies gradient when name is null', () => {
      const { container } = render(<ColorSwatch name={null} />)
      const inner = container.querySelector('[class*="rounded-full"]')
      expect(inner?.getAttribute('style')).toContain('linear-gradient')
    })

    it('applies gradient when name is empty string', () => {
      const { container } = render(<ColorSwatch name="" />)
      const inner = container.querySelector('[class*="rounded-full"]')
      expect(inner?.getAttribute('style')).toContain('linear-gradient')
    })
  })

  describe('accessibility', () => {
    it('has role="img"', () => {
      render(<ColorSwatch name="blue" data-testid="swatch" />)
      expect(screen.getByTestId('swatch')).toHaveAttribute('role', 'img')
    })

    it('passes through additional props', () => {
      render(<ColorSwatch name="blue" data-testid="swatch" data-custom="value" />)
      expect(screen.getByTestId('swatch')).toHaveAttribute('data-custom', 'value')
    })
  })
})

describe('isSwatchColor', () => {
  it('returns true for valid swatch colors', () => {
    expect(isSwatchColor('blue')).toBe(true)
    expect(isSwatchColor('red')).toBe(true)
    expect(isSwatchColor('green')).toBe(true)
    expect(isSwatchColor('default')).toBe(true)
  })

  it('returns true for skin tone colors', () => {
    expect(isSwatchColor('skintone-dark')).toBe(true)
    expect(isSwatchColor('skintone-default')).toBe(true)
    expect(isSwatchColor('skintone-light')).toBe(true)
  })

  it('returns false for invalid colors', () => {
    expect(isSwatchColor('#ff0000')).toBe(false)
    expect(isSwatchColor('rgb(255, 0, 0)')).toBe(false)
    expect(isSwatchColor('invalid')).toBe(false)
    expect(isSwatchColor('')).toBe(false)
    expect(isSwatchColor()).toBe(false)
  })
})

describe('getSwatchColorBg', () => {
  it('returns correct CSS variable for background', () => {
    expect(getSwatchColorBg('blue')).toBe('var(--sinch-comp-color-swatch-color-blue-background)')
    expect(getSwatchColorBg('red')).toBe('var(--sinch-comp-color-swatch-color-red-background)')
    expect(getSwatchColorBg('skintone-dark')).toBe('var(--sinch-comp-color-swatch-color-skintone-dark-background)')
  })
})

describe('getSwatchColorFg', () => {
  it('returns correct CSS variable for foreground', () => {
    expect(getSwatchColorFg('blue')).toBe('var(--sinch-comp-color-swatch-color-blue-foreground)')
    expect(getSwatchColorFg('red')).toBe('var(--sinch-comp-color-swatch-color-red-foreground)')
    expect(getSwatchColorFg('skintone-dark')).toBe('var(--sinch-comp-color-swatch-color-skintone-dark-foreground)')
  })
})

describe('SWATCH_COLORS', () => {
  it('contains all expected base colors', () => {
    const baseColors = ['blue', 'red', 'green', 'yellow', 'orange', 'pink', 'violet', 'gray', 'default']
    baseColors.forEach(color => {
      expect(SWATCH_COLORS).toContain(color)
    })
  })

  it('contains all expected dark colors', () => {
    const darkColors = ['dark-blue', 'dark-green', 'dark-orange', 'dark-pink', 'dark-red', 'dark-violet', 'dark-yellow', 'dark-gray']
    darkColors.forEach(color => {
      expect(SWATCH_COLORS).toContain(color)
    })
  })

  it('contains all expected light colors', () => {
    const lightColors = ['light-blue', 'light-green', 'light-orange', 'light-pink', 'light-red', 'light-violet', 'light-yellow', 'light-gray']
    lightColors.forEach(color => {
      expect(SWATCH_COLORS).toContain(color)
    })
  })

  it('includes all skin tone colors', () => {
    SKINTONE_SWATCH_COLORS.forEach(color => {
      expect(SWATCH_COLORS).toContain(color)
    })
  })
})

describe('SKINTONE_SWATCH_COLORS', () => {
  it('contains all expected skin tone colors', () => {
    const expected = [
      'skintone-dark',
      'skintone-default',
      'skintone-light',
      'skintone-light-medium',
      'skintone-medium',
      'skintone-medium-dark',
    ]
    expect(SKINTONE_SWATCH_COLORS).toEqual(expected)
  })
})

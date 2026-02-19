import type { Meta, StoryObj } from '@storybook/react'
import { ColorSwatch, SWATCH_COLORS, SKINTONE_SWATCH_COLORS } from './ColorSwatch'

const meta: Meta<typeof ColorSwatch> = {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [undefined, ...SWATCH_COLORS, '#ff0000', '#00ff00', 'rgb(0, 0, 255)'],
      description: 'The color name - can be a predefined swatch color or a CSS color value',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label for the color swatch',
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorSwatch>

/**
 * Default state shows a gradient when no color is specified.
 */
export const Default: Story = {
  args: {},
}

/**
 * With a predefined swatch color.
 */
export const WithSwatchColor: Story = {
  args: {
    name: 'blue',
  },
}

/**
 * With a custom hex color.
 */
export const WithHexColor: Story = {
  args: {
    name: '#ff6b6b',
  },
}

/**
 * With a custom RGB color.
 */
export const WithRgbColor: Story = {
  args: {
    name: 'rgb(100, 149, 237)',
  },
}

/**
 * All predefined swatch colors.
 */
export const AllSwatchColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {SWATCH_COLORS.filter(c => !c.startsWith('skintone')).map((color) => (
        <div key={color} className="flex flex-col items-center gap-1">
          <ColorSwatch name={color} />
          <span className="text-xs text-foreground-muted">{color}</span>
        </div>
      ))}
    </div>
  ),
}

/**
 * Skin tone colors for emoji and avatar components.
 */
export const SkinToneColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {SKINTONE_SWATCH_COLORS.map((color) => (
        <div key={color} className="flex flex-col items-center gap-1">
          <ColorSwatch name={color} />
          <span className="text-xs text-foreground-muted">{color.replace('skintone-', '')}</span>
        </div>
      ))}
    </div>
  ),
}

/**
 * Row of various colors showing the component inline.
 */
export const InlineUsage: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-foreground">Color:</span>
      <ColorSwatch name="red" />
      <ColorSwatch name="green" />
      <ColorSwatch name="blue" />
      <ColorSwatch name="yellow" />
      <ColorSwatch name="violet" />
    </div>
  ),
}

/**
 * No color shows a gradient background.
 */
export const NoColor: Story = {
  args: {
    name: undefined,
  },
}

/**
 * With custom aria-label for accessibility.
 */
export const WithAriaLabel: Story = {
  args: {
    name: 'red',
    'aria-label': 'Selected color: Red',
  },
}

/**
 * Custom CSS color values.
 */
export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="#e74c3c" />
        <span className="text-xs text-foreground-muted">#e74c3c</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="#3498db" />
        <span className="text-xs text-foreground-muted">#3498db</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="#2ecc71" />
        <span className="text-xs text-foreground-muted">#2ecc71</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="hsl(45, 100%, 51%)" />
        <span className="text-xs text-foreground-muted">hsl gold</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ColorSwatch name="rgba(155, 89, 182, 0.8)" />
        <span className="text-xs text-foreground-muted">rgba purple</span>
      </div>
    </div>
  ),
}

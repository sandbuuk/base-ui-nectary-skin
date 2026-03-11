import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { fn } from '@storybook/test'
import { ColorMenu, ColorMenuOption } from './ColorMenu'
import { SWATCH_COLORS } from '../color-swatch'

const meta: Meta<typeof ColorMenu> = {
  title: 'Components/ColorMenu',
  component: ColorMenu,
  tags: ['autodocs'],
  args: {
    onChange: fn(),
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The currently selected color value',
    },
    rows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of rows to show before scrolling',
    },
    cols: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of columns to display',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when a color is selected',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A grid-based color selection menu with keyboard navigation, customizable layout, and support for predefined and custom CSS colors.\n\nKeyboard: Arrow keys to navigate the grid. Enter or Space to select a color.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorMenu>

// Sample colors from the swatch palette
const SAMPLE_COLORS = [
  'blue',
  'green',
  'red',
  'yellow',
  'orange',
  'violet',
  'pink',
  'gray',
  'dark-blue',
  'dark-green',
]

/**
 * Default ColorMenu with sample colors.
 */
export const Default: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map((color) => (
        <ColorMenuOption key={color} value={color} />
      ))}
    </ColorMenu>
  ),
  args: {
    value: 'blue',
  },
}

/**
 * Controlled ColorMenu with state management.
 */
export const Controlled: Story = {
  render: function ControlledStory(args) {
    const [selectedColor, setSelectedColor] = useState('green')

    return (
      <div className="flex flex-col gap-4">
        <p className="text-foreground">Selected color: <strong>{selectedColor}</strong></p>
        <ColorMenu
          {...args}
          value={selectedColor}
          onChange={(color) => {
            setSelectedColor(color)
            args.onChange?.(color)
          }}
          aria-label="Select a color"
        >
          {SAMPLE_COLORS.map((color) => (
            <ColorMenuOption key={color} value={color} />
          ))}
        </ColorMenu>
      </div>
    )
  },
}

/**
 * All available swatch colors.
 */
export const AllSwatchColors: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      {SWATCH_COLORS.filter((c) => !c.startsWith('skintone')).map((color) => (
        <ColorMenuOption key={color} value={color} />
      ))}
    </ColorMenu>
  ),
  args: {
    value: 'blue',
    cols: 6,
  },
}

/**
 * With custom column count.
 */
export const CustomColumns: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map((color) => (
        <ColorMenuOption key={color} value={color} />
      ))}
    </ColorMenu>
  ),
  args: {
    value: 'blue',
    cols: 3,
  },
}

/**
 * With row limit and scrolling.
 */
export const WithRowLimit: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      {SWATCH_COLORS.filter((c) => !c.startsWith('skintone')).map((color) => (
        <ColorMenuOption key={color} value={color} />
      ))}
    </ColorMenu>
  ),
  args: {
    value: 'blue',
    cols: 5,
    rows: 3,
  },
}

/**
 * With custom CSS colors (hex values).
 */
export const CustomColors: Story = {
  render: (args) => {
    const customColors = [
      '#FF5733',
      '#33FF57',
      '#3357FF',
      '#FF33F5',
      '#F5FF33',
      '#33FFF5',
      '#FF8C00',
      '#8B00FF',
    ]

    return (
      <ColorMenu {...args} aria-label="Select a color">
        {customColors.map((color) => (
          <ColorMenuOption key={color} value={color} aria-label={color} />
        ))}
      </ColorMenu>
    )
  },
  args: {
    value: '#FF5733',
    cols: 4,
  },
}

/**
 * Mixed swatch and custom colors.
 */
export const MixedColors: Story = {
  render: (args) => {
    const mixedColors = [
      'blue',
      '#FF5733',
      'green',
      '#33FF57',
      'red',
      '#3357FF',
      'yellow',
      '#FF33F5',
    ]

    return (
      <ColorMenu {...args} aria-label="Select a color">
        {mixedColors.map((color) => (
          <ColorMenuOption
            key={color}
            value={color}
            aria-label={color.startsWith('#') ? color : undefined}
          />
        ))}
      </ColorMenu>
    )
  },
  args: {
    value: 'blue',
    cols: 4,
  },
}

/**
 * Skin tone colors for emoji-like use cases.
 */
export const SkinToneColors: Story = {
  render: (args) => {
    const skinTones = SWATCH_COLORS.filter((c) => c.startsWith('skintone'))

    return (
      <ColorMenu {...args} aria-label="Select skin tone">
        {skinTones.map((color) => (
          <ColorMenuOption key={color} value={color} />
        ))}
      </ColorMenu>
    )
  },
  args: {
    value: 'skintone-default',
    cols: 6,
  },
}

/**
 * Single row layout.
 */
export const SingleRow: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.slice(0, 6).map((color) => (
        <ColorMenuOption key={color} value={color} />
      ))}
    </ColorMenu>
  ),
  args: {
    value: 'blue',
    cols: 6,
  },
}

/**
 * Minimal with just a few colors.
 */
export const Minimal: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      <ColorMenuOption value="blue" />
      <ColorMenuOption value="green" />
      <ColorMenuOption value="red" />
    </ColorMenu>
  ),
  args: {
    value: 'blue',
    cols: 3,
  },
}

/**
 * Uncontrolled mode with defaultValue.
 */
export const Uncontrolled: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map((color) => (
        <ColorMenuOption key={color} value={color} />
      ))}
    </ColorMenu>
  ),
  args: {
    defaultValue: 'orange',
  },
}

/**
 * Without any initial selection.
 */
export const NoInitialSelection: Story = {
  render: (args) => (
    <ColorMenu {...args} aria-label="Select a color">
      {SAMPLE_COLORS.map((color) => (
        <ColorMenuOption key={color} value={color} />
      ))}
    </ColorMenu>
  ),
}

/**
 * Keyboard navigation demo.
 * Use arrow keys to navigate and Enter/Space to select.
 */
export const KeyboardNavigation: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <p className="text-foreground-muted text-sm">
        Click on the menu to focus, then use arrow keys to navigate and Enter/Space to select.
      </p>
      <ColorMenu {...args} aria-label="Select a color">
        {SAMPLE_COLORS.map((color) => (
          <ColorMenuOption key={color} value={color} />
        ))}
      </ColorMenu>
    </div>
  ),
  args: {
    value: 'blue',
  },
}

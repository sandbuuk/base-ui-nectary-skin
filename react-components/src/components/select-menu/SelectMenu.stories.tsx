import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { Icon } from '../icon'
import {
  Select,
  SelectButton,
  SelectMenu,
  SelectMenuOption,
} from './SelectMenu'

// ============================================================================
// SelectMenu Stories
// ============================================================================

const meta: Meta<typeof SelectMenu> = {
  title: 'Components/SelectMenu',
  component: SelectMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A dropdown selection menu with built-in search, keyboard navigation, multi-select capability, and customizable trigger.\n\nKeyboard: Arrow Up/Down to navigate. Enter or Space to select. Home/End to jump. Type to search.',
      },
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    multiple: {
      control: 'boolean',
    },
    searchable: {
      control: 'select',
      options: [null, true, false],
    },
    rows: {
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof SelectMenu>

// Sample options
const fruitOptions = [
  { value: 'apple', text: 'Apple' },
  { value: 'banana', text: 'Banana' },
  { value: 'cherry', text: 'Cherry' },
  { value: 'date', text: 'Date' },
  { value: 'elderberry', text: 'Elderberry' },
]

// Default story
export const Default: Story = {
  args: {
    'aria-label': 'Select a fruit',
  },
  render: (args) => (
    <SelectMenu {...args}>
      {fruitOptions.map((option) => (
        <SelectMenuOption
          key={option.value}
          value={option.value}
          text={option.text}
        />
      ))}
    </SelectMenu>
  ),
}

// With selected value
export const WithSelectedValue: Story = {
  args: {
    'aria-label': 'Select a fruit',
    value: 'cherry',
  },
  render: (args) => (
    <SelectMenu {...args}>
      {fruitOptions.map((option) => (
        <SelectMenuOption
          key={option.value}
          value={option.value}
          text={option.text}
        />
      ))}
    </SelectMenu>
  ),
}

// Multiple selection
export const MultipleSelection: Story = {
  args: {
    'aria-label': 'Select fruits',
    multiple: true,
    value: 'apple,cherry',
  },
  render: (args) => (
    <SelectMenu {...args}>
      {fruitOptions.map((option) => (
        <SelectMenuOption
          key={option.value}
          value={option.value}
          text={option.text}
        />
      ))}
    </SelectMenu>
  ),
}

// With search
export const WithSearch: Story = {
  args: {
    'aria-label': 'Select a fruit',
    searchable: true,
  },
  render: (args) => (
    <SelectMenu {...args}>
      {fruitOptions.map((option) => (
        <SelectMenuOption
          key={option.value}
          value={option.value}
          text={option.text}
        />
      ))}
    </SelectMenu>
  ),
}

// With rows (scrollable)
export const WithRows: Story = {
  args: {
    'aria-label': 'Select a fruit',
    rows: 3,
  },
  render: (args) => (
    <SelectMenu {...args}>
      {[
        ...fruitOptions,
        { value: 'fig', text: 'Fig' },
        { value: 'grape', text: 'Grape' },
        { value: 'honeydew', text: 'Honeydew' },
      ].map((option) => (
        <SelectMenuOption
          key={option.value}
          value={option.value}
          text={option.text}
        />
      ))}
    </SelectMenu>
  ),
}

// With disabled options
export const WithDisabledOptions: Story = {
  args: {
    'aria-label': 'Select a fruit',
  },
  render: (args) => (
    <SelectMenu {...args}>
      <SelectMenuOption value="apple" text="Apple" />
      <SelectMenuOption value="banana" text="Banana" disabled />
      <SelectMenuOption value="cherry" text="Cherry" />
      <SelectMenuOption value="date" text="Date" disabled />
      <SelectMenuOption value="elderberry" text="Elderberry" />
    </SelectMenu>
  ),
}

// With icons
export const WithIcons: Story = {
  args: {
    'aria-label': 'Select a fruit',
  },
  render: (args) => (
    <SelectMenu {...args}>
      <SelectMenuOption
        value="apple"
        text="Apple"
        icon={<Icon name="fa-apple-whole" iconsVersion="2" />}
      />
      <SelectMenuOption
        value="lemon"
        text="Lemon"
        icon={<Icon name="fa-lemon" iconsVersion="2" />}
      />
      <SelectMenuOption
        value="carrot"
        text="Carrot"
        icon={<Icon name="fa-carrot" iconsVersion="2" />}
      />
    </SelectMenu>
  ),
}

// Controlled example
export const Controlled: Story = {
  args: {
    'aria-label': 'Select a fruit',
  },
  render: function ControlledExample(args) {
    const [value, setValue] = useState('banana')

    return (
      <div className="flex flex-col gap-4">
        <p>Selected: {value || 'none'}</p>
        <SelectMenu
          {...args}
          value={value}
          onChange={setValue}
        >
          {fruitOptions.map((option) => (
            <SelectMenuOption
              key={option.value}
              value={option.value}
              text={option.text}
            />
          ))}
        </SelectMenu>
        <button
          type="button"
          onClick={() => setValue('')}
          className="px-4 py-2 bg-surface-secondary rounded-md"
        >
          Clear selection
        </button>
      </div>
    )
  },
}

// ============================================================================
// SelectButton Stories
// ============================================================================

export const ButtonDefault: StoryObj<typeof SelectButton> = {
  render: () => (
    <SelectButton
      aria-label="Select option"
      placeholder="Select an option..."
    />
  ),
}

export const ButtonWithText: StoryObj<typeof SelectButton> = {
  render: () => (
    <SelectButton
      aria-label="Select option"
      text="Apple"
      placeholder="Select an option..."
    />
  ),
}

export const ButtonSizes: StoryObj<typeof SelectButton> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <SelectButton
        size="s"
        aria-label="Small"
        text="Small"
      />
      <SelectButton
        size="m"
        aria-label="Medium"
        text="Medium"
      />
      <SelectButton
        size="l"
        aria-label="Large"
        text="Large"
      />
    </div>
  ),
}

export const ButtonStates: StoryObj<typeof SelectButton> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <SelectButton
        aria-label="Default"
        placeholder="Default"
      />
      <SelectButton
        aria-label="Invalid"
        placeholder="Invalid"
        invalid
      />
      <SelectButton
        aria-label="Disabled"
        placeholder="Disabled"
        disabled
      />
      <SelectButton
        aria-label="Disabled with text"
        text="Selected value"
        disabled
      />
    </div>
  ),
}

export const ButtonWithIcon: StoryObj<typeof SelectButton> = {
  render: () => (
    <SelectButton
      aria-label="Select fruit"
      text="Apple"
      icon={<Icon name="fa-apple-whole" iconsVersion="2" />}
    />
  ),
}

// ============================================================================
// Compound Component Usage
// ============================================================================

export const CompoundUsage: StoryObj<typeof Select> = {
  render: function CompoundExample() {
    const [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const selectedOption = fruitOptions.find((opt) => opt.value === value)

    return (
      <div className="flex flex-col gap-4">
        <p>Selected: {value || 'none'}</p>

        {/* Button to trigger dropdown */}
        <Select.Button
          aria-label="Select a fruit"
          text={selectedOption?.text}
          placeholder="Select a fruit..."
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Dropdown menu (shown when open) */}
        {isOpen && (
          <div className="border border-border rounded-md shadow-lg bg-pure">
            <Select
              aria-label="Select a fruit"
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
                setIsOpen(false)
              }}
            >
              {fruitOptions.map((option) => (
                <Select.Option
                  key={option.value}
                  value={option.value}
                  text={option.text}
                />
              ))}
            </Select>
          </div>
        )}
      </div>
    )
  },
}

// Full example with all features
export const FullExample: StoryObj<typeof Select> = {
  render: function FullExampleComponent() {
    const [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const countries = [
      { value: 'us', text: 'United States', icon: 'fa-flag-usa' },
      { value: 'uk', text: 'United Kingdom', icon: 'fa-flag' },
      { value: 'ca', text: 'Canada', icon: 'fa-leaf' },
      { value: 'au', text: 'Australia', icon: 'fa-globe' },
      { value: 'de', text: 'Germany', icon: 'fa-flag' },
      { value: 'fr', text: 'France', icon: 'fa-flag' },
      { value: 'jp', text: 'Japan', icon: 'fa-flag' },
      { value: 'br', text: 'Brazil', icon: 'fa-flag' },
    ]

    const selectedCountry = countries.find((c) => c.value === value)

    return (
      <div className="relative w-64">
        <Select.Button
          aria-label="Select country"
          text={selectedCountry?.text}
          placeholder="Select country..."
          onClick={() => setIsOpen(!isOpen)}
          icon={
            selectedCountry !== undefined ? (
              <Icon name={selectedCountry.icon} iconsVersion="2" />
            ) : undefined
          }
        />

        {isOpen && (
          <div
            className="absolute z-10 top-full left-0 right-0 mt-1 border border-border rounded-md shadow-lg bg-pure"
          >
            <Select
              aria-label="Select country"
              value={value}
              searchable
              rows={5}
              onChange={(newValue) => {
                setValue(newValue)
                setIsOpen(false)
              }}
            >
              {countries.map((country) => (
                <Select.Option
                  key={country.value}
                  value={country.value}
                  text={country.text}
                  icon={<Icon name={country.icon} iconsVersion="2" />}
                />
              ))}
            </Select>
          </div>
        )}
      </div>
    )
  },
}

/**
 * SelectMenu with a clearable button to reset the selection.
 */
export const Clearable: Story = {
  render: function ClearableSelectMenu() {
    const [value, setValue] = useState('apple')

    return (
      <div className="w-64">
        <Select
          aria-label="Select a fruit"
          value={value}
          onChange={setValue}
        >
          <SelectButton
            aria-label="Select a fruit"
            text={value || 'Select a fruit...'}
            clearable
            onClear={() => setValue('')}
          />
          <SelectMenu aria-label="Fruits">
            <SelectMenuOption value="apple" text="Apple" />
            <SelectMenuOption value="banana" text="Banana" />
            <SelectMenuOption value="cherry" text="Cherry" />
            <SelectMenuOption value="grape" text="Grape" />
          </SelectMenu>
        </Select>
      </div>
    )
  },
}

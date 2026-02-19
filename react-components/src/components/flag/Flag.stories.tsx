import type { Meta, StoryObj } from '@storybook/react'
import { Flag } from './Flag'

// Example flag URL template using flagcdn.com
const FLAG_URL_TEMPLATE = 'https://flagcdn.com/w40/%s.png'

const meta: Meta<typeof Flag> = {
  title: 'Components/Flag',
  component: Flag,
  tags: ['autodocs'],
  args: {
    flagUrlTemplate: FLAG_URL_TEMPLATE,
  },
  argTypes: {
    code: {
      control: 'text',
      description: 'ISO 3166-1 alpha-2 country code',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    flagUrlTemplate: {
      control: 'text',
      description: 'URL template with %s placeholder for country code',
    },
  },
}

export default meta
type Story = StoryObj<typeof Flag>

/**
 * Default flag displaying the United States.
 */
export const Default: Story = {
  args: {
    code: 'us',
  },
}

/**
 * Display flags in all available sizes.
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Flag code="us" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="us" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
    </div>
  ),
}

/**
 * Display various country flags.
 */
export const Countries: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Flag code="us" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="gb" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="se" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="de" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="fr" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="jp" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="br" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      <Flag code="in" flagUrlTemplate={FLAG_URL_TEMPLATE} />
    </div>
  ),
}

/**
 * Flags with different sizes showing a row of countries.
 */
export const SizeComparison: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">xs</span>
        <Flag code="us" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="xs" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">sm</span>
        <Flag code="us" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="sm" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">md</span>
        <Flag code="us" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="md" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">lg</span>
        <Flag code="us" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="lg" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-8 text-sm text-foreground-muted">xl</span>
        <Flag code="us" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="gb" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
        <Flag code="se" size="xl" flagUrlTemplate={FLAG_URL_TEMPLATE} />
      </div>
    </div>
  ),
}

/**
 * Flag with custom alt text for accessibility.
 */
export const WithCustomAlt: Story = {
  args: {
    code: 'se',
    alt: 'Swedish flag',
    size: 'lg',
  },
}

/**
 * Using a different flag URL provider.
 */
export const CustomUrlTemplate: Story = {
  args: {
    code: 'us',
    flagUrlTemplate: 'https://flagcdn.com/h40/%s.png',
    size: 'lg',
  },
}

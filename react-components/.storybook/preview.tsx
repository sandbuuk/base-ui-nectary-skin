import type { Preview } from '@storybook/react'
import React from 'react'
// Theme CSS must come first to define CSS variables
import '../../themes/base/index.css'
// Tailwind CSS uses the theme variables
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a2126' },
        { name: 'canvas', value: 'var(--sinch-sys-color-surface-canvas)' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
}

export default preview

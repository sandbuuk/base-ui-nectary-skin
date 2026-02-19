import baseConfig from '../../react-components/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  // Extend the base config from react-components
  ...baseConfig,
  // Scan react-components source files for class extraction
  content: [
    './src/**/*.{ts,tsx,mdx}',
    '../../react-components/src/**/*.{ts,tsx}',
  ],
}

export default config

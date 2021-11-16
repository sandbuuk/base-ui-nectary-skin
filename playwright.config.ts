import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  // webServer: {
  //   command: 'npm run storybook wait-on http://localhost:4000',
  //   port: 4000,
  //   timeout: 120 * 1000,
  //   reuseExistingServer: process.env.CI != null,
  // },
  testDir: 'tests/components',
  testMatch: '*.ts',
}

export default config

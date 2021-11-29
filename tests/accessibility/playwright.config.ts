import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'accessibility',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:4000',
      },
    },
  ],
  testDir: 'tests',
  testMatch: '*.ts',
}

export default config

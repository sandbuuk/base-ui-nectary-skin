import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        contextOptions: {
          deviceScaleFactor: 2,
          reducedMotion: 'reduce',
        },
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        contextOptions: {
          deviceScaleFactor: 2,
          reducedMotion: 'reduce',
        },
      },
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit',
        contextOptions: {
          deviceScaleFactor: 2,
          reducedMotion: 'reduce',
        },
      },
    },
  ],
  // webServer: {
  //   command: 'npm run storybook wait-on http://localhost:4000',
  //   port: 4000,
  //   timeout: 120 * 1000,
  //   reuseExistingServer: process.env.CI != null,
  // },
  testDir: 'tests/components',
  testMatch: '*.ts',
  updateSnapshots: process.env.CI != null ? 'none' : 'missing',
}

export default config

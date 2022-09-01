import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium-react',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:3021',
        timezoneId: 'Pacific/Honolulu',
      },
    },
    {
      name: 'firefox-vue',
      use: {
        browserName: 'firefox',
        baseURL: 'http://localhost:3022',
      },
    },
    {
      name: 'webkit-angular',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:3023',
      },
    },
    {
      name: 'chromium-vue',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:3022',
        timezoneId: 'Australia/Sydney',
      },
    },
    {
      name: 'firefox-angular',
      use: {
        browserName: 'firefox',
        baseURL: 'http://localhost:3023',
      },
    },
    {
      name: 'webkit-react',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:3021',
      },
    },
    {
      name: 'chromium-angular',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:3023',
        timezoneId: 'Europe/Stockholm',
      },
    },
    {
      name: 'firefox-react',
      use: {
        browserName: 'firefox',
        baseURL: 'http://localhost:3021',
      },
    },
    {
      name: 'webkit-vue',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:3022',
      },
    },
  ],
  testDir: 'components',
  testMatch: '*.ts',
  updateSnapshots: 'none',
  use: {
    deviceScaleFactor: 2,
    contextOptions: {
      reducedMotion: 'reduce',
    },
  },
  reportSlowTests: {
    max: 0,
    threshold: 60000,
  },
  fullyParallel: true,
  workers: process.env.CI != null ? 1 : 1,
  retries: process.env.CI != null ? 1 : 0,
  maxFailures: process.env.CI != null ? 1 : 0,
  expect: {
    toMatchSnapshot: {
      threshold: 0.02,
    },
  },
  reporter: 'list',
}

export default config

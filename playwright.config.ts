import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium-react',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:4000',
      },
    },
    {
      name: 'firefox-react',
      use: {
        browserName: 'firefox',
        baseURL: 'http://localhost:4000',
      },
    },
    {
      name: 'webkit-react',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:4000',
      },
    },
    {
      name: 'chromium-vue',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:4001',
      },
    },
    {
      name: 'firefox-vue',
      use: {
        browserName: 'firefox',
        baseURL: 'http://localhost:4001',
      },
    },
    {
      name: 'webkit-vue',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:4001',
      },
    },
    {
      name: 'chromium-angular',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:4002',
      },
    },
    {
      name: 'firefox-angular',
      use: {
        browserName: 'firefox',
        baseURL: 'http://localhost:4002',
      },
    },
    {
      name: 'webkit-angular',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:4002',
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
  updateSnapshots: 'none',
  use: {
    deviceScaleFactor: 2,
    contextOptions: {
      reducedMotion: 'reduce',
    },
  },
  // expect: {
  //   toMatchSnapshot: {
  //     threshold: 1,
  //   },
  // },
}

export default config

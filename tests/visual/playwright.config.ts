import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'chromium-react',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:3021',
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
      name: 'webkit-react',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:3021',
      },
    },
    {
      name: 'chromium-vue',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:3022',
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
      name: 'webkit-vue',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:3022',
      },
    },
    {
      name: 'chromium-angular',
      use: {
        browserName: 'chromium',
        baseURL: 'http://localhost:3023',
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
      name: 'webkit-angular',
      use: {
        browserName: 'webkit',
        baseURL: 'http://localhost:3023',
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
  workers: 3,
  retries: 1,
  // expect: {
  //   toMatchSnapshot: {
  //     threshold: 1,
  //   },
  // },
}

export default config

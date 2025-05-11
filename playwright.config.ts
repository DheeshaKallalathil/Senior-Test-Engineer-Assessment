import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000, 

  use: {
    baseURL: 'https://www.saucedemo.com/v1/',
    headless: false, 
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['list'], 
    ['allure-playwright'], 
  ],

  projects: [
    {
      name: 'Chrome Desktop',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
    },
    {
      name: 'Firefox Desktop',
      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
      },
    },
    {
      name: 'Pixel 5 (Mobile)',
      use: {
        ...devices['Pixel 5'],
        browserName: 'chromium',
      },
    },
    {
      name: 'iPad Pro 11 (Tablet)',
      use: {
        ...devices['iPad Pro 11'],
        browserName: 'webkit',
      },
    },
  ],

  outputDir: 'test-results',
});

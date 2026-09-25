import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173/Personal-Website/',
    channel: process.env.PLAYWRIGHT_CHANNEL || 'chrome',
    trace: 'retain-on-failure',
  },
  webServer: {
    command:
      'npm run preview -- --host 127.0.0.1 --port 4173 --strictPort --base /Personal-Website/',
    url: 'http://127.0.0.1:4173/Personal-Website/',
    reuseExistingServer: !process.env.CI,
  },
});

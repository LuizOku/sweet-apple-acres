import { PlaywrightTestConfig, devices } from "@playwright/test";
import path from "path";

const baseURL = `http://localhost:3000`;

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  testDir: path.join(__dirname, "e2e"),
  retries: 1,
  outputDir: "test-results/",
  webServer: {
    command: "npm run dev",
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
    trace: "retry-with-trace",
  },

  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        ...devices["Pixel 5"],
      },
    },
    {
      name: "Mobile Safari",
      use: devices["iPhone 12"],
    },
  ],
};
export default config;

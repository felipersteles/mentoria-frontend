// @ts-check
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./specs",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:4173",
    trace: "on-first-retry",
  },
  webServer: {
    command: "node serve.js",
    url: "http://localhost:4173/atv1-encontrar-elementos/",
    cwd: __dirname,
    reuseExistingServer: !process.env.CI,
  },
});

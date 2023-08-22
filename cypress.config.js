const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://localhost:80",
    execTimeout: 300000,
      defaultCommandTimeout: 60000,
      pageLoadTimeout: 60000,
      viewportWidth: 1920,
      viewportHeight: 1080,
      requestTimeout: 5000,
      responseTimeout: 60000,
      retries: {
        runMode: 2,
        openMode: 1
      },
      failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

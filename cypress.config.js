const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = file => {
const pathOfConfigurationFile = `qa-challenge/cypress/config/cypress.${file}.json`;

  return (
      file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
    );
};

module.exports = defineConfig({
  e2e: {
    
    setupNodeEvents(on, config) {
      const environment = config.env.configFile || "testEnv";
      const configurationForEnvironment = fetchConfigurationByFile(environment);

    return configurationForEnvironment || config;
      // implement node event listeners here
    },
  },
});

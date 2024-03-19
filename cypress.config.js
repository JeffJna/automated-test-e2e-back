const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "idduub",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
});

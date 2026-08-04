const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(args) {
          console.log(...args);
          return null;
        }
      });
    },
    baseUrl: 'https://bdle.github.io/mortgage-calculator/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    testIsolation: true,
  }
});
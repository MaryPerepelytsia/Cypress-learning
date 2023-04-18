# Cypress

## From Scratch

Create a project directory, open a terminal in the project root directory and run the following commands;

```bash
npm init
npm install cypress --save-dev
```

Further details see [Installing Cypress with npm](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install).

---

## Opening Cypress

You can now open the Cypress console by running:

```bash
node_modules/.bin/cypress open
```

or

```bash
npx cypress open
```

from the project root folder.
To run from a command line add a script to `package.json`.

```json
scripts: {
  "cyrun": "node_modules/.bin/cypress run --browser chrome"
}
```

Tests can then be run from a Terminal

```bash
npm run cyrun
```

---

# Plugins

## Cucumber

To add the cucumber preprocessor run;

```bash
npm install cypress-cucumber-preprocessor --save-dev
```

Now configure Cypress by adding the [Cucumber Plugin] to `cypress/plugins/index.js`:

```javascript
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};
```

## Cosmic config module

The Cypress-Cucumber-Preprocessor docs recommend using the [Cosmic Config module](https://github.com/davidtheclark/cosmiconfig) installed via:

```bash
npm install cosmiconfig --save-dev
```

and then added as a section to `package.json` as follows:

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```

By setting this to true, the Cypress Cucumber Preprocessor Style pattern for placing step definitions files
 will be used instead of the "oldschool" i.e. everything is global Cucumber style.




import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_selectors from "../selectors/loginPage_selectors";

const loginPage_selectors = new LoginPage_selectors();

let loginPage_data; //Used as link to the fixxtures data.

before(() => {
    cy.fixture("/loginPage.json").then((loginDataFile) => {
      loginPage_data = loginDataFile;
    });
  });  

before(() => {

    // cy.visit('https://bloomenty.com/nl/home');
    cy.session('cookie', () =>{});
  
  });

Then("I should see that 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.loginPage).should("be.visible")
  });

When("I navigate to 'Login' page", () => {
    cy.visit(loginPage_data.URLs.loginPageURL);
  });

Then("I should see that 'Login' page URL is correct", () => {
    cy.url().should('include','myaccount/login')
  });
  
Then("I should see that 'Email' field is displayed", () => {
    cy.get(loginPage_selectors.emailInputField).should("be.visible")
  });

Then("I should see that 'Password' field is displayed", () => {
    cy.get(loginPage_selectors.passwordInputField).should("be.visible")
  });

When("I press 'Login' button on the 'Login' page", () => {
    cy.get(loginPage_selectors.loginButton).click();
  });

Then("I should see that 'Invalid email address or password!' alert is displayed", () => {
    cy.get(loginPage_selectors.invalidEmailAddressOrPassword).should("be.visible")
  });

When("I fill in the 'Email' field on the 'Login' page with 'Correct' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.emailInputCorrectData);
  });

When("I fill in 'Password' field", () => {
    cy.get(loginPage_selectors.passwordInputField).clear().type("12345678");
  });

Then("I should see that 'My profile' title is displayed", () => {
    cy.get(loginPage_selectors.myProfileTitle).should("be.visible")
  });

When("I fill in the 'Email' field on the 'Login' page with 'No symbols before At' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.emailInputIncorrectData.noSymbolsBeforeAt);
  });

When("I fill in the 'Email' field on the 'Login' page with 'No symbols after Dot' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.emailInputIncorrectData.noSymbolsAfterDot);
  });

When("I fill in the 'Email' field on the 'Login' page with 'No Dot' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.emailInputIncorrectData.noDotEmailData);
  });

When("I fill in the 'Email' field on the 'Login' page with 'No At' data", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type(loginPage_data.emailData.emailInputIncorrectData.noAtEmailData);
  });


// Then('I should see that {string} title is displayed', (s) => {
//    Write code here that turns the phrase above into concrete actions
// })









  

  

  
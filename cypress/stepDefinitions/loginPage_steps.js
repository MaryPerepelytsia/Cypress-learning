import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_selectors from "../selectors/loginPage_selectors";

const loginPage_selectors = new LoginPage_selectors;

before(() => {

    // cy.visit('https://bloomenty.com/nl/home');
    cy.session('cookie', () =>{});
  
  });

Then("I should see that 'Login' page is displayed", () => {
    cy.get(loginPage_selectors.loginPage).should("be.visible")
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

Then("I should see that 'Ongeldig e-mailadres of wachtwoord!' alert is displayed", () => {
    cy.get(".alert").should("be.visible")
  });

When("I fill in 'Login' field", () => {
    cy.get(loginPage_selectors.emailInputField).clear().type("testqa@gmail.com");
  });

When("I fill in 'Password' field", () => {
    cy.get(loginPage_selectors.passwordInputField).clear().type("12345678");
  });

Then("I should see that 'My profile' title is displayed", () => {
    cy.get(loginPage_selectors.myProfileTitle).should("be.visible")
  });

// Then('I should see that {string} title is displayed', (s) => {
//    Write code here that turns the phrase above into concrete actions
// })









  

  

  
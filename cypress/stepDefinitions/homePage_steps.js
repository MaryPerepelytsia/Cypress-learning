import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HomePage_selectors from "../selectors/homePage_selectors";

const homePage_selectors = new HomePage_selectors;

When("I click 'Accept' button", () => {
    cy.get(homePage_selectors.acceptCookiesButton).click();
  });

Then("I should see that 'Bloomenty' icon is present", () => {
    cy.get(homePage_selectors.bloomentyIcon).should("be.visible")
  });

Then("I should see that 'Services' menu is present", () => {
    cy.get(homePage_selectors.servicesMenu).should("be.visible")
  });

Then("I should see that 'Encyclopedia' menu is present", () => {
    cy.get(homePage_selectors.encyclopediaMenu).should("be.visible")
  });

Then("I should see that 'About us' menu is present", () => {
    cy.get(homePage_selectors.aboutUsMenu).should("be.visible")
  });
 
Then("I should see that 'ENTER' button is present", () => {
    cy.get(homePage_selectors.enterButton).should("be.visible")
  });





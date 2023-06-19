import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HomePage_selectors from "../selectors/homePage_selectors";

const homePage_selectors = new HomePage_selectors;

before(() => {

    cy.visit('https://bloomenty.com/nl/home');
    cy.session('cookie', () =>{});
  
  });

When("I click 'Accept' button", () => {
    cy.get(homePage_selectors.acceptCookiesButton).click();
  });

Then("I should see that 'Bloomenty' icon is present", () => {
    cy.get(homePage_selectors.bloomentyIcon).should("be.visible")
  });

Then("I should see that 'Diensten' menu is present", () => {
    cy.get(homePage_selectors.dienstenMenu).should("be.visible")
  });

Then("I should see that 'Encyclopedie' menu is present", () => {
    cy.get(homePage_selectors.encyclopedieMenu).should("be.visible")
  });

// Then("I should see that 'Mijn Bloomenty' menu is present", () => {
//     cy.get(":nth-child(3) > .nav-item-title").should("be.visible")
//   });

Then("I should see that 'Over ons' menu is present", () => {
    cy.get(homePage_selectors.overOnsMenu).should("be.visible")
  });
 
Then("I should see that 'ENTER' button is present", () => {
    cy.get(homePage_selectors.enterButton).should("be.visible")
  });





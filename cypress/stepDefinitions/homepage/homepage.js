import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

Given("I navigate to Google home page", () => {
    cy.visit("http://google.com");
});

Then ("I see Google icon", () => {
    cy.get(".lnXdpd").should("be.visible");
});

Then('I want to autogenerate this part', () => {
  // Write code here that turns the phrase above into concrete actions
})


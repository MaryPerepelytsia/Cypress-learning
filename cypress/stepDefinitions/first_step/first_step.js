import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

Given("I navigate to buienradar.nl home page", () => {
    cy.visit("https://buienradar.nl");
});

Then ("I see nu.nl icon", () => {
    cy.get(".lnXdpd").should("be.visible");
});

Then('I see a page some code', () => {
  // Write code here that turns the phrase above into concrete actions
})

import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HomePagePage from "../pageObjects/homePage_page.js";

const homePagePage = new HomePagePage();

before(() => {

    cy.visit('https://bloomenty.com/nl/home');
    cy.session('cookie', () =>{});
  
  });

When("I navigate to 'Home' page", () => {
  cy.visit("https://bloomenty.com/nl/home");
});

When("I navigate to 'Vacancies' page", () => {
    cy.visit("https://bloomenty.com/nl/vacancies");
  });

Then("I should see 'Cookies' page", () => {
    homePagePage.checkCookiesPageIsVisible();
});

Then("I should see 'your flower community' icon", () => {
  cy.get(".header > .logo > .slogan").should("be.visible")
});

Then("I should see 'Uw cookievoorkeuren' page header", () => {
  cy.get("#cookies > .modal-container > .modal-title").should("be.visible")
});

Then("I should see 'Cookies' rules", () => {
  cy.get(".modal-body").should("be.visible")
});

Then("I should see 'Accept' button", () => {
  cy.get("#confirmCookie").should("be.visible")
});

Then("I should see 'Not Accept' button", () => {
  cy.get("#rejectCookie").should("be.visible")
});

When("I should see that 'Cookies' page is displayed", () => {
    homePagePage.checkCookiesPageIsVisible();
  });
  
When("I should see that 'Cookies' page is Not displayed", () => {
    homePagePage.checkCookiesPageIsNotVisible();
  });
  
When("I should see that 'Cookies rules' is opened", () => {
    cy.get("#cookie-files > .accordion-content > div").should("be.visible")
  });
  
When("I select 'Cookie page' link on the 'Cookies' page", () => {
    cy.get(".modal-body > a").invoke('removeAttr', 'target').click();
  });

When("I press 'Cancel' button on the 'Cookies' page", () => {
    cy.get("#rejectCookie").click();
  });

When("I press 'Accept' button on the 'Cookies' page", () => {
    cy.get("#confirmCookie").click();
  });
 
When("I select 'Vacancies' sub-menu", () => {
    cy.get("/html/body/div/header/div/div[2]/nav/span[1]/ul/li[1]").click();
  });
  
When("I clear all Cookies", () => {
    cy.clearCookies();
  });
 
When("I refresh the page", () => {
    cy.reload()
  });
  
When("I wait for 3 seconds", () => {
    cy.wait(3000)
  });

When("I press 'Back' button in the Browser", () => {
    cy.go("back");
  });

When("I press 'Forward' button in the Browser", () => {
    cy.go('forward')
  });

Then("I should see that 'CookiesPage' link is correct", () => {
    cy.get(".modal-body > a")
    .should("have.attr", "href", "/nl/official-docs#cookie-files")
  });

  When("I press 'Login' button on the 'Home' page", () => {
    cy.get(".nav-bar > .login-btn").click();
  });
  
Then("I should see {string} on the 'Cookies' page", (itemCookiesPage) => {
    cy.get("itemCookiesPage").should("be.visible");
  });


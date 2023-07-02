import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HomePagePage from "../pageObjects/homePage_page.js";

const homePagePage = new HomePagePage();

import CookiesPage_selectors from "../selectors/cookiesPage_selectors";
const cookiesPage_selectors = new CookiesPage_selectors();

let cookiesPage_data; //Used as link to the fixxtures data.

before(() => {
    cy.fixture("/cookiesPage.json").then((cookiesDataFile) => {
      cookiesPage_data = cookiesDataFile;
    });
  });  

before(() => {

    cy.visit('https://bloomenty.com/nl/home');
    cy.session('cookie', () =>{});
  
  });

When("I navigate to 'Home' page", () => {
  cy.visit(cookiesPage_data.homePageURL);
});

When("I navigate to 'Vacancies' page", () => {
    cy.visit(cookiesPage_data.vacanciesPageURL);
  });

Then("I should see 'Cookies' page", () => {
    homePagePage.checkCookiesPageIsVisible();
});

Then("I should see 'your flower community' icon", () => {
  cy.get(cookiesPage_selectors.yourFlowerCommunityIcon).should("be.visible")
});

Then("I should see 'Your cookie preferences' page header", () => {
  cy.get(cookiesPage_selectors.yourCookiePreferencesPageHeader).should("be.visible")
});

Then("I should see 'Cookies' rules text", () => {
  cy.get(cookiesPage_selectors.cookiesRulesText).should("be.visible")
});

Then("I should see 'Accept' button", () => {
  cy.get(cookiesPage_selectors.acceptButton).should("be.visible")
});

Then("I should see 'Not Accept' button", () => {
  cy.get(cookiesPage_selectors.notAcceptButton).should("be.visible")
});

When("I should see that 'Cookies' page is displayed", () => {
    homePagePage.checkCookiesPageIsVisible();
  });
  
When("I should see that 'Cookies' page is Not displayed", () => {
    homePagePage.checkCookiesPageIsNotVisible();
  });
  
When("I should see that 'Cookies rules' is opened", () => {
    cy.get(cookiesPage_selectors.cookiesRules).should("be.visible")
  });
  
When("I select 'Cookie page' link on the 'Cookies' page", () => {
    cy.get(cookiesPage_selectors.cookiePageLink).invoke('removeAttr', 'target').click();
  });

When("I press 'Cancel' button on the 'Cookies' page", () => {
    cy.get(cookiesPage_selectors.cancelButtonOnCookiesPage).click();
  });

When("I press 'Accept' button on the 'Cookies' page", () => {
    cy.get(cookiesPage_selectors.acceptButtonOnCookiesPage).click();
  });
 
When("I select 'Vacancies' sub-menu", () => {
    cy.get(cookiesPage_selectors.vacanciesSubMenu).click();
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
    cy.get(cookiesPage_selectors.cookiePageLink)
    .should("have.attr", "href", "/nl/official-docs#cookie-files")
  });

  When("I press 'Login' button on the 'Home' page", () => {
    cy.get(cookiesPage_selectors.loginButtonOnHomePage).click();
  });
  
Then("I should see {string} on the 'Cookies' page", (itemCookiesPage) => {
    cy.get("itemCookiesPage").should("be.visible");
  });

// When('When I press {string} button in the Browser', (s) => {
//   // Write code here that turns the phrase above into concrete actions
// })


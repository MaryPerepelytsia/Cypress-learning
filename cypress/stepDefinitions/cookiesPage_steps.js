import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import Common_page from "../pageObjects/common_page";
import HomePagePage from "../pageObjects/homePage_page.js";
import CookiesPage_selectors from "../selectors/cookiesPage_selectors";

const common_page = new Common_page();
const homePagePage = new HomePagePage();
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

When("I press {string} button on the 'Cookies' page", (buttonName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(buttonName, "", "ButtonOnCookiesPage");
    switch (buttonName) {
        case "Accept":          
        case "Cancel":            
            cy.get(cookiesPage_selectors[selector]).click();
            break;
        default:
          throw new Error(`Unknown button name is specified: ${buttonName}`);  
  }
})
 
When("I select 'Vacancies' sub-menu", () => {
    cy.get(cookiesPage_selectors.vacanciesSubMenu).click();
  });
  
When("I clear all Cookies", () => {
    cy.clearCookies();
  });
 
When("I refresh the page", () => {
    cy.reload()
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

When("I wait for {string} seconds", (waitData) => {
    switch (waitData) {
        case "2":
            cy.wait(2000);
            break;
        case "3":
            cy.wait(3000);
            break;
        case "7":
            cy.wait(7000);
            break;
        default:
          throw new Error(`Unknown time for waiting is specified: ${waitData}`);  
  }
})


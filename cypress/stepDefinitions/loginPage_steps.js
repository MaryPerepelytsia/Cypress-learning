import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_selectors from "../selectors/loginPage_selectors";
import Common_page from "../pageObjects/common_page";

const loginPage_selectors = new LoginPage_selectors();
const common_page = new Common_page();

let loginPage_data; //Used as link to the fixxtures data.
let cookiesPage_data;

before(() => {
    cy.fixture("/cookiesPage.json").then((pageDataFile) => {
        cookiesPage_data = pageDataFile;
    });
  });  

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

Then("I should see that 'Login' page URL is correct", () => {
    cy.url().should('include','myaccount/login')
  });
  
When("I press 'Login' button on the 'Login' page", () => {
    cy.get(loginPage_selectors.loginButtonOnLoginPage).click();
  });

Then("I should see that 'Invalid email address or password!' alert is displayed", () => {
    cy.get(loginPage_selectors.invalidEmailAddressOrPassword).should("be.visible")
  });
  
Then("I should see that 'My profile' title is displayed", () => {
    cy.get(loginPage_selectors.myProfileTitle).should("be.visible")
  });

When("I fill in the 'Email' field on the 'Login' page with {string} data", (emailInputData) => {
    switch (emailInputData) {
        case "Correct":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputCorrectData.correctEmail);
            break;
        case "No symbols before At":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputIncorrectData.noSymbolsBeforeAt);
            break;
        case "No symbols after Dot":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputIncorrectData.noSymbolsAfterDot);
            break;
        case "No Dot":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputIncorrectData.noDotEmailData);
            break;
        case "No At":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputIncorrectData.noAtEmailData);
            break;
        case "Capital letters":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputCorrectData.capitalLettersEmail);
            break;
        default:
          throw new Error(`Unknown email data is specified: ${emailInputData}`);  
  }
})

When("I fill in 'Password' field on the 'Login' page with {string} data", (passwordInputData) => {
    switch (passwordInputData) {
        case "Correct":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputCorrectData);
            break;
        case "Space before Password":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputIncorrectData.spaceBeforePassword);
            break;
        case "Space after Password":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputIncorrectData.spaceAfterPassword);          
            break;
        case "Password in CapsLock":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputIncorrectData.passwordInCapsLock);
            break;
        case "Password without last symbol":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputIncorrectData.passwordWithoutLastSymbol);
            break;
        case "Password without first symbol":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputIncorrectData.passwordWithoutFirstSymbol);
            break;
        default:
          throw new Error(`Unknown Password data is specified: ${passwordInputData}`);  
  }
})

When("I navigate to {string} page", (pageURLData) => {
    switch (pageURLData) {
        case "Login":
            cy.visit(loginPage_data.URLs.loginPageURL);
            break;
        case "Home":
            cy.visit(cookiesPage_data.homePageURL);
            break;
        case "Vacancies":
            cy.visit(cookiesPage_data.vacanciesPageURL);
            break;
        case "Registration":
            cy.visit(cookiesPage_data.registrationPageURL);
            break;
        default:
          throw new Error(`Unknown page is specified: ${pageURLData}`);  
  }
})

When("I should see that {string} field is displayed", (fieldOnLoginPage) => {
    switch (fieldOnLoginPage) {
        case "Email":
            cy.get(loginPage_selectors.emailInputField).should("be.visible");
            break;
        case "Password":
            cy.get(loginPage_selectors.passwordInputField).should("be.visible");
            break;
        default:
          throw new Error(`Unknown field is specified: ${fieldOnLoginPage}`);  
  }
})










  

  

  
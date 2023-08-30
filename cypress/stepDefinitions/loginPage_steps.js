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
    const correctData = common_page.removeSpaceAndApplyCamelCase(emailInputData, "", "Email");
    const incorrectData = common_page.removeSpaceAndApplyCamelCase(emailInputData, "", "");
    cy.log("Incorrect email data = " + incorrectData)
    switch (emailInputData) {
        case "Correct":  
        case "Capital letters":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputCorrectData[correctData]);
            break;
        case "No symbols before At":            
        case "No symbols after Dot":
        case "No Dot":
        case "No At":
            common_page.typeDataForInputField(loginPage_selectors.emailInputField, loginPage_data.emailData.emailInputIncorrectData[incorrectData]);
            break;
        default:
          throw new Error(`Unknown email data is specified: ${emailInputData}`);  
  }
})

When("I fill in 'Password' field on the 'Login' page with {string} data", (passwordInputData) => {
    const incorrectData = common_page.removeSpaceAndApplyCamelCase(passwordInputData, "", "");
    switch (passwordInputData) {
        case "Correct":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputCorrectData);
            break;
        case "Space before Password":         
        case "Space after Password":  
        case "Password in Caps Lock":
        case "Password without last symbol":
        case "Password without first symbol":
            common_page.typeDataForInputField(loginPage_selectors.passwordInputField, loginPage_data.passwordData.passwordInputIncorrectData[incorrectData]);
            break;
        default:
          throw new Error(`Unknown Password data is specified: ${passwordInputData}`);  
  }
})

When("I navigate to {string} page", (pageURLData) => {
    const dataURL = common_page.removeSpaceAndApplyCamelCase(pageURLData, "", "PageURL");
    // cy.log("page URL = " + dataURL)

    switch (pageURLData) {
        case "Login":
        case "Home":
        case "Vacancies":
        case "Registration":          
            cy.visit(cookiesPage_data[dataURL]);
            break;
        default:
          throw new Error(`Unknown page is specified: ${pageURLData}`);  
  }
})

When("I should see that {string} field is displayed", (fieldOnLoginPage) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(fieldOnLoginPage, "", "InputField");
    // cy.log("selector of input field = " + selector)

    switch (fieldOnLoginPage) {
        case "Email":
        case "Password":
            cy.get(loginPage_selectors[selector]).should("be.visible");
            break;
        default:
          throw new Error(`Unknown field is specified: ${fieldOnLoginPage}`);  
  }
})










  

  

  
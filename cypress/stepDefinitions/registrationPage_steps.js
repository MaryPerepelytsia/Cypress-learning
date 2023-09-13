import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_selectors from "../selectors/loginPage_selectors";
import RegistrationPage_selectors from "../selectors/registrationPage_selectors";
import Common_page from "../pageObjects/common_page";

const loginPage_selectors = new LoginPage_selectors();
const registrationPage_selectors = new RegistrationPage_selectors();
const common_page = new Common_page();

let loginPage_data; //Used as link to the fixtures data.
let cookiesPage_data;
let registrationPage_data;

before(() => {
    cy.fixture("/registrationPage.json").then((registrationInputFieldsDataFile) => {
        registrationPage_data = registrationInputFieldsDataFile;
    });
  }); 

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

When("I fill in the {string} field on the 'Registration' page with Correct data", (inputFieldName) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(inputFieldName, "", "FieldForRegistration");
    const subArray = common_page.removeSpaceAndApplyCamelCase(inputFieldName, "correct", "Data");
    const array = common_page.removeSpaceAndApplyCamelCase(inputFieldName, "", "Data");

    // cy.log("Selector = " + selector + "; Sub Array = " + subArray + "; Array = " + array)

    switch (inputFieldName) {
        case "Nick Name":         
        case "First Name":
        case "Last Name":
            var rnd = common_page.getRandomIndexValueForArray(registrationPage_data[array][subArray]);
  
            cy.log("Моё rnd = " + rnd +
              " Это вот такое значение из нашего массива: " + registrationPage_data.lastNameData.correctLastNameData[rnd])
          
            common_page.typeDataForInputField(registrationPage_selectors[selector], registrationPage_data[array][subArray][rnd]);
            break;
        default:
          throw new Error('Unknown input field name is specified: ${inputFieldName}');  
  }
});

Then("I should see that Placeholders are correct for all input fields on the 'Registration' page", () => {
   for (let i = 0; i < registrationPage_data.placeholdersData.placeholdersInputFields.length; i++) {
   
    const selector = registrationPage_data.placeholdersData.placeholdersSelectors[i];
    const expectedPlaceholders = registrationPage_data.placeholdersData.placeholdersInputFields[i];

    cy.log("i = " + i)
    cy.log("selector = " + selector)
    cy.log("expectedPlaceholders = " + expectedPlaceholders)

    cy.get(registrationPage_selectors[selector])
      .should("have.attr", "placeholder")
      .and("equal", expectedPlaceholders);
   }
  });

Then("I accept all registration rules", () => {
    for (let i = 0; i < registrationPage_data.checkBoxData.length; i++) {
     const selector = registrationPage_data.checkBoxData[i];
     cy.log("selector = " + selector)

     cy.get(registrationPage_selectors[selector]).click();
     }
});
 
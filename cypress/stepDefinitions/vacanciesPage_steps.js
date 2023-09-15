import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
// import LoginPage_selectors from "../selectors/loginPage_selectors";
import VacanciesPage_selectors from "../selectors/vacanciesPage_selectors";
// import Common_page from "../pageObjects/common_page";

// const loginPage_selectors = new LoginPage_selectors();
const vacanciesPage_selectors = new VacanciesPage_selectors();
// const common_page = new Common_page();

// let loginPage_data; //Used as link to the fixtures data.
let cookiesPage_data;
let vacanciesPage_data;

// before(() => {
//     cy.fixture("/registrationPage.json").then((registrationInputFieldsDataFile) => {
//         registrationPage_data = registrationInputFieldsDataFile;
//     });
//   }); 

before(() => {
    cy.fixture("/cookiesPage.json").then((pageDataFile) => {
        cookiesPage_data = pageDataFile;
    });
  });  

before(() => {
    cy.fixture("/vacanciesPage.json").then((vacanciesDataFile) => {
      vacanciesPage_data = vacanciesDataFile;
    });
  });  

before(() => {

    // cy.visit('https://bloomenty.com/nl/home');
    cy.session('cookie', () =>{});
  });

Then("I should see that the data for 'Vacancies' dropdown are correct", () => {
    for (let i = 0; i < vacanciesPage_data.vacanciesDropdownData.length; i++) {
     const dropdownData = vacanciesPage_data.vacanciesDropdownData[i];
     
    //  cy.log("selector = " + selector)
    //  cy.log("inputData = " + inputData)

    cy.get(vacanciesPage_selectors.vacanciesDropdown).contains(dropdownData);
    }
});

 
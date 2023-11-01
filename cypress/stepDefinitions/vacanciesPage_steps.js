import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import VacanciesPage_selectors from "../selectors/vacanciesPage_selectors";
// import Common_page from "../pageObjects/common_page";

const vacanciesPage_selectors = new VacanciesPage_selectors();
// const common_page = new Common_page();

let cookiesPage_data;
let vacanciesPage_data;

before(() => {
    cy.fixture("/cookiesPage.json").then((pageDataFile) => {
        cookiesPage_data = pageDataFile;
    });
    cy.fixture("/vacanciesPage.json").then((vacanciesDataFile) => {
        vacanciesPage_data = vacanciesDataFile;
      });
  });  

Then("I should see that the data for 'Vacancies' dropdown are correct", () => {
    for (let i = 0; i < vacanciesPage_data.vacanciesDropdownData.length; i++) {
     const dropdownData = vacanciesPage_data.vacanciesDropdownData[i];
     
    //  cy.log("selector = " + selector)
    //  cy.log("inputData = " + inputData)

    cy.get(vacanciesPage_selectors.vacanciesDropdown).contains(dropdownData);
    }
});

 
import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import HeaderPage_selectors from "../selectors/headerPage_selectors";
import Common_page from "../pageObjects/common_page";

const header_selectors = new HeaderPage_selectors();
const common_page = new Common_page();

// let vacanciesPage_data;

// before(() => {
//     cy.fixture("/registrationPage.json").then((registrationInputFieldsDataFile) => {
//         registrationPage_data = registrationInputFieldsDataFile;
//     });
//   }); 

When("I select {string} sub-menu from Header", (subMenuName) => {
    const subMenuSelector = common_page.removeSpaceAndApplyCamelCase(subMenuName, "", "SubMenu");
  
    cy.get(header_selectors[subMenuSelector]).click({force: true});
  });


 
import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
// import LoginPage_selectors from "../selectors/loginPage_selectors";
// import VacanciesPage_selectors from "../selectors/vacanciesPage_selectors";
// import Common_page from "../pageObjects/common_page";

// const loginPage_selectors = new LoginPage_selectors();
// const vacanciesPage_selectors = new VacanciesPage_selectors();
// const common_page = new Common_page();

// let loginPage_data; //Used as link to the fixtures data.
// let cookiesPage_data;
// let vacanciesPage_data;


// let commonPage_data;

// before(() => {
//     cy.fixture("/commonPage.json").then((pageNameData) => {
//         commonPage_data = pageNameData;
//     });
//   }); 



// before(() => {
//     cy.fixture("/cookiesPage.json").then((pageDataFile) => {
//         cookiesPage_data = pageDataFile;
//     });
//     cy.fixture("/vacanciesPage.json").then((vacanciesDataFile) => {
//         vacanciesPage_data = vacanciesDataFile;
//       });
//     cy.session('cookie', () =>{});
//   });  


// When("I should see that BreadCrumb is {string} for {string} page", (presence, pageName) => {
//     let pageName = commonPage_data.pageNameData(pageName);
//     switch (presence) {
//       case "Displayed":
//         // let pageName = commonPage_data.pageNameData(pageName);
//             cy.get(".breadcrumb").should("be.visible").should("contain", pageName);
//         break;
//       case "Not displayed":
//         cy.get(".breadcrumb").should("not.exist");
//         break;
//       default:
//         throw new Error(`Unknown presence status is specified: ${presence}`);
//     }
//   });
 
import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import FarmersPage_selectors from "../selectors/farmersPage_selectors";
import Common_page from "../pageObjects/common_page";

const farmersPage_selectors = new FarmersPage_selectors();
const common_page = new Common_page();

When("I should see that {string} element is {string} for 'Farmer' form", (elementName, status) => {
    const selector = common_page.removeSpaceAndApplyCamelCase(elementName, "", "FarmerForm");
    switch (status) {
      case "Disabled":
        cy.get(farmersPage_selectors[selector]).should("have.attr", "disabled")
        break;
      case "Enabled":
        cy.get(farmersPage_selectors[selector]).should("not.have.attr", "disabled")
        break;
      default:
        throw new Error(`Unknown availability status is specified: ${status}`);
    }
  });

//   When("I click {string} for 'Country' radiobutton", (radioButtonName) => {
//     switch (radioButtonName) {
//         case "Ja":
//             cy.get(farmerForm_selectors.jaRadioButton).click();
//             break;
//         case "Nee":
//             cy.get(farmerForm_selectors.neeRadioButton).click();
//             break;
//         default:
//             throw new Error(`Unknown radiobutton name is specified: ${radioButtonName}`);
//     }
// });

When("I click {string} radiobutton for {string} section", (radioButtonName, sectionName) => {
    switch (sectionName) {
      case "Supply":
        switch (radioButtonName) {
            case "Yes":
                cy.get(farmersPage_selectors.jaRBSupply).click();
                break;
            case "No":
                cy.get(farmersPage_selectors.neeRBSupply).click();
                break;
            default:
                throw new Error(`Unknown radiobutton name is specified: ${radioButtonName}`);
        }
        break;
      case "Sales market":
        switch (radioButtonName) {
            case "Yes":
                cy.get(farmersPage_selectors.jaRBSalesMarket).click();
                break;
            case "No":
                cy.get(farmersPage_selectors.neeRBSalesMarket).click();
                break;
            default:
                throw new Error(`Unknown radiobutton name is specified: ${radioButtonName}`);
        }       
      break;
      case "Become blogger":
        switch (radioButtonName) {
            case "Yes":
                cy.get(farmersPage_selectors.jaRBBecomeBlogger).click();
                break;
            case "No":
                cy.get(farmersPage_selectors.neeRBBecomeBlogger).click();
                break;
            default:
                throw new Error(`Unknown radiobutton name is specified: ${radioButtonName}`);
        }
        break;
      default:
        throw new Error(`Unknown section name is specified: ${sectionName}`);
    }
  });
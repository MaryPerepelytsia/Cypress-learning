import {Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import FarmersPage_selectors from "../selectors/farmersPage_selectors";
import Common_page from "../pageObjects/common_page";

const farmersPage_selectors = new FarmersPage_selectors();
const common_page = new Common_page();

When("I should see that {string} input field is {string} for 'Farmer' form", (inputFieldName, status) => {
    switch (status) {
      case "Disabled":
        cy.get(farmersPage_selectors.countryInpitField).should("have.attr", "disabled")
        break;
      case "Enabled":
        cy.get(farmersPage_selectors.countryInpitField).should("not.have.attr", "disabled")
        break;
      default:
        throw new Error(`Unknown availability status is specified: ${status}`);
    }
  });

// When("I click {string} for 'Country' radiobutton", (radioButtonName) => {
//     const selector = common_page.removeSpaceAndApplyCamelCase(radioButtonName, "", "RadioButtonForSupply");
//     switch (radioButtonName) {
//       case "Ja":       
//       case "Nee":            
//           cy.get(farmersPage_selectors[selector]).click();
//           break;
//       default:
//         throw new Error(`Unknown radiobutton name is specified: ${radioButtonName}`);  
// }
// })

Then("I click 'Ja' for 'Country' radiobutton", () => {
    cy.get(farmersPage_selectors.jaRadioButtonForSupply).click()
  });

Then("I click 'Nee' for 'Country' radiobutton", () => {
    cy.get(farmersPage_selectors.neeRadioButtonForSupply).click()
  });
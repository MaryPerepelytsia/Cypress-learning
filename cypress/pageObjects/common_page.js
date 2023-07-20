export default class Common_page {

    typeDataForInputField(selector, jsonData) {
        cy.get(selector).clear().type(jsonData)
      }
      
  }
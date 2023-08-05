export default class Common_page {

    typeDataForInputField(selector, jsonData) {
        cy.get(selector).clear().type(jsonData)
      }
      
    getRandomIndexValueForArray(array) {
        return Math.floor(Math.random() * array.length);
      }
  }
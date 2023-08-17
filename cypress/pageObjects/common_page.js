export default class Common_page {

    typeDataForInputField(selector, jsonData) {
        cy.get(selector).clear().type(jsonData)
      }
      
    getRandomIndexValueForArray(array) {
        return Math.floor(Math.random() * array.length);
      }
      
      removeSpaceAndApplyCamelCase(input, prefix = "", suffix = "") {
        const parts = input.split(" ");
        let output = prefix;
    
        if (output.length > 0) {
          output +=
            parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();
        } else {
          output += parts[0].toLowerCase();
        }
    
        if (parts.length > 1) {
          for (let x = 1; x < parts.length; x++) {
            output +=
              parts[x].charAt(0).toUpperCase() + parts[x].slice(1).toLowerCase();
          }
        }
    
        output += suffix;
    
        return output;
      }
  }
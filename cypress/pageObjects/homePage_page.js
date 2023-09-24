export default class HomePagePageObj {

    checkCookiesPageIsVisible() {
      cy.get("#cookies").should("be.visible")
    }
  
    checkCookiesPageIsNotVisible() {
      cy.get("#cookies").should("not.be.visible")
    }
  
    checkCookiesPageVisibility(status) {
        if (status == true) {
          cy.get("#cookies").should("be.visible");
        } else {
          cy.get("#cookies").should("not.be.visible");
        }
      }
  }
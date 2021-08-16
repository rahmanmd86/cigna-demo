/// <reference types="cypress" />

const logo = 'a#nava img'

class Homepage {

    visit() {
        cy.visit(Cypress.config().baseUrl);
    }

    getLogo() {
        return cy.get(logo)
    }

}

export default Homepage;


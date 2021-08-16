/// <reference types="cypress" />

describe('Homepage', () => {
    before(() => {
        cy.visit(Cypress.config().baseUrl);
    });

    it('displays brand icon', () => {
        cy.get('a#nava img').should('be.visible');
    });

    


});
/// <reference types="cypress" />

import Homepage from '../../pages/Homepage.js'

const homepage = new Homepage();

describe('Homepage', () => {
    before(() => {
        homepage.visit();
    });

    it('displays brand icon', () => {
        homepage.getLogo().should('be.visible');
    });

});
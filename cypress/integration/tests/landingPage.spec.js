/// <reference types="cypress" />

import { LandingPage } from '../../pages/landingPage.js';
import { ContactModal } from '../../pages/contactModal.js';
const landingPage = new LandingPage();
const contactModal = new ContactModal();

describe('Tests for landing page', () => {
    before(() => {
        landingPage.visit();
    });

    it('verify displays brand icon', () => {
        landingPage.logo().should('be.visible');
    });

    // Unable to find the proper texts
    it.skip('verify displays navigation links', () => {
        const links = landingPage.navigationLinks()
        const expectedLinks = ['Home', 'Contact', 'About us', 'Cart', 'Log in', 'Sign up']

        for(let i=0 ; i < (expectedLinks.length - 1); i++) {
            links.eq(i).should('contain.text', expectedLinks[i]);
        }
    })

    it('match snapshots for phones', () => {
        landingPage.categories('Phones').click();
        cy.screenshot()
        cy.matchImageSnapshot('phonesSnapshot.png');
    })

    it('verify contact link shows modal', () => {
        landingPage.navigationLinks().eq(1).click();
        landingPage.navLinkModal('Contact').should('be.visible');
        contactModal.title().should('be.visible');
        contactModal.close().should('be.visible');
    })

});
/// <reference types="cypress" />

export class LandingPage {

    visit() {
        cy.visit("/");
    }

    logo() {
        return cy.get(`a[id=nava]`)
    }

    navigationLinks() {
        return cy.get(`a[class='nav-link']`)
    }

    navLinkModal(modal) {
        let linkModal = this.navigationLinks().eq(0);
        if (modal == 'Home') linkModal = this.navigationLinks().eq(0);
        if (modal == 'Contact') linkModal = this.navigationLinks().eq(1);
        if (modal == 'About us') linkModal = this.navigationLinks().eq(2);
        if (modal == 'Log in') linkModal = this.navigationLinks().eq(4);
        if (modal == 'Sign up') linkModal = this.navigationLinks().eq(7);

        return linkModal;
    }

    categories(type) {
        return cy.contains(type);
    }

}


/// <reference types="cypress" />

import {LOGO, NAV_LINKS, ITEMS} from '../constants/landingPageConstants';

export class LandingPage {

    visit() {
        cy.visit("/");
    }

    logo() {
        return cy.get(LOGO);
    }

    navigationLinks(link) {
        return cy.get(link);
    }

    categories(type) {
        return cy.contains(type);
    }

    clickCategories(type) {
        return cy.get(type).click();
    }

    items() {
        return cy.get(ITEMS)
    }

}


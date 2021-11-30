/// <reference types="cypress" />

import {LOGO, NAV_LINKS} from '../constants/landingPageConstants';
import { ADD_TO_CART, PRODUCT } from '../constants/productPageConstants';

export class ProductPage {

    visit(id) {
        cy.visit(`prod.html?idp_=${id}`)
    }

    name() {
        return cy.get(PRODUCT.NAME)
    }

    price() {
        return cy.get(PRODUCT.PRICE)
    }

    description() {
        return cy.get(PRODUCT.DESCRIPTION)
    }

    addToCart() {
        return cy.get(ADD_TO_CART)
    }

}


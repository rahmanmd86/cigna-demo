/// <reference types="cypress" />

const { PRODUCTS } = require("../constants/cartPageConstants");

class CartPage {
    visit() {
        cy.visit("/cart.html");
    }

    products() {
        return cy.get(PRODUCTS.ALL)
    }
}

module.exports = {
    CartPage
}
/// <reference types="cypress" />

let faker = require('faker');

import { LandingPage } from '../../pages/landingPage';
import { CartPage } from '../../pages/cartPage';
import { ProductPage } from '../../pages/productPage';
import { has } from 'lodash';
const landingPage = new LandingPage();
const cartPage = new CartPage();
const productPage = new ProductPage();

describe('Tests for cart', () => {
    before(() => {
        landingPage.visit();
    });

    it.only('user is able to add an item to the cart', () => {
        // TODO: Add item via api
        // const body = 
        // {
        //     id: `${faker.datatype.uuid}`,
        //     cookie:`user=${faker.datatype.uuid}`,
        //     prod_id: 1,
        //     flag: false
        // }
        // cy.request('POST', 'https://api.demoblaze.com/addtocart', body)
        // .then(response => {
        //     expect(response.status).to.eq(200)
        // })
        // cartPage.visit();
        // cy.wait(2000)
        // cartPage.products().should('have.length', 1)

        landingPage.items().eq(0).click();
        productPage.addToCart().click();
        cy.wait(2000)
        cartPage.visit();
        cy.wait(2000)
        cartPage.products().should('have.length', 1);

    })

    // TODO:
    it.skip('user is able to delete an item from the cart')

    // TODO:
    it.skip('user is able to purchase an item added to the cart')
})
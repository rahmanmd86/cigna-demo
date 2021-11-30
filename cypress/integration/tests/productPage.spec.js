/// <reference types="cypress" />

import { LandingPage } from '../../pages/landingPage';
import { ProductPage } from '../../pages/productPage';
import { CATEGORIES } from '../../constants/landingPageConstants';
const landingPage = new LandingPage();
const productPage = new ProductPage();

describe('Tests for product view', () => {
    before(() => {
        landingPage.visit();
    });

    it('verify selecting a product returns product details', () => {
        landingPage.clickCategories(CATEGORIES.PHONES);
        cy.wait(2000)
        landingPage.items().eq(0).click();
        cy.intercept('POST', '/view').as('product')
        cy.wait('@product').then(({response}) => {
            expect(response.statusCode).to.eq(200);
            expect(response.body.title).to.eq("Samsung galaxy s6");
        })
    });

})
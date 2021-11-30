/// <reference types="cypress" />

let faker = require('faker');

import { LandingPage } from '../../pages/landingPage';
import { SignupModal, ContactModal, LoginModal } from '../../pages/navigationModal';
import { LOGIN_MODAL, SIGN_UP_MODAL } from '../../constants/navigationModalConstants';
import { CATEGORIES, NAV_LINKS } from '../../constants/landingPageConstants';

const landingPage = new LandingPage();
const contactModal = new ContactModal();
const signupModal = new SignupModal();
const loginModal = new LoginModal();

describe('Tests for landing page', () => {
    before(() => {
        landingPage.visit();
    });

    it('verify displays brand icon', () => {
        landingPage.logo().should('be.visible');
    });

    // TODO: Validate links are visible, 
    // const expectedLinks = ['Home', 'Contact', 'About us', 'Cart', 'Log in', 'Log out', '', 'Sign up']
    // expectedLinks.forEach((link, index) => {
    //     it(`verify displays navigation link ${link}`, () => {
    //         const links = landingPage.navigationLinks(NAV_LINKS.ALL)
    //         links.eq(index).should('contain.text', link);
    //     })
    // })
    

    // TODO: Probably not needed
    it.skip('match snapshots for phones', () => {
        landingPage.categories('Phones').click();
        cy.screenshot()
        cy.matchImageSnapshot('phonesSnapshot.png');
    })

    it('verify contact link shows modal', () => {
        landingPage.navigationLinks(NAV_LINKS.CONTACT).click();
        contactModal.title().should('be.visible');
        contactModal.close().should('be.visible');
    })

});

describe('Tests for categories on landing page', () => {
    before(() => {
        landingPage.visit();
    });

    it('verify proper count for all categories', () => {
        landingPage.clickCategories(CATEGORIES.ALL);
        landingPage.items().should('have.length', 9)
    });

    it('verify proper count for phone categories', () => {
        landingPage.clickCategories(CATEGORIES.PHONES);
        landingPage.items().should('have.length', 7)
    });

    it('verify proper count for laptop categories', () => {
        landingPage.clickCategories(CATEGORIES.LAPTOPS);
        landingPage.items().should('have.length', 6);
    });

    it('verify proper count for monitor categories', () => {
        landingPage.clickCategories(CATEGORIES.MONITORS);
        landingPage.items().should('have.length', 2);
    });
});

describe('Tests for sign up', () => { 
    before(() => {
        landingPage.visit();
    });

    it('new user can sign up with valid username and password', () => {
        landingPage.navigationLinks(NAV_LINKS.SIGN_UP).click();
        cy.wait(2000);
        const username = `${faker.name.firstName().toLowerCase()}${faker.address.zipCode().substring(0,5)}`;
        const password = faker.internet.password();
        cy.log(`Entering username: ${username} and password: ${password}`)
        signupModal.username().clear().type(username);
        signupModal.password().clear().type(password);
        signupModal.modalAction(SIGN_UP_MODAL.SIGN_UP).click();
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
        });
        cy.on('window:confirm', () => true);
        cy.wait(2000);
    });

    it('user cannot sign up with existing username and password', () => {
        landingPage.navigationLinks(NAV_LINKS.SIGN_UP).click();
        cy.wait(2000);
        const username = 'blah1'
        const password = 'blah1'
        cy.log(`Entering username: ${username} and password: ${password}`);
        signupModal.username().clear().type(username);
        signupModal.password().clear().type(password);
        signupModal.modalAction(SIGN_UP_MODAL.SIGN_UP).click();
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('This user already exist.');
        });
        cy.on('window:confirm', () => true);
        cy.wait(2000);
        signupModal.close().click();
    });


    // Cypress does not allow to enter empty string, skipping
    it.skip('user cannot sign up with empty username and/or empty password', () => {
        landingPage.navigationLinks(NAV_LINKS.SIGN_UP).click();
        cy.wait(2000);
        const username = `${faker.name.firstName().toLowerCase()}${faker.address.zipCode().substring(0,5)}`;
        const password = ''
        cy.log(`Entering username: ${username} and password: ${password}`)
        signupModal.username().clear().type(username);
        signupModal.password().clear().type(password);
        signupModal.modalAction(SIGN_UP_MODAL.SIGN_UP).click();
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.'); 
        });
        cy.on('window:confirm', () => true);
        cy.wait(2000);
        signupModal.close().click();
    });
})

describe('Tests for user log in', () => {
    const username = `${faker.name.firstName().toLowerCase()}${faker.address.zipCode().substring(0,5)}`;
    const password = faker.internet.password();
    before(() => {
        landingPage.visit();
        cy.wait(2000);
        // TODO: Use api to create new user
        // cy.log(`Entering username: ${username} and password: ${password}`);
        // cy.request('POST', 'https://api.demoblaze.com/signup', {"username": `${username}`, "password": `${password}`})
        // .then(response => {
        //     expect(response.status).to.eq(200);
        // })
        landingPage.navigationLinks(NAV_LINKS.SIGN_UP).click();
        cy.wait(2000);
        cy.log(`Entering username: ${username} and password: ${password}`)
        signupModal.username().clear().type(username);
        signupModal.password().clear().type(password);
        signupModal.modalAction(SIGN_UP_MODAL.SIGN_UP).click();
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Sign up successful.');
        });
        cy.on('window:confirm', () => true);
        cy.wait(2000);
    });

    it('user can log in with valid username and password', () => {
        landingPage.navigationLinks(NAV_LINKS.LOG_IN).click();
        cy.wait(2000);
        loginModal.username().clear().type(username);
        loginModal.password().clear().type(password);
        loginModal.modalAction(LOGIN_MODAL.LOG_IN).click();
        cy.wait(2000);
        landingPage.navigationLinks(NAV_LINKS.NAME_OF_USER).should('contain.text', username);
        landingPage.navigationLinks(NAV_LINKS.LOG_OUT).should('be.visible');
        landingPage.navigationLinks(NAV_LINKS.LOG_OUT).click();
        cy.wait(2000)
    });

    it('user cannot log in with invalid username and valid password', () => {
        landingPage.navigationLinks(NAV_LINKS.LOG_IN).click();
        cy.wait(2000);
        let user = `${faker.name.firstName().toLowerCase()}${faker.address.zipCode().substring(0,5)}`;
        cy.log(`Invalid user: ${user}`);
        loginModal.username().clear().type(user);
        loginModal.password().clear().type(password);
        loginModal.modalAction(LOGIN_MODAL.LOG_IN).click();
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('User does not exist.');
        });
        cy.on('window:confirm', () => true);
        loginModal.close().click(); 
    });

    it('user cannot log in with valid username and invalid password', () => {
        landingPage.navigationLinks(NAV_LINKS.LOG_IN).click();
        cy.wait(2000);
        loginModal.username().clear().type(username);
        loginModal.password().clear().type('wrongpassword');
        loginModal.modalAction(LOGIN_MODAL.LOG_IN).click();
        cy.wait(2000);
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Wrong password.');
        });
        cy.on('window:confirm', () => true);
        loginModal.close().click(); 
    });

})


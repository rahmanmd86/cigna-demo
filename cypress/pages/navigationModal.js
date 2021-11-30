/// <reference types="cypress" />

import { CONTACT_MODAL, LOGIN_MODAL, SIGN_UP_MODAL } from "../constants/navigationModalConstants";

class LoginModal {

    username() {
        return cy.get(LOGIN_MODAL.USERNAME);
    }

    password() {
        return cy.get(LOGIN_MODAL.PASSWORD);
    }

    modalAction(action) {
        return cy.get(action);
    }

    close() {
        return cy.get(LOGIN_MODAL.CLOSE);
    }
}

class SignupModal {

    username() {
        return cy.get(SIGN_UP_MODAL.USERNAME);
    }

    password() {
        return cy.get(SIGN_UP_MODAL.PASSWORD);
    }

    modalAction(action) {
        return cy.get(action);
    }

    close() {
        return cy.get(SIGN_UP_MODAL.CLOSE);
    }
}

class ContactModal {

    title() {
        return cy.get(CONTACT_MODAL.TITLE);
    }

    close() {
        return cy.get(CONTACT_MODAL.CLOSE);
    }


}

module.exports = {
    LoginModal,
    SignupModal,
    ContactModal
}
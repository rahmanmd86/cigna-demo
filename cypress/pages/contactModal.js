export class ContactModal {

    title() {
        return cy.get('#exampleModalLabel');
    }

    close() {
        return cy.get('#exampleModal > div > div > div > button.close');
    }


}
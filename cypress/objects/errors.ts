/// <reference types="Cypress" />



class Errors {
    private selector: string;

    constructor(selector:string) {
        this.selector = selector;
    }

    getElement() {
        return cy.get(this.selector);
    }
}
export default Errors;
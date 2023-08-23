/// <reference types="Cypress" />



class Inputs {
    private selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    getInput() {
        return cy.get(this.selector).type('text')
    }
}
export default Inputs;
/// <reference types="Cypress" />



class Buttons {
    private selector: string;

    constructor(selector:string) {
        this.selector = selector;
    }

    getClick() {
        return cy.get(this.selector).click();
    }

    getText() {
        return cy.get(this.selector).invoke('text');
    }

    getElement() {
        return cy.get(this.selector);
    }

}
export default Buttons;
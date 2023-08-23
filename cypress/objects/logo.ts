/// <reference types="Cypress" />


class Logo {
    private selector: string;

    constructor(selector:string) {
        this.selector = selector;
    }

    getClick() {
        cy.get(this.selector).click();
    }

    getElement() {
        return cy.get(this.selector);
    }
    
}
export default Logo;

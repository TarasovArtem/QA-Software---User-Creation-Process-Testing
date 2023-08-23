/// <reference types="Cypress" />



class PageHeaders {
    private selector: string;

    constructor(selector:string) {
        this.selector = selector;
    }
    
    getText() {
        return cy.get(this.selector).invoke('text');
    }

    getElement() {
        return cy.get(this.selector);
    }
}
export default PageHeaders;
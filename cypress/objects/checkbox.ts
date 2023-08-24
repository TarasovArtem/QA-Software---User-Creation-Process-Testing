/// <reference types="Cypress" />



class CheckBox {
    private selector: string;

    constructor(selector:string) {
        this.selector = selector;
    }

    getCheck() {
        return cy.get(this.selector).click();
    }

    

}
export default CheckBox;
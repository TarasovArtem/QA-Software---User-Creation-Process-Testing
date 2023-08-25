/// <reference types="Cypress" />



class UserTable{
    private selector: string;

    constructor(selector:string) {
        this.selector = selector;
    }

    getUserTable() {
        return cy.get(this.selector);
    }   
}
export default UserTable;
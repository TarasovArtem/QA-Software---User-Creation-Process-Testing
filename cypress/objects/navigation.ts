/// <reference types="Cypress" />


class Navigation {

    userPage() {
        cy.visit('/user');
        
    }

    createUserPage() {
        cy.visit('/create')
    }
}
export default Navigation;
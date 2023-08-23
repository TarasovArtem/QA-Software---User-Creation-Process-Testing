


class Navigation {
    
    mainPage() {
        return cy.visit('/');
    }

    userPage() {
        return cy.visit('/user')
    }

    createUserPage() {
        return cy.visit
    }
}
export default Navigation;
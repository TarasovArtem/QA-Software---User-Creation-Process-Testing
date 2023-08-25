/// <reference types="Cypress" />

import Buttons from "../../../objects/buttons";
import Navigation from "../../../objects/navigation";
import Logo from '../../../objects/logo';
import PageHeaders from '../../../objects/pageHeaders';
import UserTable from '../../../objects/userTable';





describe("Test of User Overview page",() => {
    const createNewUser = 'button';
    const logoXcnt = 'a'
    const headers = 'h1'
    const user_Table = '.table'
    const navigation = new Navigation();   
    const logo = new Logo(logoXcnt);
    const pageHeaders = new PageHeaders(headers);
    const buttons = new Buttons(createNewUser);
    const userTable = new UserTable(user_Table)

    beforeEach(() => {
        navigation.userPage();
    })

    it("Should show the User Overview page with all components without Users", () => {
        
        logo.getElement().should('have.attr', 'href', '/user');
        pageHeaders.getElement().should('contain.text', 'User Overview');
        buttons.getElement().should('contain.text', 'Create User')
        .should('exist')
        .then(($buttonCreateUser) => {
            if(!$buttonCreateUser) {
                throw new Error('Element not found on the page');
            }
        });;
        userTable.getUserTable().should('exist')
            .then(($userTable) => {
                if(!$userTable) {
                    throw new Error('Element not found on the page');
                }
            });
    })
})
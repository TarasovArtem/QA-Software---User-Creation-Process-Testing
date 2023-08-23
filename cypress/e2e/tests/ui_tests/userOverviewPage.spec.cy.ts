/// <reference types="Cypress" />

import Buttons from "../../../objects/buttons";
import Navigation from "../../../objects/navigation";
import Logo from '../../../objects/logo';
import PageHeaders from '../../../objects/pageHeaders';




describe("Test of User Overview page",() => {
    const createNewUser = 'button';
    const logoXcnt = 'a'
    const headers = 'h1'
    const navigation = new Navigation();
    const logo = new Logo(logoXcnt);
    const pageHeaders = new PageHeaders(headers);
    const buttons = new Buttons(createNewUser);

    beforeEach(() => {
        navigation.mainPage();
    })

    it("Should show the User Overview page with all components", () => {
        logo.getElement().should('have.attr', 'href', '/user');
        pageHeaders.getElement().should('contain.text', 'User Overview');
        buttons.getElement().should('contain.text', 'Create User');
        buttons.getClick();
    })
})
/// <reference types="Cypress" />

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
import Buttons from "../../../objects/buttons";
import Navigation from "../../../objects/navigation";
import Inputs from '../../../objects/inputs';
import CheckBox from '../../../objects/checkbox';
import Errors from '../../../objects/errors';



describe("Create User Page",() => {

    const navigation = new Navigation();
    const buttons = new Buttons('button');
    const inputs = new Inputs('input');
    const checkBox = new CheckBox('.mat-checkbox-inner-container');
    const errors = new Errors('mat-error');
    
    beforeEach(() => {
        navigation.mainPage();
    })

    it("Should create a user after filling in all fields", () => {
        buttons.getClick();
        inputs.getInput().eq(0).type('Agent');
        inputs.getInput().eq(1).type('007');
        inputs.getInput().eq(2).type('newUser@xcnt.com');
        checkBox.getCheck();
        buttons.getClick();

    })

    it("Should create a user after filling only two fields", () => {
        buttons.getClick();
        inputs.getInput().eq(0).type('Agent');
        inputs.getInput().eq(1).type('007');
        checkBox.getCheck();
        //buttons.getClick();
        errors.getElement().should('contain.text', 'Email is required.')
        addMatchImageSnapshotCommand();
    })

})
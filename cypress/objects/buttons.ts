



class Buttons {
    private selector: string;

    constructor(selector:string) {
        this.selector = selector;
    }

    getClick() {
        cy.get(this.selector).click();
    }

    getText() {
        return cy.get(this.selector).invoke('text');
    }

}
export default Buttons;
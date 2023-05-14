import BasePage from "./base.page";

class SelectablePage extends BasePage {

    static get url(){
        return "/selectable";
    }

    static get clickGrid(){
        return cy.get("#demo-tab-grid");
    }

    static get checkboxTitles(){
        return cy.get(".list-group-item");
    }
} 

export default SelectablePage;
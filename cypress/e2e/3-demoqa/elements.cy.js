import SelectablePage from "../../pageObjects/selectable.page";

describe("Elements", () => {
    context("Selectable Scenarios", () => {
        beforeEach(() => {
            SelectablePage.visit();
        });

        it("Positive", () => {
        // b. Click “Grid”
        SelectablePage.clickGrid.click();

        // c. Click - “Two”, “Four”, “Six”, “Eight”
        SelectablePage.checkboxTitles.contains("Two").click();
        SelectablePage.checkboxTitles.contains("Four").click();
        SelectablePage.checkboxTitles.contains("Six").click();
        SelectablePage.checkboxTitles.contains("Eight").click();

        // d. Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
        SelectablePage.checkboxTitles.contains("Two").should("have.class", "active");
        SelectablePage.checkboxTitles.contains("Four").should("have.class", "active");
        SelectablePage.checkboxTitles.contains("Six").should("have.class", "active");
        SelectablePage.checkboxTitles.contains("Eight").should("have.class", "active");

        // e. Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
        SelectablePage.checkboxTitles.contains("One").should("not.have.class", "active");
        SelectablePage.checkboxTitles.contains("Three").should("not.have.class", "active");
        SelectablePage.checkboxTitles.contains("Five").should("not.have.class", "active");
        SelectablePage.checkboxTitles.contains("Seven").should("not.have.class", "active");
        SelectablePage.checkboxTitles.contains("Nine").should("not.have.class", "active");

        });
    });

});
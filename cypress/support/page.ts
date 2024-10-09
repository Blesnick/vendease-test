export class HomePage {
  static visit(url: string) {
    cy.visit(url);
  }

  static clickElementByText(text: string) {
    cy.contains(text).click();
  }

  static clickElementByTextForce(text: string) {
    cy.contains(text).click({ force: true });
  }
  static wait(milliseconds: number) {
    cy.wait(milliseconds);
  }

  static validateHomePageElements() {
    // Implement your logic to validate homepage elements
  }
}

export class ProductPage {
  static clickElementBySelector(el: string, options?: Cypress.ClickOptions) {
    cy.get(el).click(options);
  }

  static seeText(text: string) {
    cy.contains(text).should("be.visible");
  }
  static seeSelector(el: string) {
    cy.get(el).should("be.visible");
  }

  static clickNthChildElement(
    elementNumber: number,
    el: string,
    options?: Cypress.ClickOptions
  ) {
    cy.get(el)
      .eq(elementNumber - 1)
      .invoke("removeAttr", "target")
      .click();
  }
}

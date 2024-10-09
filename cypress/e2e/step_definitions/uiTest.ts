import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage, ProductPage } from "../../support/page";
interface MyClickOptions extends Cypress.ClickOptions {
  target?: string;
}
Given("I visit {string}", (url: string) => {
  HomePage.visit(url);
});

When("I click on text {string}", (text: string) => {
  HomePage.clickElementByText(text);
});
When("I force click on text {string}", (text: string) => {
  HomePage.clickElementByTextForce(text);
});

When("I wait {int} milliseconds", (milliseconds: number) => {
  HomePage.wait(milliseconds);
});

Then(
  "I should see the Amazon homepage elements (e.g., search bar, logo)",
  () => {
    HomePage.validateHomePageElements();
  }
);

When("I click on the selector {string}", (el: string) => {
  ProductPage.clickElementBySelector(el);
});
When("I see selector {string}", (el: string) => {
  ProductPage.seeSelector(el);
});

When("I see text {string}", (text: string) => {
  ProductPage.seeText(text);
});

When(
  "I click on the {int} child element {string} that opens in the same tab",
  (elementNumber: number, el: string) => {
    ProductPage.clickNthChildElement(elementNumber, el, {
      target: "_self",
    } as MyClickOptions);
  }
);
Then(
  "I click on the {int} child selector {string}",
  (elementNumber: number, el: string) => {
    ProductPage.clickNthChildElement(elementNumber, el);
  }
);

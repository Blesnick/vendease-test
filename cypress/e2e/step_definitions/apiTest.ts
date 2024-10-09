import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("I have user data for an admin", () => {
  cy.fixture("data.json").then((data) => {
    cy.wrap(data[0]).as("userData");
  });
});

Given("I have user data for a player", () => {
  cy.fixture("data.json").then((data) => {
    cy.wrap(data[1]).as("userData");
  });
});

When("I make a POST request to create a user", () => {
  cy.get("@userData").then((data) => {
    cy.api("POST", "https://reqres.in/api/users", data).then((response) => {
      // Store response body
      cy.wrap(response).as("response");
      cy.wrap(response.body).as("responseBody");
    });
  });
});

Then("Validate Admin response schema using include", () => {
  cy.get("@response").its("body").should("include", {
    name: "admin",
    job: "admin",
  });
});
Then("Validate Player response schema using include", () => {
  cy.get("@response").its("body").should("include", {
    name: "ronaldo",
    job: "player",
  });
});
Then("the response content-type is application json", () => {
  cy.get("@response")
    .its("headers")
    .should("include.any.keys", "content-type", "application/json");
});

Then("the response time should be less than 2 seconds", () => {
  cy.get("@response").its("duration").should("be.lessThan", 2000); // Access request object directly (assuming cy.request was used in the When step)
});

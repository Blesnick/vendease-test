# Vendease Test Automation

This project contains automated UI and API test cases for Vendease, implemented using Cypress with the Cucumber framework.

## Table of Contents

- [Project Structure](#project-structure)
- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
  - [Running UI Tests](#running-ui-tests)
  - [Running API Tests](#running-api-tests)
- [Configuration](#configuration)
- [Features](#features)
- [Code Challenge](#code-challenge)
- [License](#license)

## Project Structure

```
.
├── cypress
│   ├── e2e
│   │   ├── step_definitions      # Step definitions for the Cucumber tests
│   │   └── features              # Contains feature files for tests
│   │       └── automation.feature # Feature file with UI and API test scenarios
│   ├── fixtures                  # Static test data
│   ├── videos                    # Cypress video recordings
│   └── screenshots               # Screenshots from failed test cases
├── package.json                  # Project dependencies and scripts
├── cypress.config.ts             # Cypress configuration file
└── README.md                     # Project documentation
```

## Pre-requisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- Chrome Browser

## Installation

Clone the repository and install the required dependencies:

```bash
git clone https://github.com/Blesnick/vendease-test.git
cd vendease-test
npm install
```

## Running Tests

You can run tests using Cypress via the following commands:

### Running UI Tests

To open Cypress and run UI tests interactively:

```bash
npm run cy:open:test
```

To run UI tests in the terminal with the tag `@uiTest`:

```bash
npm run cy:run:tag:ui
```

### Running API Tests

To run API tests in the terminal with the tag `@apiTest`:

```bash
npm run cy:run:tag:api
```

## Configuration

- The base URL for the project is set to `https://www.amazon.in/`.
- Default timeouts, viewport size, and security settings are configured in `cypress.config.ts`.

## Features

### UI Tests

- **Scenario: Add Product**

  - This test navigates to the Amazon homepage and selects a Samsung TV from the "Televisions" category under "TV, Appliances, Electronics" and verifies product details.

  Example from `uiTest.feature`:

  ```gherkin
  @uiTest
  Scenario: Add Product
    Given I visit "/"
    When I click on the selector "#nav-hamburger-menu"
    ...
    Then I see selector "#feature-bullets"
  ```

### API Tests

- **Scenario: Create an Admin User**

  - This test sends a POST request to create an admin user and validates the response schema, content type, and response time.

  - **Scenario: Create a Player User**
    - Similar to the admin scenario but for a player user.

  Example from `apiTest.feature`:

  ```gherkin
  @apiTest
  Scenario: Create an Admin User
    Given I have user data for an admin
    When I make a POST request to create a user
    Then Validate Admin response schema using include
    Then the response time should be less than 2 seconds
  ```

## Code Challenge

This project is based on the **Automation Coding Challenge** provided for automating both web and API test cases using Cypress and JavaScript.

### Test Case 1: Web Automation

Steps to automate:

1. Open [Amazon India](https://www.amazon.in/).
2. Click on the hamburger menu in the top left corner.
3. Select "TV, Appliances, Electronics".
4. Click on "Televisions".
5. Filter by Brand: Samsung.
6. Sort results by price from high to low.
7. Click on the second highest priced item.
8. Assert that the "About this item" section is present and log the text of this section to the console.

### Test Case 2: API Automation

Steps to automate:

1. Create a dummy user by making a POST request to `https://reqres.in/api/users`.
2. Use the following JSON data for two test cases:
   ```json
   [
     { "name": "admin", "job": "admin" },
     { "name": "ronaldo", "job": "player" }
   ]
   ```
3. Assert the following in the response:
   - Response code.
   - Response schema.
   - Response time (should be less than 2 seconds).
   - Response header includes `Content-Type` with `application/json`.

For more detailed information, see the original challenge instructions.

## License

This project is licensed under the [ISC License](LICENSE).

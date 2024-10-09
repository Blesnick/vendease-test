@apiTest
Feature: Test case for Vendease
  i want to Create Users (Admin and Player)

  Scenario: Create an Admin User
    Given I have user data for an admin
    When I make a POST request to create a user
    Then Validate Admin response schema using include
    Then the response content-type is application json
    Then the response time should be less than 2 seconds

  Scenario: Create a Player User
    Given I have user data for a player
    When I make a POST request to create a user
    Then Validate Player response schema using include
    Then the response content-type is application json
    Then the response time should be less than 2 seconds

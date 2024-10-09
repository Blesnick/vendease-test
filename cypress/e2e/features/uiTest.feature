Feature: Test case for Vendease
  i want to view the 2nd product details list page on Amazon

  @uiTest
  Scenario: Add Product
    Given I visit "/"
    When I click on the selector "#nav-hamburger-menu"
    And I wait 2000 milliseconds
    And I click on text "TV, Appliances, Electronics"
    And I wait 2000 milliseconds
    And I force click on text "Televisions"
    And I wait 1 milliseconds
    And I click on text "Samsung"
    When I force click on text "Sort by:"
    And I click on the selector "#s-result-sort-select_2"
    When I click on the 2 child element ".a-link-normal.s-no-outline" that opens in the same tab
    Then I see selector "#feature-bullets"

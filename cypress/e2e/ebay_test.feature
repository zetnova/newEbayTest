    

Feature: Ebay Test Feature


  Scenario: Ebay Checkout as Guest
    Given I am on the Ebay homepage
    When I search for "Laptop"
    Then I should see search results
    When I select the first item from the search results
    Then I add to cart
    
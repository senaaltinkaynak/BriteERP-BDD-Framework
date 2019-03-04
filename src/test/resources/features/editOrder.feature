@wip
Feature: As a Manager user should be able to edit order information.


  Background:
    Given User navigates to odoo homepage
    When User should see the login page
    Then User logs in as a manager
    When User should clicks on "Point of Sale" link


  Scenario Outline: Testing edit button under orders functionality
    Given User should display "Point of Sale" page
    Then User should clicks on "Orders" link
    And User should select a specific order with "<Order Ref>" from the orders
    And User should click the edit button to make changes
    And User should enter a value "<GuestNumber>" as a "Guests"
    And User should save the changings
    When User should display the final value "<GuestNumber>"

    Examples:
      | Order Ref              | GuestNumber  |
      | Whole Foods Store/0005 |     888      |
      | Whole Foods Store/0002 |     666      |
      | Whole Foods Store/0006 |     777      |
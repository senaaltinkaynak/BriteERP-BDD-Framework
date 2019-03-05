Feature: As a Manager user should be able to edit order information

  Background:
    Given User navigates to odoo homepage
    Then User should see the login page
    And User logs in as a manager
    When User should clicks on "Point of Sale" link
    And User should display "Point of Sale" page
    And User should clicks on "Orders" link

  Scenario Outline: User should be edit "\Guests\" value

    Given User should select a specific order with "<Order Ref>" from the orders
    Then User should click the edit button to make changes
    And User should enter a value "<GuestNumber>" as a "Guests"
    And User should save the changing
    When User should display the final value "<GuestNumber>"

    Examples:
      | Order Ref              | GuestNumber |
      | Whole Foods Store/0005 | 888         |
      | Whole Foods Store/0002 | 666         |
      | Whole Foods Store/0006 | 777         |


  Scenario Outline: User should be edit "Customer" value

    Given User should select a specific order with "<Order Ref>" from the orders
    Then User should click the edit button to make changes
    And User should clicks on "Customer" dropdown
    And User should select a customer from dropdown with "<Number>"
    And User should save the changing
    When User should display the "<Number>"th customer information

    Examples:
      | Order Ref              | Number |
      | Whole Foods Store/0001 | 2      |
      | Whole Foods Store/0003 | 3      |
      | DC store/0003          | 4      |

  @wip
  Scenario Outline: User should "Add an item"
    Given User should select a specific order with "<Order Ref>" from the orders
    Then User should click the edit button to make changes
    And User should clicks on "Add an item" link and enter an item with these product names:
      | ProductNameXXXXX |
      | ProductNameYYYYY |
      | ProductNameZZZZZ |

    And User should save the changing
    When User should display the products:
      | ProductNameXXXXX |
      | ProductNameYYYYY |
      | ProductNameZZZZZ |

    Examples:
      | Order Ref              |
      | Whole Foods Store/0001 |
      | Whole Foods Store/0002 |
      | Whole Foods Store/0003 |

  #Scenario Outline: User should be edit "\Table\" value
  #  Examples:

  #Scenario Outline: User should be edit "\Session\" value
  #  Examples:

  #Scenario Outline: User should be edit "\Fiscal Position\" value
  #  Examples:

  #Scenario Outline: User should be edit "\Notes\" value
  #  Examples:

  #Scenario Outline: User should be edit "\Salesman\" value under "\Extra Info\"
  #  Examples:

  #Scenario Outline: User should be edit "\Pricelist\" value under "\Session\" value
  #  Examples:
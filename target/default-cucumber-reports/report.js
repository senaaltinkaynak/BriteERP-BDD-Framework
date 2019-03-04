$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\editOrder.feature");
formatter.feature({
  "name": "As a Manager user should be able to edit order information.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Testing edit button under orders functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should display \"Point of Sale\" page",
  "keyword": "Given "
});
formatter.step({
  "name": "User should clicks on \"Orders\" link",
  "keyword": "Then "
});
formatter.step({
  "name": "User should select a specific order with \"\u003cOrder Ref\u003e\" from the orders",
  "keyword": "And "
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "And "
});
formatter.step({
  "name": "User should enter a value \"\u003cGuestNumber\u003e\" as a \"Guests\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should save the changings",
  "keyword": "And "
});
formatter.step({
  "name": "User should display the final value \"\u003cGuestNumber\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Order Ref",
        "GuestNumber"
      ]
    },
    {
      "cells": [
        "Whole Foods Store/0005",
        "888"
      ]
    },
    {
      "cells": [
        "Whole Foods Store/0002",
        "666"
      ]
    },
    {
      "cells": [
        "Whole Foods Store/0006",
        "777"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to odoo homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_odoo_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as a manager",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Point of Sale\" link",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing edit button under orders functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should display \"Point of Sale\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Orders\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select a specific order with \"Whole Foods Store/0005\" from the orders",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_specific_order_with_from_the_orders(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_click_the_edit_button_to_make_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter a value \"888\" as a \"Guests\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_enter_a_value_as_a(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should save the changings",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_save_the_changings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should display the final value \"888\"",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_the_final_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to odoo homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_odoo_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as a manager",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Point of Sale\" link",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing edit button under orders functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should display \"Point of Sale\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Orders\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select a specific order with \"Whole Foods Store/0002\" from the orders",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_specific_order_with_from_the_orders(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_click_the_edit_button_to_make_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter a value \"666\" as a \"Guests\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_enter_a_value_as_a(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should save the changings",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_save_the_changings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should display the final value \"666\"",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_the_final_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to odoo homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_navigates_to_odoo_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the login page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as a manager",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_logs_in_as_a_manager()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Point of Sale\" link",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing edit button under orders functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should display \"Point of Sale\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Orders\" link",
  "keyword": "Then "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select a specific order with \"Whole Foods Store/0006\" from the orders",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_specific_order_with_from_the_orders(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_click_the_edit_button_to_make_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should enter a value \"777\" as a \"Guests\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_enter_a_value_as_a(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should save the changings",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_save_the_changings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should display the final value \"777\"",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_the_final_value(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
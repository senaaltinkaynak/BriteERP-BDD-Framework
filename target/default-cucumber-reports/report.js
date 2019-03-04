$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\editOrder.feature");
formatter.feature({
  "name": "As a Manager user should be able to edit order information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be edit \"Customer\" value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should select a specific order with \"\u003cOrder Ref\u003e\" from the orders",
  "keyword": "Given "
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "Then "
});
formatter.step({
  "name": "User should clicks on \"Customer\" dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User should select a customer from dropdown with \"\u003cNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should save the changings",
  "keyword": "And "
});
formatter.step({
  "name": "User should display the \"\u003cNumber\u003e\"th customer information",
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
        "Number"
      ]
    },
    {
      "cells": [
        "Whole Foods Store/0001",
        "2"
      ]
    },
    {
      "cells": [
        "Whole Foods Store/0003",
        "3"
      ]
    },
    {
      "cells": [
        "DC store/0003",
        "4"
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
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as a manager",
  "keyword": "And "
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
formatter.step({
  "name": "User should display \"Point of Sale\" page",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Orders\" link",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be edit \"Customer\" value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should select a specific order with \"Whole Foods Store/0001\" from the orders",
  "keyword": "Given "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_specific_order_with_from_the_orders(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "Then "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_click_the_edit_button_to_make_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Customer\" dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select a customer from dropdown with \"2\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_customer_from_dropdown_with(String)"
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
  "name": "User should display the \"2\"th customer information",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_the_th_customer_information(String)"
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
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as a manager",
  "keyword": "And "
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
formatter.step({
  "name": "User should display \"Point of Sale\" page",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Orders\" link",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be edit \"Customer\" value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should select a specific order with \"Whole Foods Store/0003\" from the orders",
  "keyword": "Given "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_specific_order_with_from_the_orders(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "Then "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_click_the_edit_button_to_make_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Customer\" dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select a customer from dropdown with \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_customer_from_dropdown_with(String)"
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
  "name": "User should display the \"3\"th customer information",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_the_th_customer_information(String)"
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
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User logs in as a manager",
  "keyword": "And "
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
formatter.step({
  "name": "User should display \"Point of Sale\" page",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Orders\" link",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be edit \"Customer\" value",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "User should select a specific order with \"DC store/0003\" from the orders",
  "keyword": "Given "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_specific_order_with_from_the_orders(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the edit button to make changes",
  "keyword": "Then "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_click_the_edit_button_to_make_changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should clicks on \"Customer\" dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_clicks_on_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select a customer from dropdown with \"4\"",
  "keyword": "And "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_select_a_customer_from_dropdown_with(String)"
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
  "name": "User should display the \"4\"th customer information",
  "keyword": "When "
});
formatter.match({
  "location": "EditOrderStepDefinitions.user_should_display_the_th_customer_information(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
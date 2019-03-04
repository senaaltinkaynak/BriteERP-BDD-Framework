package com.briteerp.step_definitions.orders;

import com.briteerp.utilities.BrowserUtils;
import com.briteerp.utilities.Pages;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

public class EditOrderStepDefinitions {

    Pages pages = new Pages();
    String customerSelected;

    @When("User should clicks on {string} link")
    public void user_should_clicks_on_link(String link) {
        if (link.equals("Point of Sale")) {
            pages.homePage().pointOfSaleLink.click();
        }else if(link.equals("Orders")){
            pages.pointOfSalePage().ordersUnderOrders.click();
        }
    }

    @Given("User should display {string} page")
    public void user_should_display_page(String page) {
        if (page.equals("Point of Sale")) {
            Assert.assertTrue(pages.pointOfSalePage().ordersUnderOrders.isDisplayed());
        }
    }

    @Then("User should select a specific order with {string} from the orders")
    public void user_should_select_a_specific_order_with_from_the_orders(String orderName) {
        pages.ordersUnderOrdersPage().selectElementWithName(orderName).click();
    }

    @Then("User should click the edit button to make changes")
    public void user_should_click_the_edit_button_to_make_changes() {
        pages.ordersUnderOrdersPage().editElement.click();
    }

    @Then("User should enter a value {string} as a {string}")
    public void user_should_enter_a_value_as_a(String guestNumber, String guest) {
        if(guest.equals("Guests")){
            pages.ordersUnderOrdersPage().guestElement.clear();
            pages.ordersUnderOrdersPage().guestElement.sendKeys(guestNumber);
        }
    }
    @Then("User should save the changings")
    public void user_should_save_the_changings() {
        pages.ordersUnderOrdersPage().saveElement.click();
    }

    @When("User should display the final value {string}")
    public void user_should_display_the_final_value(String guestNumber) {
        Assert.assertEquals(pages.ordersUnderOrdersPage().editValue.getText(),guestNumber);
    }


    @Then("User should clicks on {string} dropdown")
    public void user_should_clicks_on_dropdown(String dropdown) {
        //if(dropdown.equals("Customer")){

        pages.ordersUnderOrdersPage().customerValue.click();
        //}
    }

    @Then("User should select a customer from dropdown with {string}")
    public void user_should_select_a_customer_from_dropdown_with(String i) {
        customerSelected = pages.ordersUnderOrdersPage().selectCustomer(i).getText();
        pages.ordersUnderOrdersPage().selectCustomer(i).click();
    }

    @When("User should display the {string}th customer information")
    public void user_should_display_the_th_customer_information(String i) {
        Assert.assertEquals(pages.ordersUnderOrdersPage().customerDisplay.getText(),
                customerSelected);
    }
}

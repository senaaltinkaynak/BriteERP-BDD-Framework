package com.briteerp.step_definitions.login;

import com.briteerp.utilities.ConfigurationReader;
import com.briteerp.utilities.Driver;
import com.briteerp.utilities.Pages;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefinitions {

    Pages pages = new Pages();

    @Given("User navigates to odoo homepage")
    public void user_navigates_to_odoo_homepage() {
        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }


    @When("User should see the login page")
    public void user_should_see_the_login_page() {
        String expectedTitle = "Login | Website localhost";
        String expectedUrl = "http://54.148.96.210/web/login";
        Assert.assertEquals("Title is not matching", expectedTitle, Driver.getDriver().getTitle());
        Assert.assertEquals("URL is not matching", expectedUrl, Driver.getDriver().getCurrentUrl());
    }

    @Then("User logs in as a manager")
    public void user_logs_in_as_a_manager() {
        pages.loginPage().positiveLogIn();
    }
}

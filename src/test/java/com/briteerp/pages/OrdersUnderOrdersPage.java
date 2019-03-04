package com.briteerp.pages;

import com.briteerp.utilities.BrowserUtils;
import com.briteerp.utilities.ConfigurationReader;
import com.briteerp.utilities.Driver;
import com.briteerp.utilities.Pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.concurrent.TimeUnit;


public class OrdersUnderOrdersPage {

    public OrdersUnderOrdersPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//tbody[@class='ui-sortable']//td[@class = 'o_list_record_selector']//following-sibling::td[1]")
    public List<WebElement> orders;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_form_button_edit']")
    public WebElement editElement;

    @FindBy(linkText = "Add an item")
    public WebElement addElement;

    @FindBy(xpath = "//div[contains(@class,'o_field_widget o_field_many2one o_required_modifier')]//input[@class='o_input ui-autocomplete-input']")
    public WebElement productAdd;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_form_button_save']")
    public WebElement saveElement;

    @FindBy(xpath = "//tr[@class='o_data_row']//td[1]")
    public List<WebElement> products;

    @FindBy(xpath = "//button[@class='fa fa-trash-o o_list_record_delete_btn']")
    public List<WebElement> deleteIcons;

    @FindBy(xpath = "//tbody[@class='ui-sortable']/tr")
    public List<WebElement> ordersEdit;

    @FindBy(xpath ="//input[@class='o_field_integer o_field_number o_field_widget o_input']")
    public  WebElement guestElement;

    @FindBy(xpath = "//button[@class='btn btn-default btn-sm o_form_button_cancel']")
    public  WebElement discardElement;

    @FindBy(css = ".o_field_integer.o_field_number.o_field_widget")
    public  WebElement editValue;

    @FindBy(xpath = "//div[@name='partner_id']//input[@class='o_input ui-autocomplete-input']")
    public  WebElement customerValue;

    @FindBy(xpath = "//a[@class='o_form_uri o_field_widget' and @name='partner_id']")
    public  WebElement customerDisplay;


    @FindBy(xpath = "//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content']/li[@class='ui-menu-item']")
    public  List<WebElement>  customerTable;


    public WebElement selectOrder(int i){
        List<WebElement> orderS = orders;
        return orderS.get(i);
    }

    public WebElement selectElementWithName(String name){
        WebElement element = Driver.getDriver().findElement(By.xpath("//td[contains(text(),'"+ name +"')]"));
        return element;
    }
    public void enterInputToGuests(String testValue){
        guestElement.clear();
        guestElement.sendKeys(testValue);
    }

    public WebElement selectCustomer(String i){
        List<WebElement> customers = customerTable;
        return customers.get(Integer.parseInt(i));
    }

}

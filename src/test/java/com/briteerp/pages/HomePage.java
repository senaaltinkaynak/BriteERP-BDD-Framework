package com.briteerp.pages;

import com.briteerp.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
    public HomePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//*[@data-menu='491']")
    public WebElement productsLink;

    @FindBy(xpath = "//div[@class='navbar-collapse collapse']//span[@class='oe_menu_text'  and contains(.,'Point of Sale')]")
    public WebElement pointOfSaleLink;

    @FindBy(xpath = "//a[@data-menu-xmlid='point_of_sale.pos_config_menu_action_product_pricelist']")
    public WebElement pricelistsLink;
}

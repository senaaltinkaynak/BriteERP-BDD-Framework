package com.briteerp.utilities;

import com.briteerp.pages.HomePage;
import com.briteerp.pages.LoginPage;
import com.briteerp.pages.OrdersUnderOrdersPage;
import com.briteerp.pages.PointOfSalePage;

public class Pages {

    private HomePage homePage;
    private LoginPage loginPage;
    private OrdersUnderOrdersPage ordersUnderOrdersPage;
    private PointOfSalePage pointOfSalePage;

    public HomePage homePage(){
        if(homePage == null){
            homePage = new HomePage();
        }
        return homePage;
    }

    public LoginPage loginPage(){
        if(loginPage == null){
            loginPage = new LoginPage();
        }
        return loginPage;
    }

    public OrdersUnderOrdersPage ordersUnderOrdersPage(){
        if(ordersUnderOrdersPage == null){
            ordersUnderOrdersPage = new OrdersUnderOrdersPage();
        }
        return ordersUnderOrdersPage;
    }

    public PointOfSalePage pointOfSalePage(){
        if(pointOfSalePage == null){
            pointOfSalePage = new PointOfSalePage();
        }
        return pointOfSalePage;
    }


}

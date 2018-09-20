$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCart.feature");
formatter.feature({
  "line": 2,
  "name": "Adding product on the cart",
  "description": "",
  "id": "adding-product-on-the-cart",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Addproductchek"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Adding product into the card",
  "description": "",
  "id": "adding-product-on-the-cart;adding-product-into-the-card",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Hover on primary navigation items.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click any specfic item.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Filter the item to low price.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Select a item from the product.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Add the product into the cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click on the Add to cart bag.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select the country from drop down.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on proceed to checkout button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout_step.hover_on_primary_navigation()"
});
formatter.result({
  "duration": 5382123556,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_step.click_any_specfic_item()"
});
formatter.result({
  "duration": 9312267556,
  "status": "passed"
});
formatter.match({
  "location": "Checkout_step.Filter_from_low()"
});
formatter.result({
  "duration": 5817786666,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not visible\n  (Session info: chrome\u003d68.0.3440.91)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 278 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d800x1280, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003d310012e0a2446300, platform\u003dLINUX, deviceUDID\u003d310012e0a2446300, desired\u003d{platformVersion\u003d5.1.1, browserName\u003dchrome, platformName\u003dAndroid, deviceName\u003d310012e0a2446300}, platformVersion\u003d5.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, deviceModel\u003dSM-T285YD, platformName\u003dAndroid, deviceManufacturer\u003dsamsung}]\nSession ID: b9b9fad9-8f27-4f1d-9832-2d284dc856ce\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat TestRunner.loginSteps.Checkout_step.Filter_from_low(Checkout_step.java:60)\r\n\tat ✽.Then Filter the item to low price.(src/test/resources/AddCart.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Checkout_step.select_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout_step.Add_any_product_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout_step.Click_Add_cart_bag()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout_step.select_the_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout_step.Click_any_proceed_checkout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Guest email validation",
  "description": "",
  "id": "adding-product-on-the-cart;guest-email-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Enter the Email as guest \"\u003cEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Continue CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\u003cEmailVal\u003e\" message for invalid credentials.",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "adding-product-on-the-cart;guest-email-validation;",
  "rows": [
    {
      "cells": [
        "Email",
        "EmailVal"
      ],
      "line": 18,
      "id": "adding-product-on-the-cart;guest-email-validation;;1"
    },
    {
      "cells": [
        "",
        "This value should not be blank."
      ],
      "line": 19,
      "id": "adding-product-on-the-cart;guest-email-validation;;2"
    },
    {
      "cells": [
        "test",
        "This value is not a valid email address."
      ],
      "line": 20,
      "id": "adding-product-on-the-cart;guest-email-validation;;3"
    },
    {
      "cells": [
        "testqa@gmail.com",
        ""
      ],
      "line": 21,
      "id": "adding-product-on-the-cart;guest-email-validation;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Guest email validation",
  "description": "",
  "id": "adding-product-on-the-cart;guest-email-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Addproductchek"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Enter the Email as guest \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click on Continue CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"This value should not be blank.\" message for invalid credentials.",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "Checkout_step.Enter_Email_as_guest(String)"
});

$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test On Web Application",
  "description": "",
  "id": "login-test-on-web-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Data driving user login",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Click on Login Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter Your email address as \"\u003cemail address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter your password as \"\u003cpassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify \"\u003cLoginVal\u003e\" message for email address and password.",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login;",
  "rows": [
    {
      "cells": [
        "email address",
        "password",
        "LoginVal"
      ],
      "line": 10,
      "id": "login-test-on-web-application;data-driving-user-login;;1"
    },
    {
      "cells": [
        "",
        "",
        "Sorry, that email does not appear to exist on our system."
      ],
      "line": 11,
      "id": "login-test-on-web-application;data-driving-user-login;;2"
    },
    {
      "cells": [
        "test@@gmail.com",
        "",
        "Sorry, that email does not appear to exist on our system."
      ],
      "line": 12,
      "id": "login-test-on-web-application;data-driving-user-login;;3"
    },
    {
      "cells": [
        "test@gmail.com",
        "",
        "Sorry, that password does not match our records."
      ],
      "line": 13,
      "id": "login-test-on-web-application;data-driving-user-login;;4"
    },
    {
      "cells": [
        "test@gmail.com",
        "Test@4321",
        "Sorry, that password does not match our records."
      ],
      "line": 14,
      "id": "login-test-on-web-application;data-driving-user-login;;5"
    },
    {
      "cells": [
        "test@gmail.com",
        "Test@1234",
        ""
      ],
      "line": 15,
      "id": "login-test-on-web-application;data-driving-user-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Data driving user login",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Click on Login Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter Your email address as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter your password as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify \"Sorry, that email does not appear to exist on our system.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 4934589749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "Login_step.Enter_your_email_address_as(String)"
});
formatter.result({
  "duration": 531295347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Login_step.Enter_your_password_as(String)"
});
formatter.result({
  "duration": 638952284,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: unknown error: Element \u003cinput type\u003d\"password\" id\u003d\"password\" name\u003d\"password\" required\u003d\"required\" aria-describedby\u003d\"afies_password_status\" class\u003d\"form-control\"\u003e is not clickable at point (180, 494). Other element would receive the click: \u003ca title\u003d\"...\" class\u003d\"chat js-zopim\" href\u003d\"#\"\u003eChat with us\u003c/a\u003e\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 455 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d720x1280, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dZW2223XXGX, platform\u003dLINUX, deviceUDID\u003dZW2223XXGX, desired\u003d{platformVersion\u003d7.1.1, browserName\u003dchrome, platformName\u003dAndroid, deviceName\u003dZW2223XXGX}, platformVersion\u003d7.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, deviceModel\u003dMoto E (4), platformName\u003dAndroid, deviceManufacturer\u003dmotorola}]\nSession ID: d21e8918-ec9b-4254-a37a-0a5fadf40799\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat TestRunner.loginSteps.Login_step.Enter_your_password_as(Login_step.java:55)\r\n\tat ✽.Then Enter your password as \"\".(src/test/resources/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, that email does not appear to exist on our system.",
      "offset": 8
    }
  ],
  "location": "Login_step.verify_message_for_email_pass(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Data driving user login",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Click on Login Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter Your email address as \"test@@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter your password as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify \"Sorry, that email does not appear to exist on our system.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 2993128441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@@gmail.com",
      "offset": 29
    }
  ],
  "location": "Login_step.Enter_your_email_address_as(String)"
});
formatter.result({
  "duration": 460301538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Login_step.Enter_your_password_as(String)"
});
formatter.result({
  "duration": 560274916,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: unknown error: Element \u003cinput type\u003d\"password\" id\u003d\"password\" name\u003d\"password\" required\u003d\"required\" aria-describedby\u003d\"afies_password_status\" class\u003d\"form-control\"\u003e is not clickable at point (180, 494). Other element would receive the click: \u003ca title\u003d\"...\" class\u003d\"chat js-zopim\" href\u003d\"#\"\u003eChat with us\u003c/a\u003e\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 427 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d720x1280, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dZW2223XXGX, platform\u003dLINUX, deviceUDID\u003dZW2223XXGX, desired\u003d{platformVersion\u003d7.1.1, browserName\u003dchrome, platformName\u003dAndroid, deviceName\u003dZW2223XXGX}, platformVersion\u003d7.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, deviceModel\u003dMoto E (4), platformName\u003dAndroid, deviceManufacturer\u003dmotorola}]\nSession ID: d21e8918-ec9b-4254-a37a-0a5fadf40799\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat TestRunner.loginSteps.Login_step.Enter_your_password_as(Login_step.java:55)\r\n\tat ✽.Then Enter your password as \"\".(src/test/resources/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, that email does not appear to exist on our system.",
      "offset": 8
    }
  ],
  "location": "Login_step.verify_message_for_email_pass(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Data driving user login",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Click on Login Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter Your email address as \"test@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter your password as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify \"Sorry, that password does not match our records.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 4169335186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 29
    }
  ],
  "location": "Login_step.Enter_your_email_address_as(String)"
});
formatter.result({
  "duration": 368997052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Login_step.Enter_your_password_as(String)"
});
formatter.result({
  "duration": 528064235,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: unknown error: Element \u003cinput type\u003d\"password\" id\u003d\"password\" name\u003d\"password\" required\u003d\"required\" aria-describedby\u003d\"afies_password_status\" class\u003d\"form-control\"\u003e is not clickable at point (180, 494). Other element would receive the click: \u003ca title\u003d\"...\" class\u003d\"chat js-zopim\" href\u003d\"#\"\u003eChat with us\u003c/a\u003e\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 382 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d720x1280, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dZW2223XXGX, platform\u003dLINUX, deviceUDID\u003dZW2223XXGX, desired\u003d{platformVersion\u003d7.1.1, browserName\u003dchrome, platformName\u003dAndroid, deviceName\u003dZW2223XXGX}, platformVersion\u003d7.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, deviceModel\u003dMoto E (4), platformName\u003dAndroid, deviceManufacturer\u003dmotorola}]\nSession ID: d21e8918-ec9b-4254-a37a-0a5fadf40799\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat TestRunner.loginSteps.Login_step.Enter_your_password_as(Login_step.java:55)\r\n\tat ✽.Then Enter your password as \"\".(src/test/resources/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, that password does not match our records.",
      "offset": 8
    }
  ],
  "location": "Login_step.verify_message_for_email_pass(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Data driving user login",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Click on Login Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter Your email address as \"test@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter your password as \"Test@4321\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify \"Sorry, that password does not match our records.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 2851426156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 29
    }
  ],
  "location": "Login_step.Enter_your_email_address_as(String)"
});
formatter.result({
  "duration": 400259734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@4321",
      "offset": 24
    }
  ],
  "location": "Login_step.Enter_your_password_as(String)"
});
formatter.result({
  "duration": 545996242,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: unknown error: Element \u003cinput type\u003d\"password\" id\u003d\"password\" name\u003d\"password\" required\u003d\"required\" aria-describedby\u003d\"afies_password_status\" class\u003d\"form-control\"\u003e is not clickable at point (180, 494). Other element would receive the click: \u003ca title\u003d\"...\" class\u003d\"chat js-zopim\" href\u003d\"#\"\u003eChat with us\u003c/a\u003e\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 340 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d720x1280, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dZW2223XXGX, platform\u003dLINUX, deviceUDID\u003dZW2223XXGX, desired\u003d{platformVersion\u003d7.1.1, browserName\u003dchrome, platformName\u003dAndroid, deviceName\u003dZW2223XXGX}, platformVersion\u003d7.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, deviceModel\u003dMoto E (4), platformName\u003dAndroid, deviceManufacturer\u003dmotorola}]\nSession ID: d21e8918-ec9b-4254-a37a-0a5fadf40799\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat TestRunner.loginSteps.Login_step.Enter_your_password_as(Login_step.java:55)\r\n\tat ✽.Then Enter your password as \"Test@4321\".(src/test/resources/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, that password does not match our records.",
      "offset": 8
    }
  ],
  "location": "Login_step.verify_message_for_email_pass(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Data driving user login",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Click on Login Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Enter Your email address as \"test@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter your password as \"Test@1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Verify \"\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 3262341895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 29
    }
  ],
  "location": "Login_step.Enter_your_email_address_as(String)"
});
formatter.result({
  "duration": 404362847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@1234",
      "offset": 24
    }
  ],
  "location": "Login_step.Enter_your_password_as(String)"
});
formatter.result({
  "duration": 506866003,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: unknown error: Element \u003cinput type\u003d\"password\" id\u003d\"password\" name\u003d\"password\" required\u003d\"required\" aria-describedby\u003d\"afies_password_status\" class\u003d\"form-control\"\u003e is not clickable at point (180, 494). Other element would receive the click: \u003ca title\u003d\"...\" class\u003d\"chat js-zopim\" href\u003d\"#\"\u003eChat with us\u003c/a\u003e\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 358 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027172.23.52.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities [{deviceScreenSize\u003d720x1280, networkConnectionEnabled\u003dtrue, warnings\u003d{}, databaseEnabled\u003dfalse, deviceName\u003dZW2223XXGX, platform\u003dLINUX, deviceUDID\u003dZW2223XXGX, desired\u003d{platformVersion\u003d7.1.1, browserName\u003dchrome, platformName\u003dAndroid, deviceName\u003dZW2223XXGX}, platformVersion\u003d7.1.1, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, takesScreenshot\u003dtrue, browserName\u003dchrome, javascriptEnabled\u003dtrue, deviceModel\u003dMoto E (4), platformName\u003dAndroid, deviceManufacturer\u003dmotorola}]\nSession ID: d21e8918-ec9b-4254-a37a-0a5fadf40799\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat TestRunner.loginSteps.Login_step.Enter_your_password_as(Login_step.java:55)\r\n\tat ✽.Then Enter your password as \"Test@1234\".(src/test/resources/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "Login_step.verify_message_for_email_pass(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Data driving user logout test",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-logout-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Click on user profile name.",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click on logout CTA.",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout_step.click_user_profile()"
});
formatter.result({
  "duration": 3374845944,
  "status": "passed"
});
formatter.match({
  "location": "Logout_step.click_on_logout()"
});
formatter.result({
  "duration": 17969139986,
  "error_message": "java.lang.NullPointerException\r\n\tat TestRunner.loginSteps.Logout_step.click_on_logout(Logout_step.java:18)\r\n\tat ✽.Then Click on logout CTA.(src/test/resources/Login.feature:19)\r\n",
  "status": "failed"
});
});
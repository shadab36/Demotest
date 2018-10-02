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
formatter.scenario({
  "line": 3,
  "name": "Data driving user login link.",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login-link.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Click on Login Register Button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1838170739,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Data driving user login",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Enter Your email address as \"\u003cemail address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter your password as \"\u003cpassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify \"\u003cLoginVal\u003e\" message for email address and password.",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
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
      "line": 11,
      "id": "login-test-on-web-application;data-driving-user-login;;1"
    },
    {
      "cells": [
        "",
        "",
        "Sorry, that email does not appear to exist on our system."
      ],
      "line": 12,
      "id": "login-test-on-web-application;data-driving-user-login;;2"
    },
    {
      "cells": [
        "test@@gmail.com",
        "",
        "Sorry, that email does not appear to exist on our system."
      ],
      "line": 13,
      "id": "login-test-on-web-application;data-driving-user-login;;3"
    },
    {
      "cells": [
        "test@gmail.com",
        "",
        "Sorry, that password does not match our records."
      ],
      "line": 14,
      "id": "login-test-on-web-application;data-driving-user-login;;4"
    },
    {
      "cells": [
        "test@gmail.com",
        "Test@4321",
        "Sorry, that password does not match our records."
      ],
      "line": 15,
      "id": "login-test-on-web-application;data-driving-user-login;;5"
    },
    {
      "cells": [
        "test@gmail.com",
        "Test@1234",
        ""
      ],
      "line": 16,
      "id": "login-test-on-web-application;data-driving-user-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
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
  "line": 6,
  "name": "Enter Your email address as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter your password as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify \"Sorry, that email does not appear to exist on our system.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 244405225,
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
  "duration": 201819466,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 1168387037,
  "status": "passed"
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
  "duration": 593366403,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
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
  "line": 6,
  "name": "Enter Your email address as \"test@@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter your password as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify \"Sorry, that email does not appear to exist on our system.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 218507014,
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
  "duration": 206309686,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 1181463919,
  "status": "passed"
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
  "duration": 587725072,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
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
  "line": 6,
  "name": "Enter Your email address as \"test@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter your password as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify \"Sorry, that password does not match our records.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 222976345,
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
  "duration": 161473706,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 1140406605,
  "status": "passed"
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
  "duration": 597650401,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
  "line": 6,
  "name": "Enter Your email address as \"test@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter your password as \"Test@4321\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify \"Sorry, that password does not match our records.\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 280365209,
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
  "duration": 203826131,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 1237843895,
  "status": "passed"
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
  "duration": 600705955,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "line": 6,
  "name": "Enter Your email address as \"test@gmail.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter your password as \"Test@1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Login Now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Verify \"\" message for email address and password.",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 214451016,
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
  "duration": 269010103,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 1188811916,
  "status": "passed"
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
  "duration": 20055103087,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Data driving user logout test",
  "description": "",
  "id": "login-test-on-web-application;data-driving-user-logout-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Click on user profile name.",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click on logout CTA.",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout_step.click_user_profile()"
});
formatter.result({
  "duration": 20063659528,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: .close[aria-label\u003d\u0027Close\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Windows\\Temp\\rust_mozprofile.XvTjMQfrhNhn, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dANY, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d61.0.1, platformVersion\u003d10.0, moz:processID\u003d12764.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt, moz:webdriverClick\u003dtrue}]\nSession ID: 4ae313e9-5f15-4b77-8a3d-01eace5ca247\n*** Element info: {Using\u003dcss selector, value\u003d.close[aria-label\u003d\u0027Close\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:501)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.Logout_step.click_user_profile(Logout_step.java:17)\r\n\tat ✽.Then Click on user profile name.(src/test/resources/Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Logout_step.click_on_logout()"
});
formatter.result({
  "status": "skipped"
});
});
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
  "duration": 3566772889,
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
  "duration": 10880975999,
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
  "duration": 11105475111,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 3233784000,
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
  "duration": 4648145777,
  "status": "passed"
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
  "duration": 3357901778,
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
  "duration": 11684581334,
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
  "duration": 11630526222,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 3185556445,
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
  "duration": 4590797778,
  "status": "passed"
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
  "duration": 3271527556,
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
  "duration": 10007132445,
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
  "duration": 10660842222,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 3110945334,
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
  "duration": 5094324445,
  "status": "passed"
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
  "duration": 3659161333,
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
  "duration": 10352429778,
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
  "duration": 10243428444,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 3259815111,
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
  "duration": 4841056445,
  "status": "passed"
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
  "duration": 3583398222,
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
  "duration": 10384934666,
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
  "duration": 10708243112,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_login_cta()"
});
formatter.result({
  "duration": 3231759555,
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
  "duration": 1004611111,
  "status": "passed"
});
});
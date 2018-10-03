$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Signup.feature");
formatter.feature({
  "line": 2,
  "name": "signup Test On Web Application",
  "description": "",
  "id": "signup-test-on-web-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"\u003cFull Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"\u003cEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"\u003cRepeat Password\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"\u003cSignUp_val_Msg\u003e\" message for all invalid credentials.",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;",
  "rows": [
    {
      "cells": [
        "Full Name",
        "Email",
        "Password",
        "Repeat Password",
        "Full NameVal",
        "EmailVal",
        "PasswordVal",
        "Repeat PasswordVAL",
        "SignUp_val_Msg"
      ],
      "line": 18,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "This value should not be blank. This value is too short. It should have 5 characters or more.",
        "This value should not be blank.",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        ""
      ],
      "line": 19,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;2"
    },
    {
      "cells": [
        "Test",
        "",
        "",
        "",
        "This value is too short. It should have 5 characters or more.",
        "This value should not be blank.",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        ""
      ],
      "line": 20,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;3"
    },
    {
      "cells": [
        "Test12",
        "test@@gmail.com",
        "",
        "",
        "",
        "This value is not a valid email address.",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        ""
      ],
      "line": 21,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;4"
    },
    {
      "cells": [
        "Test123",
        "test@gmail.com",
        "",
        "",
        "",
        "",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        "Sorry, but there are some problems with the form. Please see the fields below for details:"
      ],
      "line": 22,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;5"
    },
    {
      "cells": [
        "test123",
        "test@gmail.com",
        "Test12",
        "",
        "",
        "",
        "The password fields must match",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        "Sorry, but there are some problems with the form. Please see the fields below for details:"
      ],
      "line": 23,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;6"
    },
    {
      "cells": [
        "test123",
        "test@gmail.com",
        "Test@1234",
        "Test@4321",
        "",
        "",
        "The password fields must match",
        "Password must be at least 7 characters long and contain at least one letter and one number",
        "Sorry, but there are some problems with the form. Please see the fields below for details:"
      ],
      "line": 24,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;7"
    },
    {
      "cells": [
        "Test123",
        "testqwer5@gmail.com",
        "Test@1234",
        "Test@1234",
        "",
        "",
        "",
        "",
        "We are delighted to welcome you to Amara, the home of luxury furnishings and gifts."
      ],
      "line": 25,
      "id": "signup-test-on-web-application;data-driving-for-sign-up.;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"\" message for all invalid credentials.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1250230556,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Create_account_button()"
});
formatter.result({
  "duration": 1121798168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.he_she_provides_the_Full_Name_as(String)"
});
formatter.result({
  "duration": 405825597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.Enter_the_Email_address_as(String)"
});
formatter.result({
  "duration": 217527903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.Enter_the_password_as(String)"
});
formatter.result({
  "duration": 200929688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignUp_Step.Enter_the_repeat_password_as(String)"
});
formatter.result({
  "duration": 150852377,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_the_save_button()"
});
formatter.result({
  "duration": 2302144310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 1
    }
  ],
  "location": "SignUp_Step.validation_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 162523928,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"\" message for all invalid credentials.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1074689744,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Create_account_button()"
});
formatter.result({
  "duration": 1136182161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.he_she_provides_the_Full_Name_as(String)"
});
formatter.result({
  "duration": 292966981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.Enter_the_Email_address_as(String)"
});
formatter.result({
  "duration": 182395919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.Enter_the_password_as(String)"
});
formatter.result({
  "duration": 228467454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignUp_Step.Enter_the_repeat_password_as(String)"
});
formatter.result({
  "duration": 211477683,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_the_save_button()"
});
formatter.result({
  "duration": 2268615437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 1
    }
  ],
  "location": "SignUp_Step.validation_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 85807073,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"Test12\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"test@@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"\" message for all invalid credentials.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1074793300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Create_account_button()"
});
formatter.result({
  "duration": 1068524858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test12",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.he_she_provides_the_Full_Name_as(String)"
});
formatter.result({
  "duration": 256958552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.Enter_the_Email_address_as(String)"
});
formatter.result({
  "duration": 274070545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.Enter_the_password_as(String)"
});
formatter.result({
  "duration": 302377643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignUp_Step.Enter_the_repeat_password_as(String)"
});
formatter.result({
  "duration": 123034612,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_the_save_button()"
});
formatter.result({
  "duration": 2287234539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 1
    }
  ],
  "location": "SignUp_Step.validation_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 85567073,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"Test123\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"test@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"Sorry, but there are some problems with the form. Please see the fields below for details:\" message for all invalid credentials.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1070097302,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Create_account_button()"
});
formatter.result({
  "duration": 1083604407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.he_she_provides_the_Full_Name_as(String)"
});
formatter.result({
  "duration": 235469229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.Enter_the_Email_address_as(String)"
});
formatter.result({
  "duration": 194157692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.Enter_the_password_as(String)"
});
formatter.result({
  "duration": 124715055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignUp_Step.Enter_the_repeat_password_as(String)"
});
formatter.result({
  "duration": 124408389,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_the_save_button()"
});
formatter.result({
  "duration": 3230419453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, but there are some problems with the form. Please see the fields below for details:",
      "offset": 1
    }
  ],
  "location": "SignUp_Step.validation_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 101017733,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"test123\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"test@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"Test12\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"Sorry, but there are some problems with the form. Please see the fields below for details:\" message for all invalid credentials.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1084552851,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Create_account_button()"
});
formatter.result({
  "duration": 1062883972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.he_she_provides_the_Full_Name_as(String)"
});
formatter.result({
  "duration": 260206551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.Enter_the_Email_address_as(String)"
});
formatter.result({
  "duration": 255278553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test12",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.Enter_the_password_as(String)"
});
formatter.result({
  "duration": 165671482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignUp_Step.Enter_the_repeat_password_as(String)"
});
formatter.result({
  "duration": 140592826,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_the_save_button()"
});
formatter.result({
  "duration": 3602568177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, but there are some problems with the form. Please see the fields below for details:",
      "offset": 1
    }
  ],
  "location": "SignUp_Step.validation_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 72487079,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"test123\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"test@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"Test@1234\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"Test@4321\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"Sorry, but there are some problems with the form. Please see the fields below for details:\" message for all invalid credentials.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1046138646,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Create_account_button()"
});
formatter.result({
  "duration": 1101188844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.he_she_provides_the_Full_Name_as(String)"
});
formatter.result({
  "duration": 294406535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.Enter_the_Email_address_as(String)"
});
formatter.result({
  "duration": 244931446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@1234",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.Enter_the_password_as(String)"
});
formatter.result({
  "duration": 175252366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@4321",
      "offset": 26
    }
  ],
  "location": "SignUp_Step.Enter_the_repeat_password_as(String)"
});
formatter.result({
  "duration": 152885266,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_the_save_button()"
});
formatter.result({
  "duration": 3516379770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, but there are some problems with the form. Please see the fields below for details:",
      "offset": 1
    }
  ],
  "location": "SignUp_Step.validation_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 99472845,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Data driving for sign-up.",
  "description": "",
  "id": "signup-test-on-web-application;data-driving-for-sign-up.;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signupTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "click on Login / Register Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "click on Create an account Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Full Name as \"Test123\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address as \"testqwer5@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter password as \"Test@1234\".",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter repeat_password as \"Test@1234\".",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on save button.",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#Then Verify \"\u003cFull NameVal\u003e\" validation message for Full Name."
    },
    {
      "line": 12,
      "value": "#\tThen Verify \"\u003cEmailVal\u003e\" validation message for user email address."
    },
    {
      "line": 13,
      "value": "#\tThen Verify \"\u003cPasswordVal\u003e\" validation message for password."
    },
    {
      "line": 14,
      "value": "#\tThen Verify \"\u003cRepeat PasswordVAL\u003e\" validation message for repeat password."
    }
  ],
  "line": 15,
  "name": "\"We are delighted to welcome you to Amara, the home of luxury furnishings and gifts.\" message for all invalid credentials.",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Login__Register_button()"
});
formatter.result({
  "duration": 1059786640,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.he_she_click_on_Create_account_button()"
});
formatter.result({
  "duration": 1179091921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 20
    }
  ],
  "location": "SignUp_Step.he_she_provides_the_Full_Name_as(String)"
});
formatter.result({
  "duration": 172999923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testqwer5@gmail.com",
      "offset": 24
    }
  ],
  "location": "SignUp_Step.Enter_the_Email_address_as(String)"
});
formatter.result({
  "duration": 175415922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@1234",
      "offset": 19
    }
  ],
  "location": "SignUp_Step.Enter_the_password_as(String)"
});
formatter.result({
  "duration": 145784824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@1234",
      "offset": 26
    }
  ],
  "location": "SignUp_Step.Enter_the_repeat_password_as(String)"
});
formatter.result({
  "duration": 155881264,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.click_on_the_save_button()"
});
formatter.result({
  "duration": 3973763567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We are delighted to welcome you to Amara, the home of luxury furnishings and gifts.",
      "offset": 1
    }
  ],
  "location": "SignUp_Step.validation_for_all_invalid_credentials(String)"
});
formatter.result({
  "duration": 20042685314,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "After SignUp user should see Full Name.",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Check the logout button.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_Step.See_FullName()"
});
formatter.result({
  "duration": 1038442205,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_Step.check_logout_cta()"
});
formatter.result({
  "duration": 2305747864,
  "status": "passed"
});
});
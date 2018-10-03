@signupTest 
Feature: signup Test On Web Application 
Scenario Outline: Data driving for sign-up. 
Then click on Login / Register Button. 
	Then click on Create an account Button. 
	Then Enter Full Name as "<Full Name>". 
	Then Enter Email address as "<Email>". 
	Then Enter password as "<Password>". 
	Then Enter repeat_password as "<Repeat Password>". 
	Then click on save button. 
	#Then Verify "<Full NameVal>" validation message for Full Name. 
#	Then Verify "<EmailVal>" validation message for user email address. 
#	Then Verify "<PasswordVal>" validation message for password. 
#	Then Verify "<Repeat PasswordVAL>" validation message for repeat password. 
	Then "<SignUp_val_Msg>" message for all invalid credentials. 
	Examples: 
	
		|Full Name  |     Email            | Password  |  Repeat Password |   Full NameVal                                                                                | EmailVal                               |PasswordVal                                                                                 |Repeat PasswordVAL                                                                                       |SignUp_val_Msg                                                                                |
		|           |                      |           |                  |This value should not be blank. This value is too short. It should have 5 characters or more.  |     This value should not be blank.    |Password must be at least 7 characters long and contain at least one letter and one number  |   Password must be at least 7 characters long and contain at least one letter and one number            |                                                                                              |
		| Test      |                      |           |                  |This value is too short. It should have 5 characters or more.                                  |This value should not be blank.         | Password must be at least 7 characters long and contain at least one letter and one number |Password must be at least 7 characters long and contain at least one letter and one number               |                                                                                              |
		| Test12    |  test@@gmail.com     |           |                  |                                                                                               |This value is not a valid email address.|Password must be at least 7 characters long and contain at least one letter and one number  |      Password must be at least 7 characters long and contain at least one letter and one number         |                                                                                              |
		| Test123   |  test@gmail.com      |           |                  |                                                                                               |                                        | Password must be at least 7 characters long and contain at least one letter and one number |      Password must be at least 7 characters long and contain at least one letter and one number         |Sorry, but there are some problems with the form. Please see the fields below for details:    |      
		| test123   |   test@gmail.com     | Test12    |                  |                                                                                               |                                        |The password fields must match                                                              | Password must be at least 7 characters long and contain at least one letter and one number              |Sorry, but there are some problems with the form. Please see the fields below for details:    |
		| test123   |   test@gmail.com     |Test@1234  | Test@4321        |                                                                                               |                                        | The password fields must match                                                             |        Password must be at least 7 characters long and contain at least one letter and one number       |Sorry, but there are some problems with the form. Please see the fields below for details:    | 
		| Test123   |   test@gmail.com     |Test@1234  | Test@1234        |                                                                                               |                                        |                                                                                            |                                                                                                         | You already have an Amara account, you can login here.                                       |     
		| Test123   |testqwer45@gmail.com  |Test@1234  | Test@1234        |                                                                                               |                                        |                                                                                            |                                                                                                         |  We are delighted to welcome you to Amara, the home of luxury furnishings and gifts.         |                                             
		
Scenario: 
	Then  After SignUp user should see Full Name. 
	Then  Check the logout button.
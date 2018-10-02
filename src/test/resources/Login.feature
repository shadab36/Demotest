@LoginTest 
Feature: Login Test On Web Application 
Scenario: Data driving user login link. 
	Then Click on Login Register Button. 
Scenario Outline: Data driving user login 
	Then Enter Your email address as "<email address>". 
	Then Enter your password as "<password>". 
	Then Click on Login Now button. 
	Then Verify "<LoginVal>" message for email address and password. 
	Examples: 
		|email address           |password      | LoginVal                                                 |
		|                        |              |Sorry, that email does not appear to exist on our system. |
		|test@@gmail.com         |              |Sorry, that email does not appear to exist on our system. |
		|test@gmail.com          |              |Sorry, that password does not match our records.          |
		|test@gmail.com          |Test@4321     |Sorry, that password does not match our records.          |
		|test@gmail.com          |Test@1234     |                                                          |             
		
Scenario: Data driving user logout test 
	Then  Click on user profile name. 
	Then  Click on logout CTA. 
		
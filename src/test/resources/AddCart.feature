@Addproductchek 
Feature: Adding product on the cart 
Scenario: Adding product into the card 
	Given Hover on primary navigation items. 
	Then  click any specfic item. 
	Then  Filter the item to low price. 
	Then  Select a item from the product. 
	Then  Add the product into the cart. 
	Then  Click on the Add to cart bag. 
	Then  Select the country from drop down. 
	Then  Click on proceed to checkout button. 
	
Scenario Outline: Guest email validation 
	Then  Enter the Email as guest "<Email>". 
	Then  Click on Continue CTA. 
	And   Verify "<EmailVal>" message for invalid credentials. 
	Examples: 
		|Email                |  EmailVal                               | 
		|                     |This value should not be blank.          |
		|    test             | This value is not a valid email address.|
		|testqa@gmail.com     |                                         |
		
Scenario Outline: Address and name 
	Then  Select the delivery stage address country from drop down. 
	Then  Enter Full name as "<Full Name>". 
	Then  Enter Telephone number as "<Telephone>". 
	Then  Enter Address1 as "<Address1>". 
	Then  Enter Town name as "<Town>". 
	Then  Enter PostCode as "<PostCode>". 
	Then  Click on Continue Button. 
	Then Verify "<Full NameVal>" validation message for Full name. 
	And Verify "<TelephoneVal>" validation message for Telephone. 
	And Verify "<Address1Val>" validation message for Address1. 
	And Verify "<TownVal>" validation message for Town Name. 
	And Verify "<PostCodeVal>" validation message for PostCode. 
	Examples: 
		|Full Name            |Telephone  |  Address1 |Town  |PostCode |Full NameVal                   | TelephoneVal                  | Address1Val                   | TownVal                       |PostCodeVal                   | 
		|                     |           |           |      |         |This value should not be blank.|This value should not be blank.|This value should not be blank.|This value should not be blank.|                              | 
		|test                 |    t      | t         |    t | t       |                               |                               |                               |                               |                              |                        
Scenario Outline: 
	Then  Select the payment option as a pay with card. 
	Then  Enter Name on card as "<CardName>". 
	Then  Enter Card Number as "<cardNumber>". 
	Then  Enter Security number as "<Security number>". 
	Then  Enter Card Expiry date as "<Expiry date>". 
	Then  Enter Card Expiry year as "<Expiry year>". 
	Then  Click on drop-down filed. 
	Then  Click on payment continue CTA. 
	Then  Verify "<CardNameVal>" validation message for CardName. 
	And  Verify "<cardNumberVal>" validation message for cardNumber. 
	And  Verify "<SecurityVal>" validation message for Security number. 
	And  Verify "<Expiry dateVal>" validation message for Expiry date. 
	And  Verify "<Expiry yearVal>" validation message for Expiry year. 
	Examples: 
		|CardName         | cardNumber          | Security number| Expiry date| Expiry year |CardNameVal                       |cardNumberVal                         |SecurityVal                            |Expiry dateVal                       |Expiry yearVal                        |
		|                 |                     |                |            |             |This value should not be blank.   |Invalid card number or security number|Invalid card number or security number |Please enter a valid expiration date |  Please enter a valid expiration date|            
		|          test   |4111111111111111     |   123          |        12  |        23   |                                  |                                      |                                       |                                     |                                      |
		
Scenario: 
	Then Accept the term and condition chekbox. 
	
		
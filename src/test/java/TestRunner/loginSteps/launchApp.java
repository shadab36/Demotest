package TestRunner.loginSteps;

import static org.junit.Assert.assertEquals;
import TestRunner.SetupClass;
import cucumber.api.java.en.When;

public class launchApp extends SetupClass{
	@When("^A user see the home page of application\\.$")
	public void a_user_see_the_home_page_of_application() throws Throwable {
	String actualTitle = driver.getTitle();
System.out.println(actualTitle);
	 String expectedTitle = "Amara | Luxury Gifts & Designer Homeware";
	assertEquals(expectedTitle, actualTitle);
}
}
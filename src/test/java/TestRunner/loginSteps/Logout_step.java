package TestRunner.loginSteps;

import ObjectRepository.LogoutObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.Then;

public class Logout_step extends SetupClass {

	@Then("^Click on user profile name\\.$")
	public void click_user_profile() throws InterruptedException {
		webelement = driver.findElement(LogoutObject.user_profile);
		Thread.sleep(500);
		webelement.click();
		Thread.sleep(500);
	}

	@Then("^Click on logout CTA\\.$")
	public void click_on_logout() throws InterruptedException {
		webelement = driver.findElement(LogoutObject.logout);
		Thread.sleep(1000);
		webelement.click();
		Thread.sleep(1000);
	}
}

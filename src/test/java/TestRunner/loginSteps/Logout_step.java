package TestRunner.loginSteps;

import ObjectRepository.LogoutObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.Then;

public class Logout_step extends SetupClass {

	@Then("^Click on user profile name\\.$")
	public void click_user_profile() throws InterruptedException {
		driver.findElement(LogoutObject.user_profile).click();
		Thread.sleep(1000);

	}

	@Then("^Click on logout CTA\\.$")
	public void click_on_logout() throws InterruptedException {
	webelement=	driver.findElement(LogoutObject.logout);
		Thread.sleep(1000);
		webelement.click();
		Thread.sleep(1000);
	}
}

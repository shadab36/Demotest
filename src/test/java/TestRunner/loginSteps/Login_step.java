package TestRunner.loginSteps;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import ObjectRepository.LoginObject;
import ObjectRepository.SignUpObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class Login_step extends SetupClass {
	PerformAction action = new PerformAction();
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions act = new Actions(driver);

	@Then("^Click on Login Register Button\\.$")
	public void he_she_click_on_Login__Register_button() {
		try {

			webelement = driver.findElement(SignUpObject.login_register);
			if (webelement.isEnabled()) {
				webelement.click();
			} else {
				System.out.println("login button is not enable");
			}
		} catch (Exception e) {
		}
	}

	@Then("^Enter Your email address as \"([^\"]*)\"\\.$")
	public void Enter_your_email_address_as(String str1) {
		try {

			webelement = driver.findElement(LoginObject.email);
			act.click(webelement).build().perform();
			action.implictywait(driver);
		webelement.clear();
			act.sendKeys(str1).build().perform();
			action.implictywait(driver);
			log.info("It's entering the email Address");

		} catch (Exception e) {

		}
	}

	@Then("^Enter your password as \"([^\"]*)\"\\.$")
	public void Enter_your_password_as(String pwd) throws InterruptedException {
		webelement = driver.findElement(LoginObject.password);
		action.implictywait(driver);
		act.click(webelement).build().perform();
		webelement.clear();
		action.implictywait(driver);
		act.sendKeys(pwd).build().perform();
		action.implictywait(driver);
		log.info("It's entering the user password");
	}

	@Then("^Click on Login Now button\\.$")
	public void click_login_cta() {
		try {
		webelement= driver.findElement(LoginObject.login_Button);
		 js.executeScript("arguments[0].click();", webelement);
	Thread.sleep(1000);
			log.info("click on login CTA");
			
		} catch (Exception e) {
		}
	}

	@Then("^Verify \"([^\"]*)\" message for email address and password\\.$")
	public void verify_message_for_email_pass(String loginVal) throws InterruptedException {
		boolean logintext=driver.findElements(LoginObject.Loginval).size()>0;
		if(logintext) {
		String Sigin_Val=driver.findElement(LoginObject.Loginval).getText();
		action.implictywait(driver);
		Assert.assertEquals(Sigin_Val, loginVal);
	Thread.sleep(1000);
	System.out.println(Sigin_Val);
		}
		
		
	}

}
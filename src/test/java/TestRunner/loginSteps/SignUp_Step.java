package TestRunner.loginSteps;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;
import ObjectRepository.SignUpObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class SignUp_Step extends SetupClass {
	PerformAction action = new PerformAction();
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions act = new Actions(driver);

	@Then("^click on Login / Register Button\\.$")
	public void he_she_click_on_Login__Register_button() {
		try {
			webelement = driver.findElement(SignUpObject.login_register);
			if (webelement.isEnabled()) {
				js.executeScript("arguments[0].click();", webelement);
				action.implictywait(driver);
			}
		} catch (Exception e) {
		}
	}

	@Then("^click on Create an account Button\\.$")
	public void he_she_click_on_Create_account_button() {
		try {
			webelement = driver.findElement(SignUpObject.CreateAccount);
			if (webelement.isEnabled()) {
				js.executeScript("arguments[0].click();", webelement);
				action.implictywait(driver);
			
			log.info("It's clicking on register link");
			}
		} catch (Exception e) {

		}
	}

	@Then("^Enter Full Name as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_Full_Name_as(String FullName) throws InterruptedException {
		webelement = driver.findElement(SignUpObject.FullName);

		act.click(webelement).build().perform();
		action.implictywait(driver);
		webelement.clear();
		action.implictywait(driver);
		act.sendKeys(FullName).build().perform();
		action.implictywait(driver);
		log.info("It's entering the user email Address");

	}

	@Then("^Enter Email address as \"([^\"]*)\"\\.$")
	public void Enter_the_Email_address_as(String emailAddress) {
		try {
			webelement = driver.findElement(SignUpObject.Email);
			act.click(webelement).build().perform();
			webelement.clear();
			action.implictywait(driver);
			act.sendKeys(emailAddress).build().perform();
			action.implictywait(driver);
			log.info("It's entering the email Address");
		} catch (Exception e) {
		}
	}

	@Then("^Enter password as \"([^\"]*)\"\\.$")
	public void Enter_the_password_as(String password) {

		webelement = driver.findElement(SignUpObject.Password);
		act.click(webelement).build().perform();
		action.implictywait(driver);
		webelement.clear();
		action.implictywait(driver);
		act.sendKeys(password).build().perform();
		action.implictywait(driver);
		log.info("It's entering the password");

	}

	@Then("^Enter repeat_password as \"([^\"]*)\"\\.$")
	public void Enter_the_repeat_password_as(String Confirm_pswd) {
		try {
			webelement = driver.findElement(SignUpObject.Repeatpassword);
			act.click(webelement).build().perform();
			action.implictywait(driver);
			webelement.clear();
			action.implictywait(driver);
			act.sendKeys(Confirm_pswd).build().perform();
			action.implictywait(driver);
			log.info("It's entering the confirm password");
		} catch (Exception e) {
		}
	}

	@Then("^click on save button\\.$")
	public void click_on_the_save_button() throws InterruptedException {

		webelement = driver.findElement(SignUpObject.Save);
		js.executeScript("scroll(0,300);");
		webelement.click();
		Thread.sleep(1000);
	}

	@Then("^Verify \"([^\"]*)\" validation message for Full Name\\.$")
	public void Verify_for_validation_message_for_user_Full_Name(String FullNameval) {
		try {
			boolean isPresent = driver.findElements(SignUpObject.Full_NameVal).size() > 0;
			if (isPresent) {
				String Pass_validation = driver.findElement(SignUpObject.Full_NameVal).getText();
				System.out.println(Pass_validation);
				Assert.assertEquals(Pass_validation, FullNameval);
				driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
				String script = "return  driver.findElement(SignUpObject.Full_NameVal).getText();";
				 String telno1 = ((JavascriptExecutor) driver).executeScript(script).toString();
				 System.out.println(script);
				 System.out.println(telno1);
			}
		} catch (Exception e) {
			e.printStackTrace();

		}
	}

	@Then("^Verify \"([^\"]*)\" validation message for user email address\\.$")
	public void Verify_for_validation_message_for_user_user_email_address(String email) {

		boolean isPresent = driver.findElements(SignUpObject.Email_AddressVal).size() > 0;
		if (isPresent) {
			String Email_validation = driver.findElement(SignUpObject.Email_AddressVal).getText();
			Assert.assertEquals(Email_validation, email);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		}

	}

	@Then("^Verify \"([^\"]*)\" validation message for password\\.$")
	public void verify_for_validation_message_for_password(String passwordVal) {
		try {

			boolean isPresent = driver.findElements(SignUpObject.password_errormessage).size() > 0;
			if (isPresent) {
				String Password_validation = driver.findElement(SignUpObject.password_errormessage).getText();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				Assert.assertEquals(Password_validation, passwordVal);
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^Verify \"([^\"]*)\" validation message for repeat password\\.$")
	public void verify_for_validation_message_for_repeat_password(String repeatVal) {
		try {
			boolean isPresent = driver.findElements(SignUpObject.repeat_errormessage).size() > 0;
			if (isPresent) {
				String repeat_validation = driver.findElement(SignUpObject.repeat_errormessage).getText();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				Assert.assertEquals(repeat_validation, repeatVal);
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^\"([^\"]*)\" message for all invalid credentials\\.$")
	public void validation_for_all_invalid_credentials(String Error) {

		try {

			boolean isPresent = driver.findElements(SignUpObject.Signup_errormessage).size() > 0;
			if (isPresent) {
				String error_validation = driver.findElement(SignUpObject.Signup_errormessage).getText();
				System.out.println(error_validation);
				Assert.assertEquals(error_validation, Error);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Then("^After SignUp user should see Full Name\\.$")
	public void See_FullName() {
		try {
			webelement = driver.findElement(SignUpObject.See_Name);
			js.executeScript("arguments[0].setAttribute('style', 'background: green; border: 2px solid red;');",
					webelement);
			Thread.sleep(1000);
		} catch (Exception e) {

		}
	}

	@Then("^Check the logout button\\.$")
	public void check_logout_cta() throws InterruptedException {

		webelement = driver.findElement(SignUpObject.See_Name);
		webelement.click();
		action.implictywait(driver);
		webelement = driver.findElement(SignUpObject.check_logout_cta);
		js.executeScript("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid black;');",
				webelement);
		Thread.sleep(2000);
	}

}

package TestRunner.loginSteps;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
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
				Thread.sleep(1000);
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
				Thread.sleep(1000);
			
			log.info("It's clicking on register link");
			}
		} catch (Exception e) {

		}
	}

	@Then("^Enter Full Name as \"([^\"]*)\"\\.$")
	public void he_she_provides_the_Full_Name_as(String FullName) throws InterruptedException {
		try {
		webelement = driver.findElement(SignUpObject.FullName);
		action.implictywait(driver);
		js.executeScript("arguments[0].click();", webelement);
		action.implictywait(driver);
		webelement.clear();
		action.implictywait(driver);
		webelement.clear();
		action.implictywait(driver);
		webelement.sendKeys(FullName);
		action.implictywait(driver);
		log.info("It's entering the user email Address");
		} catch (Exception e) {

		}
	}

	@Then("^Enter Email address as \"([^\"]*)\"\\.$")
	public void Enter_the_Email_address_as(String emailAddress) {
		try {
			webelement = driver.findElement(SignUpObject.Email);
			action.implictywait(driver);
			js.executeScript("arguments[0].click();", webelement);
			action.implictywait(driver);
			webelement.clear();
			action.implictywait(driver);
			webelement.sendKeys(emailAddress);
			action.implictywait(driver);
			log.info("It's entering the email Address");
		} catch (Exception e) {

		}
	}

	@Then("^Enter password as \"([^\"]*)\"\\.$")
	public void Enter_the_password_as(String password) {
	try {
		webelement = driver.findElement(SignUpObject.Password);
		action.implictywait(driver);
		js.executeScript("arguments[0].click();", webelement);
		action.implictywait(driver);
		webelement.clear();
		action.implictywait(driver);
		webelement.sendKeys(password);
		action.implictywait(driver);
		log.info("It's entering the password");
	} catch (Exception e) {

	}
	}

	@Then("^Enter repeat_password as \"([^\"]*)\"\\.$")
	public void Enter_the_repeat_password_as(String Confirm_pswd) {
		try {
			webelement = driver.findElement(SignUpObject.Repeatpassword);
			js.executeScript("arguments[0].click();", webelement);
			action.implictywait(driver);
			webelement.clear();
			action.implictywait(driver);
			webelement.sendKeys(Confirm_pswd);
			action.implictywait(driver);
			log.info("It's entering the confirm password");
		} catch (Exception e) {
		}
	}

	@Then("^click on save button\\.$")
	public void click_on_the_save_button() throws InterruptedException {

		webelement = driver.findElement(SignUpObject.Save);
	//	js.executeScript("scroll(0,400);");
		Thread.sleep(1000);
		webelement.click();
		//js.executeScript("arguments[0].click();", webelement);
		Thread.sleep(1000);

	

	}
	@Then("^Verify \"([^\"]*)\" validation message for Full Name\\.$")
	public void Verify_for_validation_message_for_user_Full_Name(String FullNameval) {
		try {
			WebElement FName_Error = driver.findElement(SignUpObject.Full_NameVal);
			if (FName_Error.isEnabled()) {
				String Pass_validation = driver.findElement(SignUpObject.Full_NameVal).getText();
				Assert.assertEquals(Pass_validation, FullNameval);
				driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			}
		} catch (Exception e) {
			e.printStackTrace();

		}
	}

	@Then("^Verify \"([^\"]*)\" validation message for user email address\\.$")
	public void Verify_for_validation_message_for_user_user_email_address(String email) {

		WebElement Email_error = driver.findElement(SignUpObject.Email_AddressVal);
		if (Email_error.isEnabled()) {
			String Email_validation = driver.findElement(SignUpObject.Email_AddressVal).getText();
			Assert.assertEquals(Email_validation, email);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		}

	}

	@Then("^Verify \"([^\"]*)\" validation message for password\\.$")
	public void verify_for_validation_message_for_password(String passwordVal) {
		try {

			WebElement password_Error = driver.findElement(SignUpObject.password_errormessage);
			if (password_Error.isEnabled()) {
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
			WebElement Rpassword_Error= driver.findElement(SignUpObject.repeat_errormessage);
			if (Rpassword_Error.isEnabled()) {
				System.out.println("qa checking " + repeatVal );
				String repeat_validation = driver.findElement(SignUpObject.repeat_errormessage).getText();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				System.out.println("element text get value" + repeat_validation);
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

			WebElement SigunUp_Error = driver.findElement(SignUpObject.Signup_errormessage);
			if (SigunUp_Error.isEnabled()) {
				String error_validation = driver.findElement(SignUpObject.Signup_errormessage).getText();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				Assert.assertEquals(error_validation, Error);
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//				System.out.println("get value" + error_validation);
//				System.out.println(Error);
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

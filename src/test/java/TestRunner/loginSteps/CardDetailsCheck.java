package TestRunner.loginSteps;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;

import ObjectRepository.AddingObject;
import ObjectRepository.CardDetailsObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class CardDetailsCheck extends SetupClass {
 PerformAction wait = new PerformAction();
 Actions act = new Actions(driver);
 JavascriptExecutor js = (JavascriptExecutor)driver;
	@Then("^Select the payment option as a pay with card\\.$")
	public void Select_payment_option_as_card() {
		driver.findElement(AddingObject.pay_with_card).click();
		wait.implictywait(driver);
	}

	@Then("^Enter Name on card as \"([^\"]*)\"\\.$")
	public void Enter_Name_on_Card(String cardName) {
		webelement = driver.findElement(AddingObject.cardName);
		webelement.sendKeys(cardName);
		wait.implictywait(driver);
	}

	@Then("^Enter Card Number as \"([^\"]*)\"\\.$")
	public void Enter_Card_Number(String cardNumber) {
		webelement = driver.findElement(AddingObject.cardNumber);
		webelement.sendKeys(cardNumber);
		wait.implictywait(driver);
	}

	@Then("^Enter Security number as \"([^\"]*)\"\\.$")
	public void Enter_Security_Number(String Cvv) {
		webelement = driver.findElement(AddingObject.cardCVV);
		webelement.sendKeys(Cvv);
		wait.implictywait(driver);
	}

	@Then("^Enter Card Expiry date as \"([^\"]*)\"\\.$")
	public void card_Expiry_date(String Date) throws InterruptedException {
		webelement = driver.findElement(AddingObject.ExpMonth);
		webelement.sendKeys(Date);
		wait.implictywait(driver);

	}

	@Then("^Enter Card Expiry year as \"([^\"]*)\"\\.$")
	public void card_Expiry_year(String year) throws InterruptedException {
		webelement = driver.findElement(AddingObject.ExpYear);
		webelement.sendKeys(year);
		wait.implictywait(driver);

	}

	@Then("^Click on drop-down filed\\.$")
	public void click_drop_down_filed() throws InterruptedException {
		webelement = driver.findElement(AddingObject.billingAddress);
		webelement.click();
		wait.implictywait(driver);
		act.sendKeys("yes").build().perform();
		wait.implictywait(driver);
		act.sendKeys(Keys.ENTER).build().perform();
		wait.implictywait(driver);

	}

	@Then("^Click on payment continue CTA\\.$")
	public void payment_continue() {
		driver.findElement(AddingObject.payment_continue).click();
		wait.implictywait(driver);

	}

	@Then("^Verify \"([^\"]*)\" validation message for CardName\\.$")
	public void Card_name_val(String cardName) {
		boolean isCardName = driver.findElements(CardDetailsObject.Cardname_empty).size() > 0;
		if (isCardName) {
			String cardNameName_validation = driver.findElement(CardDetailsObject.Cardname_empty).getText();
			Assert.assertEquals(cardNameName_validation, cardName);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for cardNumber\\.$")
	public void cardNumber_val(String cardNumber) {
		boolean isCardNumber = driver.findElements(CardDetailsObject.Cardnumber_empty).size() > 0;
		if (isCardNumber) {
			String cardNumber_validation = driver.findElement(CardDetailsObject.Cardnumber_empty).getText();
			Assert.assertEquals(cardNumber_validation, cardNumber);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for Security number\\.$")
	public void Security_Number_val(String security) {
		boolean isSecurity = driver.findElements(CardDetailsObject.Security_empty).size() > 0;
		if (isSecurity) {
			String Security_validation = driver.findElement(CardDetailsObject.Security_empty).getText();
			Assert.assertEquals(Security_validation, security);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for Expiry date\\.$")
	public void Expiry_date_val(String cardDate) {
		boolean isCardDate = driver.findElements(CardDetailsObject.CardDate_empty).size() > 0;
		if (isCardDate) {
			String FullName_validation = driver.findElement(CardDetailsObject.CardDate_empty).getText();
			Assert.assertEquals(FullName_validation, cardDate);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for Expiry year\\.$")
	public void Card_Expiry_year_val(String CardYear) {
		boolean isCardName = driver.findElements(CardDetailsObject.CardYear_empty).size() > 0;
		if (isCardName) {
			String FullName_validation = driver.findElement(CardDetailsObject.CardYear_empty).getText();
			Assert.assertEquals(FullName_validation, CardYear);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

}

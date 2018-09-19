package TestRunner.loginSteps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import ObjectRepository.AddingObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class DAddressCheckOut extends SetupClass {
	 PerformAction wait = new PerformAction();
	 Actions act = new Actions(driver);
	 JavascriptExecutor js = (JavascriptExecutor)driver;
	@Then("^Select the delivery stage address country from drop down\\.$")
	public void delivery_stage_address_country() throws InterruptedException {
		Select DeliveryCountry = new Select(driver.findElement(AddingObject.delivery_Country));
		DeliveryCountry.selectByVisibleText("United Kingdom");
		wait.implictywait(driver);
		Thread.sleep(1000);
	}

	@Then("^Enter Full name as \"([^\"]*)\"\\.$")
	public void Enter_Full_name_as(String Fname) {
		webelement = driver.findElement(AddingObject.Full_name);
		webelement.sendKeys(Fname);
		wait.implictywait(driver);
	}

	@Then("^Enter Telephone number as \"([^\"]*)\"\\.$")
	public void Enter_Telephone_number_as(String telephone) {
		webelement = driver.findElement(AddingObject.Telephone_number);
		webelement.sendKeys(telephone);
		wait.implictywait(driver);
	}

	@Then("^Enter Address1 as \"([^\"]*)\"\\.$")
	public void Enter_Address1_as(String Address1) {
		webelement = driver.findElement(AddingObject.Address1);
		webelement.sendKeys(Address1);
		wait.implictywait(driver);
	}

	@Then("^Enter Town name as \"([^\"]*)\"\\.$")
	public void Enter_Town_as(String town) {
		webelement = driver.findElement(AddingObject.town);
		webelement.sendKeys(town);
		wait.implictywait(driver);
	}

	@Then("^Enter PostCode as \"([^\"]*)\"\\.$")
	public void Enter_PostCode_as(String postCode) {
		webelement = driver.findElement(AddingObject.postcode);
		webelement.sendKeys(postCode);
		wait.implictywait(driver);
	}

	@And("^Verify \"([^\"]*)\" validation message for Full name\\.$")
	public void Full_name_val(String FullName) {
		boolean isFullName = driver.findElements(AddingObject.FullName_filed).size() > 0;
		if (isFullName) {
			String FullName_validation = driver.findElement(AddingObject.FullName_filed).getText();
			Assert.assertEquals(FullName_validation, FullName);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for Telephone\\.$")
	public void Telephone_number_val(String Tel) {
		boolean isTelephone = driver.findElements(AddingObject.Telephone_field).size() > 0;
		if (isTelephone) {
			String Telephone_validation = driver.findElement(AddingObject.Telephone_field).getText();
			Assert.assertEquals(Telephone_validation, Tel);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for Address1\\.$")

	public void Address1_number_val(String Address1) {
		boolean isAddress1 = driver.findElements(AddingObject.Address1_field).size() > 0;
		if (isAddress1) {
			String Address1_validation = driver.findElement(AddingObject.Address1_field).getText();
			Assert.assertEquals(Address1_validation, Address1);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for Town Name\\.$")

	public void Town_name_val(String TownName) {
		boolean isTown_filed = driver.findElements(AddingObject.Town_filed).size() > 0;
		if (isTown_filed) {
			String Town_validation = driver.findElement(AddingObject.Town_filed).getText();
			Assert.assertEquals(Town_validation, TownName);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@And("^Verify \"([^\"]*)\" validation message for PostCode\\.$")
	public void PostCode_val(String PostCode) {
		boolean isPostCode = driver.findElements(AddingObject.PostCode_field).size() > 0;
		if (isPostCode) {
			String PostCode_validation = driver.findElement(AddingObject.Telephone_field).getText();
			Assert.assertEquals(PostCode_validation, PostCode);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

}

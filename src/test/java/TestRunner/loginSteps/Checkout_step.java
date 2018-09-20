package TestRunner.loginSteps;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import ObjectRepository.AddingObject;
import TestRunner.SetupClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import webApp.PerformAction;

public class Checkout_step extends SetupClass {
	PerformAction wait = new PerformAction();
	Actions act = new Actions(driver);
	JavascriptExecutor js = (JavascriptExecutor) driver;

	@Given("^Hover on primary navigation items\\.$")
	public void hover_on_primary_navigation() throws InterruptedException {

		boolean isPresent = driver.findElements(AddingObject.Home_Accessories).size() > 0;
		if (isPresent) {
			WebElement et = driver.findElement(AddingObject.Home_Accessories);
			act.moveToElement(et).build().perform();
			Thread.sleep(2000);
			wait.implictywait(driver);
			Thread.sleep(1000);

		} else {
			webelement = driver.findElement(AddingObject.Menu_icon);
			webelement.click();
			Thread.sleep(1000);
			WebElement test1 = driver
					.findElement(By.cssSelector("#primary-nav>li>a[data-href='/shop/home-accessories']"));
			test1.click();
			Thread.sleep(1000);
		}

	}

	@Then("^click any specfic item\\.$")
	public void click_any_specfic_item() throws InterruptedException {
		driver.findElement(AddingObject.Wall_Hooks).click();
		wait.implictywait(driver);
		Thread.sleep(1000);
	}

	@Then("^Filter the item to low price\\.$")
	public void Filter_from_low() throws InterruptedException {
		boolean isobject = driver.findElements(AddingObject.SortBy).size()> 0;
		if (isobject) {
			((JavascriptExecutor) driver).executeScript("scroll(0,200);");
			Thread.sleep(2000);
			WebElement	object = driver.findElement(AddingObject.SortBy);
			object.click();
				wait.implictywait(driver);
				act.sendKeys("Low price").build().perform();
				wait.implictywait(driver);
				 act.sendKeys(Keys.ENTER).build().perform();
				 wait.implictywait(driver);
			
			}else {
				System.out.println("test1245");
				webelement= driver.findElement(AddingObject.sort_mobile);
				webelement.click();
               Thread.sleep(1000);
				wait.implictywait(driver);
				driver.findElement(AddingObject.Low_price).click();
				wait.implictywait(driver);
				driver.findElement(AddingObject.Refine_product).click();
				wait.implictywait(driver);

			
		}
	}

	@Then("^Select a item from the product\\.$")
	public void select_item() throws InterruptedException {
		webelement = driver.findElement(AddingObject.select_item);
		wait.implictywait(driver);
		webelement.click();
		wait.implictywait(driver);
		Thread.sleep(2000);

	}

	@Then("^Add the product into the cart\\.$")
	public void Add_any_product_cart() throws InterruptedException {
		webelement = driver.findElement(AddingObject.Add_Cart);
		webelement.click();
		Thread.sleep(2000);

	}

	@Then("^Click on the Add to cart bag\\.$")
	public void Click_Add_cart_bag() throws InterruptedException {
		webelement = driver.findElement(AddingObject.Check_Bag);
		js.executeScript("arguments[0].click();", webelement);
		Thread.sleep(1000);

	}

	@Then("^Select the country from drop down\\.$")
	public void select_the_country() throws InterruptedException {
		Select drpCountry = new Select(driver.findElement(AddingObject.select_country));
		drpCountry.selectByVisibleText("United Kingdom");
		wait.implictywait(driver);
		Thread.sleep(1000);
	}

	@Then("^Click on proceed to checkout button\\.$")
	public void Click_any_proceed_checkout_button() {
		webelement = driver.findElement(AddingObject.Chekout);
		webelement.click();
		wait.implictywait(driver);
	}

	@Then("^Enter the Email as guest \"([^\"]*)\"\\.$")
	public void Enter_Email_as_guest(String email) {
		webelement = driver.findElement(AddingObject.enter_email);
		webelement.clear();
		webelement.sendKeys(email);
		wait.implictywait(driver);
	}

	@And("^Verify \"([^\"]*)\" message for invalid credentials\\.$")

	public void verify_guestEmail_address(String Gmail) {

		boolean Email_val = driver.findElements(AddingObject.Guest_Email).size() > 0;
		if (Email_val) {
			String Gmail_validation = driver.findElement(AddingObject.Guest_Email).getText();
			Assert.assertEquals(Gmail_validation, Gmail);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		}
	}

	@Then("^Click on Continue CTA\\.$")
	public void Click_on_Continue_Cta() {
		driver.findElement(AddingObject.continue_Guest).click();

	}

	@Then("^Click on Continue Button\\.$")
	public void Click_Continue_Button() {
		driver.findElement(AddingObject.Continue).click();

	}

	@Then("^Accept the term and condition chekbox\\.$")
	public void Accept_term_and_condition() {
		driver.findElement(AddingObject.Termcondition).click();
		wait.implictywait(driver);

	}
}
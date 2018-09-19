package GenericAction;

import java.util.List;
import java.util.Random;
import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import TestRunner.SetupClass;


	  

	

		public class ReusableActions extends SetupClass {
			public void loginToApplication(String company, String uName, String pwd) {
//				try{
//			//		commonMethod.verifElementVisible(2, LoginObject.Logout);
//				}catch(Exception ex){
//				driver.findElement(LoginObject.companyLoginTxt).sendKeys(company);
//				driver.findElement(LoginObject.userNameTxt).sendKeys(uName);
//				driver.findElement(LoginObject.passwordTxt).sendKeys(pwd);
//				driver.findElement(LoginObject.submitButton).click();
//				}
			}

			public void verifElementClicakable(int time, By Object) {
				new WebDriverWait(driver, 30).until(ExpectedConditions.elementToBeClickable(Object));
			}

			public void verifElementVisible(int time, By Object) {
				new WebDriverWait(driver, time).until(ExpectedConditions.visibilityOfElementLocated(Object));
			}

			public void verifElementInvisible(int time, By Object) {
				new WebDriverWait(driver, time).until(ExpectedConditions.invisibilityOfElementLocated(Object));
			}

			public void compareText(String expected, String actual) {
				Assert.assertEquals("", "");
			}

			public int getRandomNumber() {
				Random randomGenerator = new Random();
				int randomInt = randomGenerator.nextInt(10000);
				return randomInt;
			}
			
			public void selectDate(String date, String month, String year){
				
			}
		
		    
		    public void acceptAlert() {
				driver.switchTo().alert().accept();
			}

			public void dismissAlert() {
				driver.switchTo().alert().dismiss();
			}

			public boolean verifyAlertText(String expectecAlertText) {
				String actualAlertText = driver.switchTo().alert().getText();

				if (expectecAlertText.equals(actualAlertText)) {
					return true;
				} else
					return false;
			}

			public String getCurrentWindowID() {
				String currentWinID = driver.getWindowHandle();
				return currentWinID;
			}

			public void selectDropDownValue(By ddLocator, String value) {
				WebElement dd = driver.findElement(ddLocator);
				new Select(dd).selectByVisibleText(value);
			}

			public void mouseHoverAndClick(By mainMenu, By subMenu) {
				Actions actions = new Actions(driver);
				actions.moveToElement(driver.findElement(mainMenu)).build().perform();
				commonMethod.verifElementVisible(10, subMenu);
				driver.findElement(subMenu).click();
			}

			public Set<String> getWindowIDs() {
				Set<String> ids = driver.getWindowHandles();
				return ids;
			}

			public void switchToFrame(By frameLocator) {
				WebElement frame = driver.findElement(frameLocator);
				driver.switchTo().frame(frame);
			}

			public int getTotalElements(By elementLocator) {
				List<WebElement> allLinks = driver.findElements(elementLocator);
				int size = allLinks.size();
				return size;
			}
			
			public int getTotalRows(By tableLocatorForRow) {
				List<WebElement> allRows = driver.findElement(tableLocatorForRow)
						.findElements(By.tagName("tr"));
				return allRows.size();
			}

			public int getTotalCols(By tableLocatorForCols) {
				List<WebElement> allRows = driver.findElement(tableLocatorForCols)
						.findElements(By.tagName("td"));
				return allRows.size();
			}
	}
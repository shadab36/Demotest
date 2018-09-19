package TestHelper;

import org.junit.Assert;
import org.openqa.selenium.By;

import TestRunner.SetupClass;

public class LoginHelper extends SetupClass {

	public void compareTextForLoginValidations(String fieldValue, String expected, By locator) {
		/*if (fieldValue=="" || fieldValue== null) {*/
		if (fieldValue.equals("")) {
			System.out.println("feild value is = "+fieldValue);
			commonMethod.verifElementVisible(5, locator);
			String getText = driver.findElement(locator).getText();
			System.out.println("***************val mssg is = " + getText);
			Assert.assertEquals(expected, getText);
		}else{
			commonMethod.verifElementInvisible(2, locator);
		}			
	}
	
	public void verifyCommonLoginValMessage(String commonVal, String compName, String uName, String pwd){
		if(!(compName.isEmpty()) && !(uName.isEmpty()) && !(pwd.isEmpty())){
			System.out.println("&&&&&&&&&&&&&&");
		//	commonMethod.verifElementVisible(10, LoginObject.InvalidCreden);
			//String actualCommonErrMsg = driver.findElement(LoginObject.InvalidCreden).getText();
			//System.out.println("Common error======="+actualCommonErrMsg);
		//	Assert.assertEquals(commonVal, actualCommonErrMsg);
//			driver.findElement(LoginObject.closeErrPopupBtn).click();
//			commonMethod.verifElementInvisible(5, LoginObject.closeErrPopupBtn);
			
		}
		}
	

}
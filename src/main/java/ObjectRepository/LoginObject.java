package ObjectRepository;

import org.openqa.selenium.By;

public class LoginObject {
	
	public static By email=By.id("email");
	public static By password=By.id("password");
	public static By login_Button=By.id("loginButton");
	public static By Loginval=By.xpath("//*[@class='alert alert-danger']/p[1]");
}

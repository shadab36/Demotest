package ObjectRepository;

import org.openqa.selenium.By;

public class LogoutObject {
//Logout object
	
	public static By user_profile=By.cssSelector("#user-nav>li.dropdown.my-account>a");
	public static By logout=By.cssSelector("#user-nav > li.dropdown.my-account.open>ul>li>[href='/logout']");
}

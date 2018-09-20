package ObjectRepository;

import org.openqa.selenium.By;

public class SignUpObject {

	// the Element path
	public static By login_register = By.cssSelector("#user-nav>li.dropdown.my-account>a");
	public static By CreateAccount = By.cssSelector("a.btn.btn-black");
	public static By FullName = By.id("account_creation_contact_name");
	public static By Telephone = By.id("account_creation_contact_telephone");
	public static By Email = By.id("account_creation_contact_email");
	public static By Password = By.id("account_creation_contact_user_password_new_password_first");
	public static By Repeatpassword = By.id("account_creation_contact_user_password_new_password_second");
	public static By Save = By.id("account_creation_save_details");
	public static By See_Name = By.cssSelector("#user-nav>li:nth-child(2)");
	public static By check_logout_cta = By.cssSelector("#user-nav>li:nth-child(2)>ul>li:last-child");
	
	// validation placeholder message element
	public static By Full_NameVal = By.id("afie_account_creation_contact_name");
	public static By Email_AddressVal = By.id("afie_account_creation_contact_email");
	public static By Signup_errormessage = By.cssSelector("#main>div>div:nth-child(1)>form>div>p");
	public static By password_errormessage = By.cssSelector("#afie_account_creation_contact_user_password_new_password_first>span");
	public static By repeat_errormessage = By.cssSelector("#afih_account_creation_contact_user_password_new_password_first");
    public static By Already_register=By.cssSelector(".col-xs-12>p");
}

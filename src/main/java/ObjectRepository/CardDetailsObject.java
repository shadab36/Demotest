package ObjectRepository;

import org.openqa.selenium.By;

public class CardDetailsObject {
	  // validation message object on the Payment section
	  
	  public static By Cardname_empty=By.cssSelector("#afie_payment_card_name");
	  public static By Cardname_enter=By.cssSelector("#afie_payment_card_name");
	  public static By Cardnumber_empty=By.cssSelector("#afie_card_number");
	  public static By Cardnumber_enter=By.cssSelector("#afg_payment_card_name.has-success>span.form-control-feedback");
	  public static By Error_message_card=By.cssSelector(".form-after-submit-error.alert.alert-danger.collapse>p");
	  public static By Security_empty=By.cssSelector("#afg_card_cvv.has-error>div");
	  
	  public static By CardDate_empty=By.cssSelector("#afg_payment_expiry_date.has-error>div:last-child");
	  public static By CardYear_empty=By.cssSelector("#afg_payment_expiry_date.has-error>div:last-child");
}

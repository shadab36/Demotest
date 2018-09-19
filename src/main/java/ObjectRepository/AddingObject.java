package ObjectRepository;

import org.openqa.selenium.By;

public class AddingObject {
	
	//Hover Home Accessories 
	
 public static By Home_Accessories=By.cssSelector(".navigation>div>div:last-child>ul>li>a[href='/shop/home-accessories']"); 
 // select any product from the home accessories as Wall Hooks
 public static By Wall_Hooks=By.cssSelector(".secondary-nav__link[href='/shop/hooks']");

 public static By SortBy=By.cssSelector(".sticky-mobile-sort-filter-bar-icon.icon.icon-sliders");
  
// public static By Additem=By.cssSelector(cssSelector)
 public static By select_item=By.cssSelector("#pager-shop-products>div[data-slug='magnetter-key-letter-holder-white']");
  public static By Add_Cart=By.cssSelector("#appbundle_product_add_type_submit[title='Add to bag']");
  public static By Check_Bag=By.id("header-cart-item-count");
  public static By select_country=By.id("cartcountry");
  public static By Chekout=By.cssSelector(".cart-accepted-payment-methods>div>div>button[value='SecPay']");
  public static By enter_email=By.id("welcome_stage_email");
  public static By continue_Guest=By.id("welcome_stage_continue");
  public static By delivery_Country=By.id("delivery_stage_address_country");
  public static By Full_name=By.id("delivery_stage_address_name");
  public static By Telephone_number=By.id("delivery_stage_address_telephone");
  public static By Address1=By.id("delivery_stage_address_address1");
  public static By town=By.id("delivery_stage_address_town");
  public static By postcode=By.id("delivery_stage_address_postcode");
  public static By Continue=By.id("delivery_stage_continue");
  public static By pay_with_card=By.cssSelector("#payment>fieldset:nth-child(2)>div>div:nth-child(1)>div");
  public static By cardName=By.id("payment_card_name");
  public static By cardNumber=By.id("card_number");
  public static By cardCVV=By.id("card_cvv");
  public static By ExpMonth=By.id("payment_expiry_date_expiry_month");
  public static By ExpYear=By.cssSelector("#payment_expiry_date_expiry_year.form-control");
  public static By billingAddress=By.id("payment_is_billing_equal_delivery");
  public static By payment_continue=By.id("payment_continue");
  public static By Termcondition=By.cssSelector("#afg_confirm_stage_agreed_terms>input[type='checkbox']");
  
  // validation message for Guest Email Address
  
  public static By Guest_Email=By.cssSelector(".form-post-item-feedback>span");
  // validation message object on the delivery section
  
  public static By FullName_filed=By.cssSelector("#afie_delivery_stage_address_name:nth-child(1)");
  public static By FullName_enter=By.cssSelector("#afg_delivery_stage_address_name.has-success>span.form-control-feedback");	
  public static By Telephone_field=By.cssSelector("#afie_delivery_stage_address_telephone:nth-child(1)");
  public static By Telephone_enter=By.cssSelector("#afg_delivery_stage_address_telephone.has-success>span.form-control-feedback");
  public static By Address1_field=By.cssSelector("#afie_delivery_stage_address_town:nth-child(1)");
  public static By Address1_enter=By.cssSelector("#afg_delivery_stage_address_address1.has-success>span.form-control-feedback");
  public static By Town_filed=By.cssSelector("#afie_delivery_stage_address_town:nth-child(1)");
  public static By Town_enter=By.cssSelector("#afg_delivery_stage_address_town.has-success>span.form-control-feedback");
  
  
  public static By PostCode_field=By.cssSelector("#afg_delivery_stage_address_postcode>div>div>span");
  public static By PostCode_Enter=By.cssSelector("#afg_delivery_stage_address_postcode.has-success>span.form-control-feedback");
  
 


//Mobile devices Element
  
//menu icon
  public static By Menu_icon=By.cssSelector(".nav-trigger.js-hook-mobile-nav-trigger>i");
//sorting on mobile
  public static By Filter_Sort=By.id("open-mobile-filter");
 //low price filter
  public static By Low_price=By.cssSelector(".sort-by-item>a[href='/shop/hooks/sort/lowPrice']");  
//Refine
  public static By Refine_product=By.cssSelector("#close-mobile-filter");

  //sort
  public static By sort_mobile=By.id("products-sorts");
  
}

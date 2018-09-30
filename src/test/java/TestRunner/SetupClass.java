 package TestRunner;

import java.io.FileReader;
import java.net.URL;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

//import GenericAction.NewuserHelper
public class SetupClass {
	public static WebDriver driver;
	public static String AppURL;
	public static Properties property = new Properties(System.getProperties());
	public static String sauceURL;
	public static String browserName;
	public static String platformVersion;
	public static String platform;
	public static String browserVersion;
	public static String platformName;
	public static String deviceName;
	public static String deviceOrientation;
	public static Logger log;
	public static DesiredCapabilities capabilities;
	public static String Seleniumdriver;
	public static WebElement webelement;

	@BeforeClass
	public static void before_Class() throws Exception {

		PropertyConfigurator.configure("log4j.properties");
		log = Logger.getLogger("devpinoyLogger");
		property.load(new FileReader("F:\\ECOM_DemoTest\\DemoTest\\src\\main\\resources\\configure.properties"));
		AppURL = property.getProperty("App_url");
		sauceURL = property.getProperty("sauce_url");
		deviceName = property.getProperty("device_name");
		platformVersion = property.getProperty("platform_version");
		platformName = property.getProperty("platform_name");
		platform = property.getProperty("platform");
      
		// on source lab setup
		AppURL = property.getProperty("App_url");
		System.out.println("Bname=====" + AppURL);
		
		browserName = System.getenv("SELENIUM_BROWSER");
		platform = System.getenv("SELENIUM_PLATFORM");
		platformVersion = System.getenv("SELENIUM_VERSION");
		Seleniumdriver=System.getenv("SELENIUM_DRIVER");
		System.out.println("platform :"+ platform);
		System.out.println("BrowerName: "+  browserName);
		System.out.println("platform vesion: "+  platformVersion);
		System.out.println("seleniumDriver: "+ Seleniumdriver);
		DesiredCapabilities capability = new DesiredCapabilities();
		capability.setCapability("platform", platform);
		capability.setBrowserName(browserName);
		capability.setCapability("version", platformVersion);
		capability.setCapability("name",  "Login test");	
	    driver = new RemoteWebDriver(new URL(sauceURL), capability);
		Thread.sleep(1000);
		driver.get(AppURL);
		Thread.sleep(3000);
		try {
			WebDriverWait wait = new WebDriverWait(driver, 30);

			WebElement popup = driver.findElement(By.cssSelector(".close[aria-label='Close']"));
			wait.until(ExpectedConditions.elementToBeClickable(popup));
			if (popup.isEnabled()) {
				JavascriptExecutor jse = (JavascriptExecutor) driver;
				jse.executeScript("arguments[0].click();", popup);

			}
		} catch (Exception e) {
		}
		WebDriverWait wait = new WebDriverWait(driver, 40);
		WebElement close = driver.findElement(By.cssSelector(".cookie-message__close[href='#']"));
		wait.until(ExpectedConditions.elementToBeClickable(close));
		JavascriptExecutor jst = (JavascriptExecutor) driver;
		jst.executeScript("arguments[0].click();", close);
		Thread.sleep(1000);
	}

	@AfterClass
	public static void after_Class() throws InterruptedException {
		driver.quit();
		Thread.sleep(2000);

	}
}

package TestRunner;

import java.io.FileReader;
import java.net.URL;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
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
	// public static DesiredCapabilities capabilities;
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
		
		
		// data form here 
		AppURL = property.getProperty("base_url");
		System.out.println("Bname=====" + AppURL);
		System.out.println("run the script on sauce labs");
		//on browser
		System.out.println("test");
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
		capability.setCapability("name",  "Automation tests");
		driver = new RemoteWebDriver(new URL(sauceURL), capability);
		Thread.sleep(5000);
		AppURL = property.getProperty("App_url");
		System.out.println("Bname=====" + AppURL);
		driver.get(AppURL);
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".cookie-message__close[href='#']")).click();
		Thread.sleep(3000);

	}

	@AfterClass
	public static void after_Class() throws InterruptedException {
		driver.close();
		driver.quit();
		Thread.sleep(2000);

	}
}

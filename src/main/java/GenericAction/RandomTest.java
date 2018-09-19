package GenericAction;

import java.util.Random;

public class RandomTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Random rad = new Random();
		String qa="test@";
		String name =   ""+rad.nextInt(100) + "";
		System.out.println(name);
		String te=qa+name;
		System.out.println(te);
		
	}

}

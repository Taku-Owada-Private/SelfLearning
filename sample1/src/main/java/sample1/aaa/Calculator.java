package sample1.aaa;

public class Calculator {
	public int add (int a , int b) {
		return a + b ;
	}
	
	public int sub (int a , int b) {
		return a - b ;
	}
	
	public int mul (int a , int b) {
		return a * b ;
	}
	
	public float div(int a , int b) {
		if(b == 0) {
		throw new IllegalArgumentException("‘æ“ñˆø”‚É‚O‚ªw’è‚³‚ê‚Ü‚µ‚½");
		}
		return (float) a / b ;
	}
}

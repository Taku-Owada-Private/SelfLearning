package sample1.aaa;

import static org.junit.Assert.*;

import org.junit.Test;

public class CalculatorTest {

	@Test
	public void testAdd() {
		//オブジェクトを生成
		Calculator cal = new Calculator();
		//期待値
		int expected = 5;
		//実測値
		int actual = cal.add(2, 3);
		//期待値と実測値の比較
		assertEquals(actual, expected);
	}

	@Test
	public void testSub() {
		Calculator cal = new Calculator();
		int expected = 1;
		int actual = cal.sub(3, 2);
		assertEquals(actual, expected);
	}

	@Test
	public void testMul() {
		Calculator cal = new Calculator();
		int expected = 6;
		int actual = cal.mul(2, 3);
		assertEquals(actual, expected);
	}

	@Test
	public void testDiv() {
		Calculator cal = new Calculator();
		float expected =  4;
		float actual = cal.div(16, 4);
		assertEquals(actual, expected);
	}

}

package TP5;

import static org.junit.Assert.*;

import java.util.ArrayList;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;

import main.LinkedList;
import main.LinkedListInterface;
import main.MyList;
import main.MyListInterface;
import main.Operator;
import main.SetCalculator;
import main.SetCalculatorInterface;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class test_linkedList {

	MyListInterface myList = new MyList();
	LinkedListInterface list;
	ArrayList<Object> val1;
	ArrayList<Object> val2;
	SetCalculatorInterface myCalculator;



	@Before
	public void setUp() throws Exception {

		this.myList = new MyList();
		this.list = new LinkedList();
		this.val1 = new ArrayList<Object>();
		this.val2 = new ArrayList<Object>();
		this.myCalculator= new SetCalculator();


		this.val1.add(4);
		this.val1.add(1);
		this.val1.add(1);
		this.val1.add(2);

		this.val2.add(1);
		this.val2.add(1);
		this.val2.add(5);
		this.val2.add(5);
	}

	@After
	public void tearDown() throws Exception {

	}
	/***********************************************
	* niveau de test 2
	***********************************************/
	//method getAt() from MyList is tested here
	@Test
	public void test01() throws Exception {
		this.myList.add(val1);
		this.myList.add(val2);
		assertEquals("size of myList is 2", this.myList.getSize(), 2);
		assertEquals("val2 is at position 1", this.val2, this.myList.getAt(1));
	}

	//method setAt from MyList is tested here
	@Test
	public void test02() throws Exception {
		this.myList.add(val1);
		this.myList.add(val2);
		this.myList.setAt(val2, 0);
		assertEquals("size of myList is 2", this.myList.getSize(), 2);
		assertEquals("val2 is at position 0 as well", this.val2, this.myList.getAt(0));
	}

	//method removeItem from MyList is tested here
	@Test
	public void test03() throws Exception {
		this.myList.add(val1);
		this.myList.add(val2);
		this.myList.removeItem(val1);
		assertEquals("size of myList is 1", this.myList.getSize(), 1);
		assertEquals("val2 is remaining", this.val2, this.myList.getAt(0));
	}

	//method removeAt from MyList is tested here
	@Test
	public void test04() throws Exception {
		this.myList.add(val1);
		this.myList.add(val2);
		this.myList.removeAt(0);
		assertEquals("size of myList is 1", this.myList.getSize(), 1);
		assertEquals("val2 is remaining", this.val2, this.myList.getAt(0));
	}

	//method add from MyList is tested here
	@Test
	public void test05() throws Exception {
		this.myList.add(val1);
		assertEquals("size of myList is 1", this.myList.getSize(), 1);
		assertEquals("val1 is the list added", this.val1, this.myList.getAt(0));
	}

	//method reset from MyList is tested here
	@Test
	public void test06() throws Exception {
		this.myList.reset();
		assertEquals("default size of myList", this.myList.getSize(), 0);
	}

	//method isSuperset from SetCalculator is tested here
	@Test
	public void test07() throws Exception {
		ArrayList<Object> result = new ArrayList<Object>();
		result.add(1);
		assertTrue("val1 is superset of 1", this.myCalculator.isSuperset(val1, result).get(0).toString() == "true");
		assertTrue("val2 is superset of 1", this.myCalculator.isSuperset(val2, result).get(0).toString() == "true");
		result = new ArrayList<Object>();
		result.add(3);
		assertFalse("val1 is not superset of 3", this.myCalculator.isSuperset(val1, result).get(0).toString() == "true");
		assertFalse("val1 is not subset of val2", this.myCalculator.isSuperset(val1, val2).get(0).toString() == "true");

	}

	//method isSubset from SetCalculator is tested here
	@Test
	public void test08() throws Exception {
		ArrayList<Object> result = new ArrayList<Object>();
		result.add(1);
		assertTrue("1 is subset of val1", this.myCalculator.isSubset(result, val1).get(0).toString() == "true");
		assertTrue("1 is subset of val2", this.myCalculator.isSubset(result, val2).get(0).toString() == "true");
		result = new ArrayList<Object>();
		result.add(3);
		assertFalse("3 is not subset of val1", this.myCalculator.isSubset(result, val1).get(0).toString() == "true");
		assertFalse("3 is not subset of val2", this.myCalculator.isSubset(result, val2).get(0).toString() == "true");

	}

	//method symDifference from SetCalculator is tested here
	@Test
	public void test09() throws Exception {
		ArrayList<Object> result = this.myCalculator.symDifference(this.val1, this.val2);
		assertTrue("items of result should be in val1", result.contains(2));
		assertTrue("items of result should be in val1", result.contains(4));
		assertTrue("items of result should be in val1", result.contains(5));

	}

	//method difference from SetCalculator is tested here
	@Test
	public void test10() throws Exception {
		ArrayList<Object> result = this.myCalculator.difference(this.val1, this.val2);
		for(int i = 0; i < result.size(); i++) {
			assertTrue("items of result should be in val1", val1.contains(result.get(i)));
			assertFalse("items of result should not be in val2", val2.contains(result.get(i)));
		}
	}


	//method intersection from SetCalculator is tested here
	@Test
	public void test11() throws Exception {
		ArrayList<Object> result = this.myCalculator.intersection(this.val1, this.val2);
		for(int i = 0; i < result.size(); i++) {
			assertTrue("items of result should be in val1", val1.contains(result.get(i)));
			assertTrue("items of result should be in val2", val2.contains(result.get(i)));
		}
	}

	//method union from SetCalculator is tested here
	@Test
	public void test12() throws Exception {
		ArrayList<Object> result = this.myCalculator.union(this.val1, this.val2);
		for(int i = 0; i < val1.size(); i++) {
			assertTrue("items of val1 should be in result", result.contains(val1.get(i)));
		}
		for(int i = 0; i < val2.size(); i++) {
			assertTrue("items of val2 should be in result", result.contains(val2.get(i)));
		}
	}

	/***********************************************
	* niveau de test 3
	***********************************************/
	//method build from linkedlist is tested here
	@Test
	public void test13() throws Exception {
		ArrayList<Object> result = new ArrayList<Object>();
		result.add(4);
		result.add(1);
		result.add(1);
		result.add(2);
		result.add(5);
		result.add(5);

		this.myList = this.list.build(Operator.UNION, this.val1, this.val2);

		assertEquals("should have size of expected result", result.size(), this.myList.getAt(2).size());
		for(int i = 0; i < result.size(); i++) {
			assertEquals("should be same data", result.get(i), this.myList.getAt(2).get(i));
		}

	}
}

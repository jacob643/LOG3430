package TP6;

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
public class linkedlisttests {

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

	//method build from linkedlist is tested here (in ascending order)
	@Test
	public void test13() throws Exception {
		ArrayList<Object> result = new ArrayList<Object>();
		result.add(1);
		result.add(1);
		result.add(2);
		result.add(4);
		result.add(5);
		result.add(5);

		this.myList = this.list.build(Operator.UNION, this.val1, this.val2, true);

		assertEquals("should have size of expected result", result.size(), this.myList.getAt(2).size());
		for(int i = 0; i < result.size(); i++) {
			assertEquals("should be same data", result.get(i), this.myList.getAt(2).get(i));
		}
	}

	//method build from linkedlist is tested here (in descending order)
	public void test14() throws Exception {
		ArrayList<Object> result = new ArrayList<Object>();
		result.add(5);
		result.add(5);
		result.add(4);
		result.add(2);
		result.add(1);
		result.add(1);

		this.myList = this.list.build(Operator.UNION, this.val1, this.val2, true);

		assertEquals("should have size of expected result", result.size(), this.myList.getAt(2).size());
		for(int i = 0; i < result.size(); i++) {
			assertEquals("should be same data", result.get(i), this.myList.getAt(2).get(i));
		}
	}
}

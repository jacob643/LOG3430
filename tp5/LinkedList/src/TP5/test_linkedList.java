package TP5;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class test_linkedList {

	@Before
	public void setUp() throws Exception {
	}

	@After
	public void tearDown() throws Exception {
	}

	
	@Test
	public void test2() {
		System.out.println("2");
	}
	
	@Test
	public void test1() {
		assertEquals("should initialize empty", 0, 0);
		System.out.println("1");
		
	}

}

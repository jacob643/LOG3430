package edu.princeton.cs.algs4;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import edu.princeton.cs.algs4.Queue;

class TP3_MADUM {
	Queue<Integer> q;

	@BeforeEach
	void setUp() throws Exception {
		q = new Queue<Integer>();
	}

	@AfterEach
	void tearDown() throws Exception {
	}
	
	/**
	 * Test for n attribute
	 */
	@Test
	void Sequence1() {
		// Queue() -> size() -> enqueue(2) -> size() -> dequeue() -> size()
		assertEquals(q.size(), 0, "should initialize empty");
		q.enqueue(2);
		assertEquals(q.size(), 1, "should have incremented size of 1");
		q.dequeue();
		assertEquals(q.size(), 0, "should have decremented size to 0");
	}
	
	@Test
	void Sequence2() {
		// Queue() -> size() -> dequeue() -> size() -> enqueue(2) -> size()  
		assertEquals(q.size(), 0, "should initialize empty");
		assertThrows(Exception.class, () -> {
			q.dequeue();
		} , "Should be impossible to dequeue if size is 0");
		assertEquals(q.size(), 0, "should still be empty");
		q.enqueue(2);
		assertEquals(q.size(), 1, "should have incremented size of 1");
	}
	
	/**
	 * Test for first attribute
	 */
	@Test
	void Sequence3() {
		// Queue() -> peek() -> enqueue(2) -> peek() -> dequeue() -> peek()
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to peek() when empty");
		q.enqueue(2);
		int val = q.peek();
		assertEquals(val, 2, "first should contain the value 2");
		val = q.dequeue();
		assertEquals(val, 2, "first dequeue have returned the value 2");
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to peek when empty");
		assertEquals(q.toString(),"", "the string fct should return an empty sting" );
		assertEquals(q.isEmpty(), true, "q should be empty");
	}
	
	@Test
	void Sequence4() {
		// Queue() -> peek() -> dequeue() -> peek() -> enqueue(2) -> peek()
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to peek() when empty");
		assertThrows(Exception.class, () -> {
			q.dequeue();
		}, "should not be possible to dequeue while empty");
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to peek() when empty");
		q.enqueue(2);
		int val = q.peek();
		assertEquals(val, 2, "should contain the value 2");
		assertEquals(q.toString(),"2 ", "the string fct should output 2 with a space at the end" );
		assertEquals(q.isEmpty(), false, "q should not be empty");
	}
	
	/**
	 * Test for the last attribute
	 */
	@Test
	void Sequence5() {
		// Queue() -> last() -> enqueue(2) -> last() -> dequeue() -> last()
		assertThrows(Exception.class, () -> {
			q.last();
		}, "Should not be possible to last() when empty");
		q.enqueue(2);
		int val = q.last();
		assertEquals(val, 2, "should have 2 as the last val");
		val = q.dequeue();
		assertEquals(val, 2, "should have 2 as the return value");
		assertThrows(Exception.class, () -> {
			q.last();
		}, "Should not be possible to last() when empty");
	}
	
	@Test
	void Sequence6() {
		// Queue() -> last() -> dequeue() -> last() -> enqueue(2) -> last()
		assertThrows(Exception.class, () -> {
			q.last();
		}, "Should not be possible to last() when empty");
		assertThrows(Exception.class, () -> {
			q.dequeue();
		}, "should not be possible to dequeue while empty");
		assertThrows(Exception.class, () -> {
			q.last();
		}, "Should not be possible to last() when empty");
		q.enqueue(2);
		int val = q.last();
		assertEquals(val, 2, "should contain the value 2");
	}
	
	@Test
	void  testCoverage100() {
		q.enqueue(2);
		q.enqueue(3);
		int val1 = q.peek();
		int val2 = q.last();
		assertEquals(val1, 2);
		assertEquals(val2, 3);
		val1 =  q.dequeue();
		val2 = q.dequeue();
		assertEquals(val1, 2);
		assertEquals(val2, 3);
		assertThrows(Exception.class, () -> {
			q.dequeue();
		}, "should not be possible to dequeue while empty");
	}
}

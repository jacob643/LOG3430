package edu.princeton.cs.algs4;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import edu.princeton.cs.algs4.Queue;

class TP4 {
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
	void leaf1() {
		// Queue() -> dequeue() should be empty state
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to dequeue when empty");
		assertEquals(q.size(), 0, "should have 0 elements");
		
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to get first element, because there are none");
		assertThrows(Exception.class, () -> {
			q.last();
		}, "Should not be possible to get last element, because there are none");
		
	@Test
	void leaf2() {
		// Queue() -> enqueue() -> dequeue() should be empty state
		q.enqueue(2); q.dequeue();
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to dequeue when empty");
		assertEquals(q.size(), 0, "should have 0 elements");
		
		assertThrows(Exception.class, () -> {
			q.peek();
		}, "Should not be possible to get first element, because there are none");
		assertThrows(Exception.class, () -> {
			q.last();
		}, "Should not be possible to get last element, because there are none");
		}
	
	/**
	 * Test for first attribute
	 */
	@Test
	void leaf3() {
		// Queue() -> enqueue() -> enqueue() -> dequeue() should be one Node state
		q.enqueue(1); q.enqueue(2); q.dequeue();
		int n = q.size();
		int first = q.peek();
		int last = q.last();
		assertEquals(n, 1, "Should have 1 item in one Node state");
		assertEquals(first, 2, "the first item should be the second enqueued item");
		assertEquals(last, first, "the last item should be the first one");
	}
	
	@Test
	void leaf4() {
		// Queue() -> enqueue() -> enqueue() -> enqueue() should  be multi Node state
		q.enqueue(1); q.enqueue(2); q.enqueue(3);
		int n = q.size();
		int first = q.peek();
		int last = q.last();
		assertEquals(n, 3, "Should have 3 items after 3 enqueue");
		assertEquals(first, 1, "first item should be the first one");
		assertNotEquals(first, last, "the first and last items should be different");
	}
	
	@Test
	void leaf5() {
		// Queue() -> enqueue() -> enqueue() -> enqueue() -> dequeue() should  be multi Node state
		q.enqueue(1); q.enqueue(2); q.enqueue(3); q.dequeue();
		int n = q.size();
		int first = q.peek();
		int last = q.last();
		assertEquals(n, 2, "Should have 3 items after 3 enqueue");
		assertEquals(first, 1, "first item should be the first one");
		assertNotEquals(first, last, "the first and last items should be different");
	}
}

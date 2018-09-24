package edu;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.lang.Exception;

import edu.princeton.cs.algs4.Graph;
import edu.princeton.cs.algs4.GraphGenerator;

class Tp2q41 {

	Graph graphe;
	
	@BeforeEach
	void setUp() throws Exception {
	}
	
	@AfterEach
	void tearDown() throws Exception {
	}

	@Test
	void test() {
		graphe = GraphGenerator.simple(3, 2);
		//assertThrows(IllegalArgumentException, GraphGenerator.simple(2, 5));
		assertEquals(0,0, "ca devrais generer un graphe simple");
		
		fail("pas fini dimplementer");
	}

}

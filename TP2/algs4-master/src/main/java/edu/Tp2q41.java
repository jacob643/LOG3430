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

	//fail("pas fini dimplementer");

	@Test
	void testgraphesimpleVEv1() {
		//	v <= -1,
		assertThrows(IllegalArgumentException.class, () -> {
			int v = -1;
			int e = 0;
			graphe = GraphGenerator.simple(v, e);
		});
	}

	@Test
	void testgraphesimpleVEv2e1() {
		// e == 0 et v == 0
		int v = 0;
		int e = 0;
		graphe = GraphGenerator.simple(v, e);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}

	@Test
	void testgraphesimpleVEv3e2() {
		// 0 < v et 0 < e <= sum 0 a v-1
		int v = 7;
		int e = 21;
		graphe = GraphGenerator.simple(v, e);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}

	@Test
	void testgraphesimpleVEv3e3() {
		// 0 < v et sum 0 a v-1 < e
		assertThrows(IllegalArgumentException.class, () -> {
			int v = 7;
			int e = 22;
			graphe = GraphGenerator.simple(v, e);
		});
	}

	@Test
	void testgraphesimpleVEe4() {
		// e <= -1
		assertThrows(IllegalArgumentException.class, () -> {
			int v = 0;
			int e = -1;
			graphe = GraphGenerator.simple(v, e);
		});

	}

	@Test
	void testgraphessimpleVEv3e1() {
		//necessaire pour AC seulement
		// v > 0 e == 0
		int v = 7;
		int e = 0;
		graphe = GraphGenerator.simple(v, e);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}

	@Test
	void testgraphessimpleVEv2e2() {
		//necessaire pour AC seulement
		// v == 0 et 0 < e <= sum de 0 a e-1
		int v = 0;
		int e = 0;
		graphe = GraphGenerator.simple(v, e);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}

	@Test
	void testgraphessimpleVEv2e3() {
		//necessaire pour AC seulement
		// v == 0 et sum de 0 a e-1 < e
		int v = 0;
		int e = 0;
		graphe = GraphGenerator.simple(v, e);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}
}

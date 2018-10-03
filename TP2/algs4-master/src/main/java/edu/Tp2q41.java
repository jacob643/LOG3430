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
		assertThrows(Exception.class, () -> {
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
		assertThrows(Exception.class, () -> {
			int v = 7;
			int e = 22;
			graphe = GraphGenerator.simple(v, e);
		});
	}

	@Test
	void testgraphesimpleVEe4() {
		// e <= -1
		assertThrows(Exception.class, () -> {
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

	@Test
	void testgraphesimpleVPv1() {
		//	v <= -1,
		assertThrows(Exception.class, () -> {
			int v = -1;
			double p = 0;
			graphe = GraphGenerator.simple(v, p);
		});
	}

	@Test
	void testgraphesimpleVPv2p1() {
		// 0 == v et 0 == p
		int v = 0;
		double p = 0;
		graphe = GraphGenerator.simple(v, p);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertEquals(graphe.E(), 0, "expect no edges");
	}
	
	@Test
	void testgraphesimpleVPv3p2() {
		// v >= 1 et 0 < p < 1
		int v = 7;
		int max = (v-1)*v/2;
		double p = 0.5;
		graphe = GraphGenerator.simple(v, p);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertTrue(graphe.E() >= 0, "expect 0 or more edges");
		assertTrue(graphe.E() <= max, "expect not to have more than the maximum ammount of edges");
	}
	
	@Test
	void testgraphesimpleVPv3p3() {
		// v >= 1 et p == 1
		int v = 7;
		int max = (v-1)*v/2;
		double p = 1;
		graphe = GraphGenerator.simple(v, p);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertTrue(graphe.E() == max, "expect to have the maximum ammount of edges");
	}
	
	@Test
	void testgraphesimpleVPp4() {
		// p < 0
		assertThrows(Exception.class, () -> {
			int v = 5;
			double p = -5;
			graphe = GraphGenerator.simple(v, p);
		});	
	}
	
	@Test
	void testgraphesimpleVPp5() {
		// p > 1
		assertThrows(Exception.class, () -> {
			int v = 5;
			double p = 5;
			graphe = GraphGenerator.simple(v, p);
		});	
	}

	@Test
	void testgraphesimpleVPv3p1() {
		// 0 == v et 0 == p
		// necessaire pour AC
		int v = 5;
		double p = 0;
		graphe = GraphGenerator.simple(v, p);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertEquals(graphe.E(), 0, "expect no edges");
	}

	@Test
	void testgraphesimpleVPv2p2() {
		// v == 0 et 0 < p < 1
		// necessaire pour AC
		int v = 0;
		int max = (v-1)*v/2;
		double p = 0.5;
		graphe = GraphGenerator.simple(v, p);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertTrue(graphe.E() >= 0, "expect 0 or more edges");
		assertTrue(graphe.E() <= max, "expect not to have more than the maximum ammount of edges");
	}

	@Test
	void testgraphesimpleVPv2p3() {
		// v == 0 et p == 1
		// necessaire pour AC
		int v = 0;
		int max = (v-1)*v/2;
		double p = 1;
		graphe = GraphGenerator.simple(v, p);
		assertEquals(graphe.V(), v, "expect " + v + " vertices");
		assertTrue(graphe.E() == max, "expect to have the maximum ammount of edges");
	}

	@Test
	void testgraphebipartivVev1() {
		// 0 > v 
		assertThrows(Exception.class, () -> {
			int v = -7;
			int V = 4;
			int e = 21;
			graphe = GraphGenerator.bipartite(v, V, e);
		});
	}
	
	@Test
	void testgraphebipartivVev2V2e2() {
		// 0 == v et V == 0 et 0 <= e <= v*V
		int v = 0;
		int V = 0;
		int e = 0;
		graphe = GraphGenerator.bipartite(v, V, e);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}

	@Test
	void testgraphebipartivVev3V3e2() {
		// 0 < v et 0 < V et 0 < e <= v*V
		int v = 7;
		int V = 4;
		int e = 21;
		graphe = GraphGenerator.bipartite(v, V, e);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}

	@Test
	void testgraphebipartivVee3() {
		// e > v*V
		assertThrows(Exception.class, () -> {
			int v = 7;
			int V = 4;
			int e = v*V+1;
			graphe = GraphGenerator.bipartite(v, V, e);
		});
	}

	@Test
	void testgraphebipartivVeV1() {
		// V < 0
		assertThrows(Exception.class, () -> {
			int v = 7;
			int V = -9;
			int e = 21;
			graphe = GraphGenerator.bipartite(v, V, e);
		});
	}

	@Test
	void testgraphebipartivVee1() {
		// e < 0
		assertThrows(Exception.class, () -> {
			int v = 7;
			int V = 9;
			int e = -21;
			graphe = GraphGenerator.bipartite(v, V, e);
		});
	}
	
	@Test
	void testgraphebipartivVev3V2e2() {
		// 0 < v et V == 0 et 0 <= e <= v*V
		// necessaire pour AC
		int v = 4;
		int V = 0;
		int e = 0;
		graphe = GraphGenerator.bipartite(v, V, e);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}

	@Test
	void testgraphebipartivVev2V3e2() {
		// 0 == v et 0 < V et 0 < e <= v*V
		//necessaire pour AC
		int v = 0;
		int V = 4;
		int e = 0;
		graphe = GraphGenerator.bipartite(v, V, e);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertEquals(graphe.E(), e, "expect " + e + " edges");
	}
	
	@Test
	void testgraphebipartivVpv1() {
		// 0 > v 
		assertThrows(Exception.class, () -> {
			int v = -7;
			int V = 4;
			double p = 0;
			graphe = GraphGenerator.bipartite(v, V, p);
		});
	}
	@Test
	void testgraphebipartivVpv2V2p2() {
		// 0 == v et V == 0 et 0 <= p <= 1
		int v = 0;
		int V = 0;
		double p = 0.5;
		graphe = GraphGenerator.bipartite(v, V, p);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertTrue(graphe.E() >= 0 && graphe.E() <= v*V);
	}

	@Test
	void testgraphebipartivVpv3V3p2() {
		// 0 < v et 0 < V et 0 < p <= 1
		int v = 7;
		int V = 4;
		double p = 0.5;
		graphe = GraphGenerator.bipartite(v, V, p);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertTrue(graphe.E() >= 0 && graphe.E() <= v*V);
	}

	@Test
	void testgraphebipartivVpp3() {
		// p > 1
		assertThrows(Exception.class, () -> {
			int v = 7;
			int V = 4;
			double p = 3;
			graphe = GraphGenerator.bipartite(v, V, p);
		});
	}

	@Test
	void testgraphebipartivVpV1() {
		// V < 0
		assertThrows(Exception.class, () -> {
			int v = 7;
			int V = -9;
			double p = 0.5;
			graphe = GraphGenerator.bipartite(v, V, p);
		});
	}

	@Test
	void testgraphebipartivVpp1() {
		// p < 0
		assertThrows(Exception.class, () -> {
			int v = 7;
			int V = 9;
			double p = -21;
			graphe = GraphGenerator.bipartite(v, V, p);
		});
	}
	
	@Test
	void testgraphebipartivVpv3V2p2() {
		// 0 < v et V == 0 et 0 <= p <= 1
		// necessaire pour AC
		int v = 4;
		int V = 0;
		double p = 0.5;
		graphe = GraphGenerator.bipartite(v, V, p);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertTrue(graphe.E() >= 0 && graphe.E() <= v*V);
	}

	@Test
	void testgraphebipartivVpv2V3p2() {
		// 0 == v et 0 < V et 0 < p <= 1
		//necessaire pour AC
		int v = 0;
		int V = 4;
		double p = 0.5;
		graphe = GraphGenerator.bipartite(v, V, p);
		assertEquals(graphe.V(), v+V, "expect " + v+V + " vertices");
		assertTrue(graphe.E() >= 0 && graphe.E() <= v*V);
	}
	
	
	
	
	
	
	
	
	
	
	
	
}

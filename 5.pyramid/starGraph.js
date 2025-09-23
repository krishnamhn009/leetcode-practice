// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

function findCenter(edges) {
  // edges[0] = [u1, v1]
  // edges[1] = [u2, v2]
  const [a, b] = edges[0];
  const [c, d] = edges[1];

  // The common node between first two edges is the center
  if (a === c || a === d) return a;
  return b;
}

// ------- Example -------
const edges = [[1,2],[2,3],[4,2]];
console.log(findCenter(edges)); // Output: 2

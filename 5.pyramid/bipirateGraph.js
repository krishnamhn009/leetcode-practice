// Given an adjacency list of a graph adj of n number of vertices and m edges having 0 based index. Check whether the graph is bipartite or not. A graph is said to be bipartite if we can color the nodes of the graph using two colors such that no two adjacent nodes will have same color.
function isBipartite(n, adj) {
  const color = Array(n).fill(-1);

  function bfs(start) {
    const queue = [start];
    color[start] = 0;

    while (queue.length > 0) {
      const node = queue.shift();

      for (const neighbor of adj[node]) {
        if (color[neighbor] === -1) {
          // Assign opposite color
          color[neighbor] = 1 - color[node];
          queue.push(neighbor);
        } else if (color[neighbor] === color[node]) {
          // Found same color on adjacent nodes
          return false;
        }
      }
    }
    return true;
  }

  for (let i = 0; i < n; i++) {
    if (color[i] === -1) {
      if (!bfs(i)) return false;
    }
  }

  return true;
}

// ------- Example -------
const n = 4;
const adj = [
  [1, 3],  // Node 0 connected to 1, 3
  [0, 2],  // Node 1 connected to 0, 2
  [1, 3],  // Node 2 connected to 1, 3
  [0, 2]   // Node 3 connected to 0, 2
];

console.log(isBipartite(n, adj)); // true

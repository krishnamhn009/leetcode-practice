// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

function findCircleNum(isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);

  function dfs(city) {
    for (let neighbor = 0; neighbor < n; neighbor++) {
      if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
        visited[neighbor] = true;
        dfs(neighbor);
      }
    }
  }

  let provinces = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;
      visited[i] = true;
      dfs(i);
    }
  }

  return provinces;
}

// ------- Example -------
const isConnected = [
  [1,1,0],
  [1,1,0],
  [0,0,1]
];
console.log(findCircleNum(isConnected)); // Output: 2

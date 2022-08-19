// dfs - graph coloring
var isBipartite = function(graph) {
  let colors = new Array(graph.length).fill(0);

  for (let i = 0; i < colors.length; i++) {
      if (colors[i] === 0 && !validColor(graph, colors, 1, i)) return false;
  }
  return true;
};

function validColor(graph, colors, color, node) {
  if (colors[node] !== 0) {
      return colors[node] === color;
  }
  colors[node] = color;

  let neighbors = graph[node];

  for (const neighbor of neighbors) {
      if (!validColor(graph, colors, -color, neighbor)) return false;
  }
  return true;
}

// bfs + edge case handling
var isBipartite = function(graph) {
  // edge cases
  if (!graph || graph.length === 0) return false;

  // edge case: contains self, contains duplicates (parallel edges)
  for (let i = 0; i < graph.length; i++) {
      if (containsSelf(i, graph[i])) return false;
      if (containsDuplicates(graph[i])) return false;
  }

  // edge case: graph is not undirected
  if (!isUndirected(graph)) return false;


  let colors = new Array(graph.length).fill(0);

  for (let i = 0; i < graph.length; i++) {
      if (colors[i] === 0) {
          let queue = [ i ];
          colors[i] = 1;
          while (queue.length > 0) {
              let node = queue.shift();

              let neighbors = graph[node];
              for (const nei of neighbors) {
                  if (colors[nei] === colors[node]) {
                      return false;
                  } else if (colors[nei] === 0){
                      queue.push(nei);
                      colors[nei] = -colors[node];
                  }
              }
          }
      }
  }
  return true;
};

function isUndirected(graph) {
  for (let i = 0; i < graph.length; i++) {
      let neighbors = graph[i];

      for (const nei of neighbors) {
          if (!containsNode(graph[nei], i)) return false;
      }
  }
  return true;
}

function containsNode(adjacency, node) {
  for (const ele of adjacency) {
      if (ele === node) return true;
  }
  return false;
}

function containsSelf(node, neighbors) {
  for (const ele of neighbors) {
      if (ele === node) return true;
  }
  return false;
}

function containsDuplicates(neighbors) {
  let seen = {};

  for (const neigh of neighbors) {
      if (neigh in seen) return true;
      seen[neigh] = true;
  }
  return false;
}
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
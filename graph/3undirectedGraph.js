const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPathT(graph, nodeA, nodeB, new Set());
  };
  
  const buildGraph = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
      const [ a, b ] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
    
    return graph;
  };
  
  const hasPathT = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);
    
    for (let neighbor of graph[src]) {
      if (hasPathT(graph, neighbor, dst, visited) === true) {
        return true;    
      }
    }
    
    return false;
  };


  const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
undirectedPath(edges, 'j', 'm'); // -> true



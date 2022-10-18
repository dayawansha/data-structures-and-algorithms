const buildGraph = (edges) => {
    const graph = {};
    
    for (let edge of edges) {
      const [a, b] = edge;
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = []; 
      graph[a].push(b);
      graph[b].push(a);
    }
    console.log("graph",graph);
    return graph;
  }; 

  const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  /// 
  // const grid = [
  //   ['W', 'L', 'W', 'W', 'W'],
  //   ['W', 'L', 'W', 'W', 'W'],
  //   ['W', 'W', 'W', 'L', 'W'],
  //   ['W', 'W', 'L', 'L', 'W'],
  //   ['L', 'W', 'W', 'L', 'L'],
  //   ['L', 'L', 'W', 'W', 'W'],
  // ];
  
  buildGraph(edges); // -> true
  
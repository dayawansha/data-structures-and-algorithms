const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;
    
    for (let node in graph) {
      const size = exploreSizeDFS(graph, node, visited);
      if (size > largest) largest = size;
    }
    
    return largest;
  };
  
  const exploreSizeRecursive = (graph, node, visited) => {
    if (visited.has(node)) return 0;
    
    visited.add(node);
    
    let size = 1;
    for (let neighbor of graph[node]) {
      size += exploreSize(graph, neighbor, visited);
    }    
    return size;
  };

  const exploreSizeDFS = (graph, node, visited) => {
    if (visited.has(node)) return 0;
    
    visited.add(node);

    const stack = [node];
    let size = 1;

    while(stack.length > 0){
      const temp= stack.pop();

      for (let obj of graph[temp]) {             
        if (!visited.has(obj)) {
          visited.add(obj);
          stack.push([ obj]);
          size = size + 1;
        }
      }
    }
    return size;
  };
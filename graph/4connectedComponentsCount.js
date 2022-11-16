/// very very important

const connectedComponentsCount = (graph) => {
    const visited = new Set();
    let count = 0;

    ////// in this loop, you have use in key word because you are traversing a keus of graph, 
    ////// not values
    for (let node in graph) {
      if (explore(graph, node, visited) === true) {
        count += 1;
      }
    }
    return count;
  };
  
  
  const explore = (graph, current, visited) => {
    
    if (visited.has(String(current))) return false;
    visited.add(String(current));
    
    for (let neighbor of graph[current]) {
      explore(graph, neighbor, visited);
    }
    console.log("", current);
    return true;
  };

  graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }

  console.log("ans",connectedComponentsCount(graph))
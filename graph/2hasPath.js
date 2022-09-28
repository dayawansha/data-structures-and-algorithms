const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  }

const hasPath = (graph, src, dst) => {

    const stack = [src];
    while(stack.length > 0){
        const subArrayRef = stack.pop();  /// we are looping all conected nodes
     
        if(subArrayRef == dst){
            return true;
        }
        console.log(subArrayRef);
        for(let obj of graph[subArrayRef]){
            stack.push(obj);
        }
    }
    return false;
}

// console.log("dfsLoop= abdfce");
hasPath(graph, 'f', 'k'); // true
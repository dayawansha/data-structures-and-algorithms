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

const hasPath2 = (graph, start, end)=>{
    if(start === end){ return true;}
  
    for(let obj of graph[start]){
        if(hasPath(graph, obj, end)=== true){
            return true;
        }
        
    }
    return false;
  }

const hasPath3 = (graph, start, end)=>{
    const queue = [start];  
    if(start === end){ return true;}

    while(0 < queue.length){
        const temp = queue.shift();
        
        if(temp === end) {
            return true;
        }

        for(let obj of graph[temp]){            
            queue.push(obj);
        }
    }
    return false;
}

// console.log("dfsLoop= abdfce");
hasPath(graph, 'f', 'k'); // true
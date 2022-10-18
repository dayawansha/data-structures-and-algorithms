const graphStack = { 
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[],
};

const graphQueue = { 
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[],
};

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  }


const dfsRecursive = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]){
        dfsRecursive(graph,neighbor);
    }
};

const dfsLoop = (graph, source) => {
const stack = [source];
 while (stack.length > 0){
     // The pop() method removes (pops) the last element of an array.
    const current = stack.pop();
    console.log(current);
    for(let neighbor of graph[current]){
        stack.push(neighbor);
    }
 } 
};
const bfsLoop = (graph, source) => {
    const queue = [source];

    console.log("graph",graph);
    console.log("queue",queue);
    console.log("queue.length",queue.length);

     while (queue.length > 0){
        //method removes the first item of an array.
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
     }
    };
    



// console.log("dfsLoop= abdfce");
// dfsLoop(graphStack, 'a');

// console.log("bfsLoop= abcde");
bfsLoop(graphQueue, 'a');


// console.log("recursevs");
// dfsRecursive(graphQueue, 'a');
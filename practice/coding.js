const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  class Node {

    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }

  }



  





















const hasapath = (graph,source, destination) => {

    const queue = [source];

    while(queue.length > 0){      
        const temp = queue.shift();
        if(temp == destination){
            return true;
        }
        console.log(temp);
        for(let obj in graph[temp]){
            queue.push(obj);
        }
    }

    return false;
}


const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  }
class Node{

    constructor(val){
        this.val = val;
        this.left=null;
        this.right=null;
    }

}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

const breadthFirstValues = (root) => {
    if (root === null) return [];
  
    const values = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.val);
      values.push(node.val);
  
      if (node.left !== null) queue.push(node.left);  
      if (node.right !== null) queue.push(node.right);
    } 
    return values;
  };

breadthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

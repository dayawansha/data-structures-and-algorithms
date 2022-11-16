const islandCount = (grid) => {
  const visited = new Set();
  let min = Infinity;
 

  for(let x = 0; x < grid.length; x++){
     for(let y = 0; y < grid[0].length; y++){

       if((grid[x][y])==='L'){
        let temp = counter(grid, x,y,visited);
       
        // min = temp;
        // console.log(temp)
        if(temp !== 0 && min > temp){
          min = temp;
        }      
     }    
  }
}
  return min;
}

const counter = (grid, x,y,visited) => {
  if(! ((0 <= x) && (x < grid.length)) ) return 0;
  if(! ((0 <= y) && (y < grid[0].length)) ) return 0;
  
  if((grid[x][y])==='W') return 0;
  
  let key = x + ',' + y;
  if(visited.has(key)) return 0;
  visited.add(key);

  let total = 1;

  total += counter(grid, x-1,y,visited);
  total += counter(grid, x+1,y,visited);
  total += counter(grid, x,y-1,visited);
  total += counter(grid, x,y+1,visited);
  
  return total ;
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log("count",islandCount(grid)); // -> 3
/// this is a matrix, you can't traverse like a graph, as usual
/// when you deal with matrix, you have to tra

var numIslands = (grid) =>{
    let count = 0;       
    const visited = new Set(); 
    
    for(let i = 0 ; i < grid.length ; i++){              
           for(let j = 0 ; j < grid[0].length ; j++){                    
               if ( isIsland(grid,i,j, visited) === true ){
                   count++;
               }         
           }       
    }     
    return count;
};

const isIsland = (grid, i , j , visited)=> {   
     
    if(! ((0 <= i) && (i < grid.length)) ) return false;
    if(! ((0 <= j) && (j < grid[0].length)) ) return false;
    
    if(grid[i][j] === "0")return false;
    
    const poss = i + ',' + j;
    if (visited.has(poss)) return false ;
    visited.add(poss);
           
    isIsland (grid, i -1, j,visited); 
    isIsland (grid, i + 1, j,visited); 
    isIsland (grid, i, j-1,visited); 
    isIsland (grid, i, j+1,visited); 
     
    return true;    
  }

  grid2 = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  console.log("aaa",numIslands(grid2));


  ///////////your version///////////////

  const islandCount = (grid) => {
    const visited = new Set();
    let total = 0;
  
    for(let x = 0; x < grid.length; x++){
       for(let y = 0; y < grid[0].length; y++){
  
         if((grid[x][y])==='L'){
          total += counter(grid, x,y,visited);
         }
          
       }    
    }
     return total;
  }
  
  const counter = (grid, x,y,visited) => {
    if(! ((0 <= x) && (x < grid.length)) ) return 0;
    if(! ((0 <= y) && (y < grid[0].length)) ) return 0;
    
    if((grid[x][y])==='W') return 0;
    
    let key = x + ',' + y;
    if(visited.has(key)) return 0;
    visited.add(key);
  
    counter(grid, x-1,y,visited);
    counter(grid, x+1,y,visited);
    counter(grid, x,y-1,visited);
    counter(grid, x,y+1,visited);
    
    return 1;
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
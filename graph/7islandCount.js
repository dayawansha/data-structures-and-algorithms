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
  numIslands(grid2);
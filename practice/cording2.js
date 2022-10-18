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
     
    if(! ((i <= 0) && (i < grid.length)) ) {return false};
    if(! ((j <= 0) && (j < grid[0].length)) ) {return false};
    
    if(grid[i][j] === "0"){ return false };

    const poss = i + ',' + j;
    if (visited.has(poss)) return false ;
    visited.add(poss);
     
       
    isIsland (grid, i -1, j,visited); 
    isIsland (grid, i + 1, j,visited); 
    isIsland (grid, i, j-1,visited); 
    isIsland (grid, i, j+1,visited); 
     
    return true;
      
  }
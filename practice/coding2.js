const abc = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

  const grid = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
  ];

const minimumIsland = (grid) => {  
    let visited = new Set();  
    let countArryt = [];  
   
      for(let i = 0; i < grid.length ; i++){    
            for(let j = 0; j < grid[0].length ; j++){   

              const islandSize = island(grid, i,j, visited);  
              if(islandSize != 0){
                countArryt.push(islandSize);         
              }                    
          }
      } 
    console.log("countArryt",countArryt); 
    countArryt.sort();
    return countArryt[0];
  };
  
  const island = (grid, i,j, visited) =>{
    console.log("i,j=", i,j);
    if( !((0 <= i) && ( i < grid.length))) return 0;  
    if( !((0 <= j) && ( j < grid[0].length))) return 0;
    
    if( grid[i][j] === 'W') return 0 ;
    
    const obj = i + ',' + j;
    if(visited.has(obj)){return 0};
    visited.add(obj);
    let count = 1;

    count += island(grid, i-1,j, visited);  
    count += island(grid, i+1,j, visited);  
    count += island(grid, i,j-1, visited);  
    count += island(grid, i,j+1, visited);  
 
    return count;
  }

  console.log("aaaaaaaa",minimumIsland(grid));
 

 

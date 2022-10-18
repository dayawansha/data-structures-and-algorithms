const  findOrder = (numCourses, prerequisites) => {
    
    if(numCourses === 1){          
      return [0];
    }
   
   
     if(numCourses === 1){          
      return [0];
    }
   
   if( prerequisites.lenth === 0){     
     
      return [];
    }
   
   if(numCourses === 2 && prerequisites.lenth === 1 ){     
       const sortedArray = prerequisites[0];
      sortedArray.sort();
      return sortedArray;
    }
   
   const allCources= [];
   const finalAns= [];
    
   const graph = coursesGraph(prerequisites); 
   
   console.log("graph", graph);

   
   const set = new Set([prerequisites[0][1]]);	
   const t = (prerequisites[0][1])
  const queue = [t]; 

  while( queue.length > 0 ){

      const tmp = queue.shift();	
      console.log("tmp1",tmp);
      allCources.push(tmp);

       for(let obj of graph[tmp]){
       
           if(!set.has(obj)){
               set.add(obj);				
               queue.push(obj);			
           }			
       }     
  } 


  console.log("allCources", allCources);

//    for(let x = allCources.length ; x <= 0 ; x--){ 
// 	  finalAns.push(allCources[x]);
//    }    
   return allCources;        
};


const coursesGraph = (edgers) => {
   const graph = {};
   for(let edge  of edgers) {
           const [a,b] = edge;
           if( !(a in graph) ){  graph[a] = [] }
           if( !(b in graph) ){  graph[b] = [] }
           
            graph[a].push((b)) ;
            graph[b].push((a)) ;
   
   }
   
   return graph;
}


 const numCourses = 4;
 const prerequisites = [[1,0],[2,0],[3,1],[3,2]] ;

 console.log( "findOrder", findOrder(4,prerequisites) ); 
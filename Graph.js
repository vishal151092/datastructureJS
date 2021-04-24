class Graph{
 constructor(){
     this.adjacencyList={};
 }

 addVertex(vertex){
     if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
 }   

 addEdge(vertex1, vertex2){
     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;

     if(this.adjacencyList[vertex1].indexOf(vertex2) === -1) this.adjacencyList[vertex1].push(vertex2);
     if(this.adjacencyList[vertex2].indexOf(vertex1) === -1) this.adjacencyList[vertex2].push(vertex1);
     
 }

 removeEdge(vertex1, vertex2){
     if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
 }

 removeVertex(vertex){
     let adjacentVertex = null;
    while(this.adjacencyList[vertex].length > 0){
        adjacentVertex = this.adjacencyList[vertex].pop();
        this.adjacencyList[adjacentVertex] = this.adjacencyList[adjacentVertex].filter(v => v !== vertex);
    }
    delete this.adjacencyList[vertex];
   
 }

 depthFirstRecursive(start){
     let result = [];
     let visited = {};
     let _self = this;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        _self.adjacencyList[vertex].forEach( neighbour =>{
            if(!visited[neighbour]) return dfs(neighbour);
        });
    })(start);
    return result;
 }

 breadthFirst(start){
     let queue = [start];
     let result = [];
     let visited = {};
     visited[start] = true;
     let currentVertex;

     while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach( neighbour =>{
           if(!visited[neighbour]){
               visited[neighbour] = true;
               queue.push(neighbour);
           }  
        });
     }
     return result;         
 }

}

let gph = new Graph();
gph.addVertex("Mumbai");
gph.addVertex("Delhi");
gph.addVertex("Chennai");
gph.addVertex("Ahemadabad");
gph.addVertex("Bangaluru");
gph.addVertex("Kolkata");
gph.addVertex("Varanasi");


gph.addEdge("Delhi", "Chennai");
gph.addEdge("Delhi", "Mumbai");
gph.addEdge("Kolkata", "Delhi");
gph.addEdge("Kolkata", "Varanasi");
gph.addEdge("Bangaluru", "Chennai");
gph.addEdge("Ahemadabad", "Chennai");

gph.addEdge("Delhi", "Varanasi");
gph.addEdge("Kolkata", "Chennai");
gph.addEdge("Mumbai", "Chennai");
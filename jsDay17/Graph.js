
class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1)) {
            this.adjList.get(vertex1).push(vertex2);
        }
        if (this.adjList.has(vertex2)) {
            this.adjList.get(vertex2).push(vertex1);
        }
    }

    bfs(startingNode) {
        const visited = new Set();
        const queue = [startingNode];

        while (queue.length > 0) {
            const vertex = queue.shift();

            if (!visited.has(vertex)) {
                console.log(vertex);
                visited.add(vertex);

                const neighbors = this.adjList.get(vertex);
                for (let neighbor of neighbors) {
                    queue.push(neighbor);
                }
            }
        }
    }
}


const shortestPathBFS = (graph, start, end) => {
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const node = path[path.length - 1];

        if (!visited.has(node)) {
            const neighbors = graph.adjList.get(node);

            for (let neighbor of neighbors) {
                const newPath = [...path, neighbor];
                queue.push(newPath);

                if (neighbor === end) {
                    return newPath;
                }
            }

            visited.add(node);
        }
    }
    return null;
};

console.log("Script execution started!");

function isGraphCyclic(graphComponentMatrix) {
  console.log("Starting isGraphCyclic function...");
  const rows = graphComponentMatrix.length;
  const cols = rows > 0 ? graphComponentMatrix[0].length : 0;

  let visited = [];
  let dfsVisited = [];

  for (let i = 0; i < rows; i++) {
    let visitedRow = [];
    let dfsVisitedRow = [];
    for (let j = 0; j < cols; j++) {
      visitedRow.push(false);
      dfsVisitedRow.push(false);
    }
    visited.push(visitedRow);
    dfsVisited.push(dfsVisitedRow);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j]) {
        console.log(`Starting DFS from node (${i}, ${j})`);
        const response = dfsCycleDetection(
          graphComponentMatrix,
          i,
          j,
          visited,
          dfsVisited
        );
        if (response) {
          console.log("Cycle detected!");
          return true;
        }
      }
    }
  }

  console.log("No cycle detected.");
  return false;
}

function dfsCycleDetection(graphComponentMatrix, srcr, srcc, visited, dfsVisited) {
  console.log(`Visiting node (${srcr}, ${srcc})`);
  visited[srcr][srcc] = true;
  dfsVisited[srcr][srcc] = true;

  for (const [nbrRow, nbrCol] of graphComponentMatrix[srcr][srcc] || []) {
    if (!visited[nbrRow][nbrCol]) {
      const response = dfsCycleDetection(
        graphComponentMatrix,
        nbrRow,
        nbrCol,
        visited,
        dfsVisited
      );
      if (response) return true;
    } else if (dfsVisited[nbrRow][nbrCol]) {
      return true;
    }
  }

  dfsVisited[srcr][srcc] = false;
  return false;
}

const graphComponentMatrix = [
  [[], [[1, 0]]],
  [[[1, 1]], [[1, 0]]],
];

console.log("Graph Component Matrix:", graphComponentMatrix);

console.log("Checking for cycles...");
const hasCycle = isGraphCyclic(graphComponentMatrix);
console.log("Cycle detection result:", hasCycle);

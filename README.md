GoogleSheet: Cycle Detection in a Graph Component Matrix
Project Description
This project, GoogleSheet, is a JavaScript-based implementation of cycle detection in a directed graph represented as a Graph Component Matrix. The program is designed to analyze a matrix structure, where each cell contains a list of its directed edges, and determine whether the graph contains a cycle.

Key Features
Graph Representation: The graph is represented as a 2D matrix. Each cell contains an array of directed edges to other cells.
Cycle Detection Algorithm: The program employs Depth-First Search (DFS) to detect cycles in the graph.
Node State Tracking: Each node maintains two states:
Visited: Tracks whether the node has been visited during the traversal.
DFS Visited: Tracks nodes in the current DFS path to identify back edges, which indicate a cycle.
How It Works
Input Matrix: The program takes a 2D array (graphComponentMatrix) as input, where each cell contains an array of its neighboring nodes.
Traversal: It iterates through all nodes in the matrix, starting a DFS traversal from unvisited nodes.
Cycle Detection:
If a back edge is detected (a node in the current DFS path is revisited), a cycle is identified.
The traversal continues until all nodes are visited.
Result: Outputs whether a cycle exists in the graph.
Example Usage
The following matrix represents a graph with a cycle:

javascript
Copy code
const graphComponentMatrix = [
  [[], [[1, 0]]],
  [[[1, 1]], [[1, 0]]],
];
Node (0,1) points to Node (1,0).
Node (1,0) points back to Node (0,1), forming a cycle.
The program outputs:

sql
Copy code
Cycle detection result: true
Technologies Used
Language: JavaScript
Algorithm: Depth-First Search (DFS)
How to Run
Clone the repository.
Run the script in a JavaScript environment (Node.js or browser console).
Customize the graphComponentMatrix for your specific graph structure.
Sample Output
lua
Copy code
Script execution started!
Graph Component Matrix: [ [ [], [[1, 0]] ], [[[1, 1]], [[1, 0]]] ]
Checking for cycles...
Starting isGraphCyclic function...
Starting DFS from node (0, 1)
Visiting node (0, 1)
Visiting node (1, 0)
Cycle detected!
Cycle detection result: true
Applications
Dependency analysis in spreadsheets or databases.
Cycle detection in directed graphs for academic and real-world use cases.
Graph theory research and algorithm development.
Contributions are welcome! If you'd like to enhance the project or report issues, please feel free to create a pull request or submit an issue.
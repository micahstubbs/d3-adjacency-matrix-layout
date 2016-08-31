# d3-adjacency-matrix-layout

a [d3 version 4](https://github.com/d3/d3/blob/master/API.md) port of the [adjacencyMatrix](https://github.com/emeeks/d3-plugins/tree/master/adjacencyMatrix) d3-plugin from [@Elijah_Meeks](https://twitter.com/elijah_meeks) 

develop with [es2015](https://babeljs.io/docs/learn-es2015/) then bundle and transpile to todays-browsers-friendly [es5](https://es5.github.io/) [Javascript](https://en.wikipedia.org/wiki/JavaScript) with the command `npm run prepublish`  

### Download

[build/d3-adjacency-matrix-layout.js](build/d3-adjacency-matrix-layout.js)

### API Reference

**matrix.size** An array of [width, height] that is used to calculate grid x, y, height and width.

**matrix.nodes** An array of the nodes of your network.

**matrix.links** An array of the edges of your network. As with other D3 network layouts, if the source and target properties are numbers, they are assumed to be array position within the nodes array, otherwise objects are assumed.

**matrix.edgeWeight** The function to return the weight of the edges of your links, if any. Defaults to returning 1.

**matrix.nodeID** The function to return the id value of a node, defaults to returning #node.id. The id is used to build the matrix and drive the axes.

**matrix.xAxis** Cannot be set. Call this from the same place where you've put your matrix cells and it will build a simple horizontal axis with labels from your node id.

**matrix.yAxis** Cannot be set. Call this from the same place where you've put your matrix cells and it will build a simple vertical axis with labels from your node id.

**matrix.directed** Set to false if you want to mirror undirected networks.
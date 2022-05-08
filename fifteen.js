

function latticePaths(x, y){
    // initialize grid

    // in a 2x2 grid there are actually 3x3 "nodes" or positions.  so add 1 to x and y.

    let grid = [];
    for (let i = 0; i <= x; i++){
        grid.push(Array(y + 1).fill(0));
    }

    grid[0][0] = 1;

    // move through grid.  add each position to its right and down neighbors.

    for (let i = 0; i <= x; i++){
        for (let j = 0; j <= y; j++){
            if (i < x) grid[i + 1][j] += grid[i][j];
            if (j < y) grid[i][j + 1] += grid[i][j];
        }
    }

    return grid[x][y];
}

console.log(latticePaths(20, 20))





















// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

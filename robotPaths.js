var countPaths = function(grid){
  /*
   *  With the grid as the input, count the total number of paths from the upper left to bottom right corner.
   *  Extra credit:  can you generalize this to work even if there are obstacles in the way? (obstacles will be represented by 0's)
   *  Extra extra credit:  can you make your solution work for extremely large grids  (say, greater than 100x100?)
   */
   grid[0][0] = 1;
   var val;
   var height = grid.length;
   var width = grid[0].length;
   for (var i = 0; i < height; i++){
    for (var j = 0; j < width; j++){
      val = 0;
      if (!grid[i][j]){
        if (i>0){
          val += grid[i-1][j];
        }
        if (j>0){
          val += grid[i][j-1];
        }
        if (grid[i][j] !== 0){
          grid[i][j] = val;
        } 
      }
    }
  }
  return grid[height - 1][width-1];  
};

function createGrid(rows, columns){
  var grid = [];
  for(var i = 0; i < rows; i++){
    grid[i] = new Array(columns);
  }
  return grid;
}

var grid = createGrid(100,100);
var paths = countPaths(grid);
console.log(paths);

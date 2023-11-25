class Solution {
  dfs(grid, r, c) {
    grid[r][c] = '0';
    const nr = grid.length;
    const nc = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    directions.forEach(([x, y]) => {
      const newR = r + x;
      const newC = c + y;
      if (newR >= 0 && newR < nr && newC >= 0 && newC < nc && grid[newR][newC] === '1') {
        this.dfs(grid, newR, newC);
      }
    });
  }

  numIslands(grid) {
    const nr = grid.length;
    if (nr === 0) {
      return 0;
    }
    const nc = grid[0].length;

    let numIslands = 0;
    for (let r = 0; r < nr; ++r) {
      for (let c = 0; c < nc; ++c) {
        if (grid[r][c] === '1') {
          numIslands++;
          this.dfs(grid, r, c);
        }
      }
    }
    
    return numIslands;
  }
}
module.exports = Solution; // 默认导出 Solution 类
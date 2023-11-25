const assert = require('assert');
const Solution = require('../src/island1'); // 替换为你的岛屿数量计算代码文件的路径

describe('Number of Islands', function () {
  it('should return 0 for an empty grid', function () {
    const grid = [];
    const solution = new Solution();
    const numberOfIslands = solution.numIslands(grid);
    assert.strictEqual(numberOfIslands, 0);
  });

  it('should return the correct number of islands in a grid', function () {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ];
    const solution = new Solution();
    const numberOfIslands = solution.numIslands(grid);
    assert.strictEqual(numberOfIslands, 3);
  });

  it('should return 1 for grid with one island', function () {
    const grid = [
      ['1', '0', '0', '0'],
      ['0', '1', '0', '0'],
      ['0', '0', '1', '0'],
      ['0', '0', '0', '1']
    ];
    const solution = new Solution();
    const numberOfIslands = solution.numIslands(grid);
    assert.strictEqual(numberOfIslands, 4);
  });

  it('should return 1 for a grid with one large island', function () {
    const grid = [
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1']
    ];
    const solution = new Solution();
    const numberOfIslands = solution.numIslands(grid);
    assert.strictEqual(numberOfIslands, 1);
  });

  it('should return the correct number for a complex pattern of islands', function () {
    const grid = [
      ['1', '0', '1', '0', '1'],
      ['0', '1', '0', '1', '0'],
      ['1', '0', '1', '0', '1'],
      ['0', '1', '0', '1', '0']
    ];
    const solution = new Solution();
    const numberOfIslands = solution.numIslands(grid);
    assert.strictEqual(numberOfIslands, 10);
  });

  // 添加更多的测试用例
});



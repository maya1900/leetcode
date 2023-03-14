var solveNQueens = function (n) {
  var res = []
  var board = new Array(n)
  for (var i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  backtrack(board, 0)
  return res

  function backtrack(board, row) {
    // 结束条件: 行等于board的长度
    if (row == board.length) {
      res.push(Array.from(board, row => row.join('')))
      return
    }

    var n = board.length
    for (var col = 0; col < n; col++) {
      if (!isValid(board, row, col)) {
        continue
      }
      board[row][col] = 'Q'
      backtrack(board, row + 1)
      board[row][col] = '.'
    }
  }

  function isValid(board, row, col) {
    var n = board.length
    // 检查列是否有冲突
    for (var i = 0; i <= row; i++) {
      if (board[i][col] === 'Q') {
        return false
      }
    }
    // 检查右上方是否有冲突
    for (var i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    // 检查左上方是否有冲突
    for (var i = row - 1, j = col - 1; i >= 0 & j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false
      }
    }
    return true
  }
};

var generateParenthesis = function (n) {
  if (n === 0) return []
  // 记录所有组合
  const res = []
  // 过程中的路径
  let track = ''
  // 可用的左括号和右括号数量初始化为n
  backtrack(n, n, track, res)
  return res
}
function backtrack(left, right, track, res) {
  // 左右不相等或者小于0，说明不合法
  if (right < left) return
  if (left < 0 || right < 0) return
  // 左右刚好用完得到一个合法的括号组合
  if (left == 0 && right == 0) {
    res.push(track)
    return
  }
  // 尝试放一个左括号
  track += '(' // 选择
  backtrack(left - 1, right, track, res)
  track = track.slice(0, -1) // 撤销选择

  track += ')'
  backtrack(left, right - 1, track, res)
  track = track.slice(0, -1)
}

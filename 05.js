var longestPalindrome = function (s) {
  let max = ''
  for (let i = 0; i < s.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  function helper(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    let maxStr = s.slice(l + 1, r + 1 - 1)
    if (maxStr.length > max.length) max = maxStr
  }
  return max
}

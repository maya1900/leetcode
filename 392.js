const isSubsequence = (s, t) => {
  // const [m, n] = [s.length, t.length]
  // const dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0))
  // for (let i = 1; i <= m; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     if (s[i - 1] == t[j - 1]) {
  //       dp[i][j] = dp[i - 1][j - 1] + 1
  //     } else {
  //       dp[i][j] = dp[i][j - 1]
  //     }
  //   }
  // }
  // return dp[m][n] === m ? true : false
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++
      j++
    }
    if (s[i] != t[j]) {
      j++
    }
  }
  return i == s.length
}

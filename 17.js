var letterCombinations = function (digits) {
  const res = []
  const keys = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  if (digits.length) {
    backtrack(0, [])
  }
  return res

  function backtrack(start, track) {
    if (track.length === digits.length) {
      res.push(track.join(''))
      return
    }
    for (let i = start; i < digits.length; i++) {
      const digit = digits.charAt(i) - '0'
      for (const c of keys[digit]) {
        track.push(c)
        backtrack(i + 1, track)
        track.pop()
      }
    }
  }
};

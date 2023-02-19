var lengthOfLongestSubstring = function (s) {
  let l = r = max = 0
  while (r < s.length) {
    let index = s.indexOf(s[r], l)
    if (r === index) {
      r++
      max = Math.max(r - l, max)
    } else {
      l = index + 1
    }
  }
  return max
}

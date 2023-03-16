var restoreIpAddresses = function (s) {
  const res = []
  const track = []


  function backtrack(s, start) {
    if (start === s.length && track.length === 4) {
      res.push(track.join('.'))
    }
    for (let i = start; i < s.length; i++) {
      if (!isValid(s, start, i)) {
        continue
      }
      if (track.length >= 4) {
        break
      }
      track.push(s.substring(start, i + 1))
      backtrack(s, i + 1)
      track.pop()
    }
  }
  function isValid(s, start, end) {
    const length = end - start + 1;
    if (length === 0 || length > 3) {
      return false
    }
    // 只有一位，合法
    if (length === 1) {
      return true
    }
    // 多于1位，但开头是0，不合法
    if (s.charAt(start) === '0') {
      return false
    }
    // 开头不是0,1-2是合法的
    if (length <= 2) {
      return true
    }
    // 三位数不可能大于255
    if (parseInt(s.substring(start, start + length)) > 255) {
      return false
    } else {
      return true
    }
  }

  backtrack(s, 0)
  return res
}

console.log(restoreIpAddresses('25525511135'))

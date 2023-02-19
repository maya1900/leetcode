var minWindow = function (s, t) {
  const need = new Map(), window = {};
  for (let c of t) {
    const val = need.has(c) ? need.get(c) + 1 : 1;
    need.set(c, val)
  }
  const needSize = need.size;
  let left = 0, right = 0, valid = 0, res = '';
  while (right < s.length) {
    const c = s[right];
    if (need.has(c)) {
      window[c] ? window[c]++ : window[c] = 1;
      // 计数等窗口取值和map的value相等时计数
      if (window[c] === need.get(c)) valid++;
    }
    while (valid === needSize) {
      const newRes = s.substring(left, right + 1);
      if (!res || res.length > newRes.length) {
        res = newRes;
      }
      // 移动左指针
      const d = s[left];
      if (need.has(d)) {
        if (window[d] === need.get(d)) valid--;
        window[d]--;
      }
      left++;
    }
    right++;
  }
  return res;
}
const s = 'abcccdefgh';
const t = 'ccd'
console.log(minWindow(s, t))

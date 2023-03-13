var isValid = function (s) {
  const map = new Map();
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (['(', '{', '['].includes(s[i])) {
      stack.push(s[i])
    } else if (s[i] === map.get(stack[stack.length - 1])) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length ? false : true
}

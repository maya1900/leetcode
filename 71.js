var simplifyPath = function (path) {
  const res = []
  for (const s of path.split('/')) {
    if (s != '' && s != '.' && s != '..') {
      res.push(s)
    } else if (s == '..' && res.length > 0) {
      res.pop()
    }
  }
  return '/' + res.join('/')
}

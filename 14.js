var longestCommonPrefix = function (strs) {
  if (strs == null || strs.length == 0) {
    return "";
  }

  //假设初始最长前缀是第一个字符串
  var results = strs[0];
  for (var i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(results) != 0) {
      results = results.substring(0, results.length - 1);
      if (strs.length == 0) {
        return "";
      }
    }
  }
  return results;
}
let arr = ['abc', 'bcd', 'bcde']
console.log(longestCommonPrefix(arr))

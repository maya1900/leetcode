/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var map = new Map();
  for (var i = 0; i < nums.length; i++) {
    var rest = target - nums[i];
    if (map.has(rest)) {
      return [map.get(rest), i];
    }
    map.set(nums[i], i);
  }
  return null;
};

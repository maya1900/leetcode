var findMedianSortedArrays = (nums1, nums2) => {
  const len1 = nums1.length, len2 = nums2.length
  if (len1 > len2) return findMedianSortedArrays(nums2, nums1) // 对长度较小的二分
  const len = len1 + len2
  let start = 0, end = len1 //二分的开始和结束位置
  let partLen1, partLen2
  while (start <= end) {
    partLen1 = (start + end) >> 1 //  nums1的二分位置
    partLen2 = ((len + 1) >> 1) - partLen1 // nums2的二分位置
    // L1和R1代表nums1二分后左右两边的位置
    // L2和R2代表nums2二分后左右两边的位置
    let L1 = partLen1 === 0 ? -Infinity : nums1[partLen1 - 1]
    let L2 = partLen2 === 0 ? -Infinity : nums2[partLen2 - 1]
    let R1 = partLen1 === len1 ? Infinity : nums1[partLen1]
    let R2 = partLen2 === len2 ? Infinity : nums2[partLen2]

    if (L1 > R2) {
      end = partLen1 - 1
    } else if (L2 > R1) {
      start = partLen1 + 1
    } else { // L1<=R2 && L2 <=R1符合交叉小于等于
      return len % 2 === 0 ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2 : Math.max(L1, L2)
    }
  }
}

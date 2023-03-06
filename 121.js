var maxProfit = function (prices) {
  let res = 0, min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > res) {
      res = prices[i] - min;
    }
  }
  return res
}

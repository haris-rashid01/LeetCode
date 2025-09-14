/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = Math.min(...prices)
    let Buyindex = prices.indexOf(buy)

    let sellArray = []
    for (let i = Buyindex + 1; i < prices.length; i++) {
        sellArray.push(prices[i])
    }
    if (sellArray.length == 0) {
        return 0
    }
    else {
        let sell = Math.max(...sellArray)
        let profit = Math.abs(sell - buy)
        return profit
    }
};
let prices = [7, 6, 4, 3, 5]
console.log(maxProfit(prices));

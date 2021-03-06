// https://leetcode.com/problems/water-bottles/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let maxBottles = numBottles;
    let emptyBottles = numBottles;
    while (emptyBottles >= numExchange){
        emptyBottles -= numExchange
        emptyBottles += 1
        maxBottles += 1
    }
    return maxBottles
};

console.log(numWaterBottles(9,3)) // result should be 13
console.log(numWaterBottles(5,5)) // result should be 6
console.log(numWaterBottles(2,3)) // result should be 2

/*
Runtime: 72 ms, faster than 84.36% of JavaScript online submissions for Water Bottles.
Memory Usage: 38.4 MB, less than 19.43% of JavaScript online submissions for Water Bottles.
*/
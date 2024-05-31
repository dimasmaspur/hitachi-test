function smallestPairSum(numbers) {
    numbers.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < numbers.length; i += 2) {
        total += numbers[i];
    }
    return total;
}
module.exports = { smallestPairSum };

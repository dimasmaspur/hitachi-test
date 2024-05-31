function getCombinations(digits) {
    const phoneMap = {
        '0': '', '1': '',
        '2': 'abc', '3': 'def',
        '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs',
        '8': 'tuv', '9': 'wxyz'
    };

    if (digits.length === 0) {
        return [];
    }

    const combinations = [];

    function backtrack(index, path) {
        if (index === digits.length) {
            combinations.push(path.join(''));
            return;
        }

        const possibleLetters = phoneMap[digits[index]];
        for (const letter of possibleLetters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return combinations;
}

module.exports = { getCombinations };

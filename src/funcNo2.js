function countPalindromicSubstrings(s) {
    const n = s.length;
    let count = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < n && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    for (let i = 0; i < n; i++) {
        expandAroundCenter(i, i);
    }
    for (let i = 0; i < n - 1; i++) {
        expandAroundCenter(i, i + 1);
    }
    return count;
}

module.exports = { countPalindromicSubstrings };

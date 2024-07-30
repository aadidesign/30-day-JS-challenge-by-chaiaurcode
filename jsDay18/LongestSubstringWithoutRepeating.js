
function longestSubstringWithoutRepeating(s) {
    let maxLen = 0, start = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(map.get(s[i]) + 1, start);
        }
        map.set(s[i], i);
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;
}

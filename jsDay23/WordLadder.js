
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let beginSet = new Set([beginWord]);
    let endSet = new Set([endWord]);
    let length = 1;

    while (beginSet.size > 0) {
        length++;
        const nextSet = new Set();
        for (let word of beginSet) {
            const arr = word.split('');
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < 26; j++) {
                    arr[i] = String.fromCharCode(97 + j);
                    const nextWord = arr.join('');
                    if (endSet.has(nextWord)) return length;
                    if (wordSet.has(nextWord)) {
                        nextSet.add(nextWord);
                        wordSet.delete(nextWord);
                    }
                }
                arr[i] = word[i];
            }
        }
        beginSet = nextSet;
        if (beginSet.size > endSet.size) {
            [beginSet, endSet] = [endSet, beginSet];
        }
    }

    return 0;
};

/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
    let index = 0;
    for (let i = 0; i < indexes.length; i++) {
        if (i === 0) index = indexes[0];
        else index = index + targets[i - 1].length + 1;
        S = replace(S, index, sources[i], targets[i]);
    }
    return S;
};

let replace = function (S, i, source, target) {
    debugger;
    let newString = "";
    if (S[i] === source[0]) {
        for (let j = 0; j < i; j++) {
            newString += S[j];
        }
        newString += target;
        for (let j = i + source.length; j < S.length; j++) {
            newString += S[j];
        }
    } else return S;
    return newString;
};

findReplaceString(
    "vmokgggqzp",
    [3, 5],
    ["kg", "ggq"],
    ["s", "so"]);
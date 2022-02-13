// https://leetcode.com/problems/flipping-an-image/

// Example 1:

// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
// Example 2:

// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {

    image.forEach(el => {
        let n = el.length;
        for (let i = 0; i < Math.floor(n / 2); i++) {
            let temp = el[i];
            el[i] = el[n - i - 1];
            el[n - i - 1] = temp;
        }
    });

    image.forEach(el => {
        el.forEach((item, i) => {
            el[i] = item === 1 ? 0 : 1;
        });
    });

    return image;
};




// 1 pass solution
// trick store result value while swaping
// use XOR operator
var flipAndInvertImage = function (image) {

    image.forEach(el => {
        let n = el.length;
        for (let i = 0; i < n / 2; i++) {
            let temp = el[i] ^ 1;
            el[i] = el[n - i - 1] ^ 1;
            el[n - i - 1] = temp;
        }
    });

    return image;
};
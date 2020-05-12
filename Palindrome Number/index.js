/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    else if (x < 10) return true;

    let arr = [];
    let input = x;

    while (input > 0) {
        arr.push(input % 10);
        input = Math.floor(input / 10);
    }

    const mid = Math.floor(arr.length / 2);
    if (arr.length === 1) {
        if (arr[0] !== arr[1]) {
            return false;
        } else {
            return false;
        }
    } else {
        const pivot = arr.length % 2 === 0 ? -1 : 0;
        for (let i = 0; i <= mid; i++) {
            if (i === 0 && pivot === -1) { }
            else {
                if (arr[mid - i] !== arr[mid + i + pivot]) {
                    return false;
                }
            }
        }
        return true;
    }
};


let result = isPalindrome(10);

console.log(result);




// O(n) time complexity solution

//TODO: do it with O(log(n)) time complexity
// Time complexity : O(\log_{10}(n))O(log 
//     10
//     ​	
//      (n)). We divided the input by 10 for every iteration, so the time complexity is O(\log_{10}(n))O(log 
//     10
//     ​	
//      (n))

//     Space complexity : O(1)O(1).
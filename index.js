var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

let input = [1, 2, 2, 3, 4];
let result = removeElement(input, 2);

console.log(result);
[1, 2, 3];

[];
1;
2;
3;
1 2;
1 3;
2 3;
1 2 3;


main(){

    let ans = [];
    for (let i = 0; i <= nums.length; i++) {
        let set = new Set();
        recursive(nums, i, ans, [], set);
    }
    return ans;
}


let recursive = function (nums, size, ans, temp, set) {
    if (temp.length === size) {
        ans.push([...temp]);
        return;
    }
    for (let num of nums) {
        if (!set.has(num)) {
            temp.push(num);
            set.add(num);
            recursive(nums, size, ans, temp, set);
            temp.pop();
            set.delete(num);
        }
    }
};
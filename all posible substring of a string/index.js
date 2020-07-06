// all posible substring of a string

let allSubstr = function (s) {
    let ans = [];
    let diff = 0;
    while (diff < s.length) {
        let i = 0;
        let j = diff;
        while (j < s.length) {
            let substr = "";
            for (let k = i; k <= j; k++) {
                substr += s[k];
            }
            ans.push(substr);
            i++; j++;
        }
        diff++;
    }
    return ans;
};

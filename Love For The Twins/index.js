// Suppose you have two pets and you love both of them very much. You go to a pet store to buy different articles for your pets. But you ask salesman that you will buy only those articles which are actually in pair. In this store, articles are referred as integers. So you have to tell total no. of articles you will buy for your pets.
// https://practice.geeksforgeeks.org/problems/love-for-the-twins/0
// Note: Time complexity O(n).

// Input : 
// The first line of input contains an integer T denoting the no of test cases. Then T test cases follow. Second line contains the no. of articles "N" shown by the salesman.Third line contains N - separated integers describing the articles referred as an integer.

// Output : 
// Total No. of articles you will prefer to buy for your pets.

// Constraints:
// 1 ≤ T ≤ 200
// 1 ≤ N ≤ 1000
// 1 ≤ A[N] ≤ 1000

// Example : 
// Input : 
// 1
// 7
// 10 10 10 20 20 10 20
// Output :
// 6

// Explanation:
// The pairs formed are: (10,10) (10,10) (20,20). The leftover 10 can't be paired with any other 10.
// Hence, the total articles we'll buy are 6. 


let array = [10, 10, 10, 20, 20, 10, 20];
let map = {};
for (let item of array) {
    if (!map[item]) {
        map[item] = 0;
    }
    map[item]++;
}

let keys = Object.keys(map);
let ans = 0;
for (let key of keys) {
    ans += Math.floor(map[key] / 2);
}

console.log(ans * 2);
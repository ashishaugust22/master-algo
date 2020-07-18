// 1. Active TradersAn institutional broker wants to review their book of customers to see which are most active.Given a list of trades by customer name, determine which customers account for at least 5 % of the total number of trades.Order the list alphabetically ascending by name.Example n = 23customers = ["Bigcorp", "Bigcorp", "Acme", "Bigcorp", "Zork", "Zork", "Abc", "Bigcorp", "Acme", "Bigcorp", "Bigcorp", "Zork", "Bigcorp", "Zork", "Zork", "Bigcorp", "Acme", "Bigcorp", "Acme", "Bigcorp", "Acme", "Littlecorp", "Nadircorp"].Bigcorp had 10 trades out of 23, which is 43.48 % of the total trades.Both Acme and Zork had 5 trades, which is 21.74 % of the total trades.The Littlecorp, Nadir, and Abc had 1 trade each, which is 4.35 % of the total trades.So the answer is["Acme", "Bigcorp", "Zork"](in alphabetical order) because only these three companies placed at least 5 % of the trades.Function DescriptionComplete the function mostActive in the editor below.mostActive has the following parameter: string customers[n]: an array customer names Returns string[]: an alphabetically ascending array of customer names;
function mostActive(customers) {
    let map = {};
    let customerCount = customers.length;
    for (let customer of customers) {
        if (!map[customer]) { map[customer] = { count: 0, percent: 0 }; }

        map[customer].count++;
        map[customer].percent = (map[customer].count / customerCount) * 100;

    }
    let keys = Object.keys(map);
    keys.sort(function (a, b) {
        return a.localeCompare(b);
    });
    let ans = [];
    for (let customer of keys) {
        if (map[customer].percent >= 5) {
            ans.push(customer);
        }
    }
    return ans;
}



// input 
// [20
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Alpha
// Omega
// Beta]
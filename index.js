var plusOne = function(digits) {
   return increase(digits,digits.length-1);
};

var increase = function (arr, index) {
    if(arr[index]===9){
        if(index === 0){
            arr[index] = 0;
            arr.unshift(1);
            return arr;
        } else{
            arr[index] = 0;
            return increase(arr,index-1);
        }
    }else {
        arr[index] = arr[index] + 1;
        return arr;
    }
}


let result = plusOne([9]);

console.log(result);
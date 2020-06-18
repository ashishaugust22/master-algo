// 703. Kth Largest Element in a Stream
// https://leetcode.com/problems/kth-largest-element-in-a-stream/

// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

// Example:

// int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8
// Note:
// You may assume that nums' length ≥ k-1 and k ≥ 1.

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.arr = nums;
    this.k = k;
    this.heap = [];
    
    for(let i = 0; i < nums.length; i++){
        if(i < k){
            this.heap.push(nums[i]);
        }        
        
         if(this.heap.length === k){
              for(let j = Math.floor(this.heap.length/2); j >= 0; j--){
                  this.heapify(this.heap, j, this.k);
              }
          }
        
        if(i >= k && this.heap[0] < nums[i]){
            this.heap[0] = nums[i];
            this.heapify(this.heap,0,k);
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
      if(this.heap.length === this.k && this.heap[0] < val){
            this.heap[0] = val 
            this.heapify(this.heap,0,this.k)
            return this.heap[0];
        }  
    
      
        if(this.heap.length  < this.k){
            this.heap.push(val);
            if(this.heap.length === this.k){
                for(let j = Math.floor(this.heap.length/2); j >= 0; j--){
                      this.heapify(this.heap, j, this.k);
                  }
            }
          }
         return this.heap[0];

};

KthLargest.prototype.heapify = function(arr,i,heapLen){
    let parent = i;
    let left = 2*i+1;
    let right = 2*i+2;
    
    if(left < heapLen && arr[left] < arr[parent]){
        parent = left;
    }
    
    if(right < heapLen && arr[right] < arr[parent]){
        parent = right;
    }
    
    if(i !== parent){
        this.swap(arr,i,parent);
        this.heapify(arr,parent, heapLen);
    }
}

KthLargest.prototype.swap = function(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

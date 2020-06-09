let heapLen;

let heapSort = function(arr){
	heapLen = arr.length;

	for(let i = Math.floor(arr.length/2); i>=0; i--){
		heapify(arr,i);
	}

	for(let i = arr.length - 1; i > 0; i--){
		swap(arr,0,i);
		heapLen--;
		heapify(arr,0);
	}
	return arr;
}

let heapify = function(arr,i){
	let parent = i;
	let left = 2*i + 1;
	let right = 2*i + 2;
	
	if(left < heapLen && arr[left]>arr[parent]){
		parent = left;
	}
	if(right < heapLen && arr[right]>arr[parent]){
		parent = right;
	}
	if( i !== parent){
		swap(arr,parent,i);
		heapify(arr,0);
	}
}

let swap = function(arr,i,j){
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}
function merge(leftArr, rightArr) {
    let  sortedArray = [];
    let leftIndex = 0, rightIndex = 0;
    
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if(leftArr[leftIndex] < rightArr[rightIndex]) {
        sortedArray.push(leftArr[leftIndex]);
        leftIndex++;
      }
      else {
        sortedArray.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
    
    return sortedArray.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  }
  
  function merge_sort(array) {
    if (array.length <= 1) return array;
    
    const midIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, midIndex);
    const rightArr = array.slice(midIndex);
    
    return merge(merge_sort(leftArr), merge_sort(rightArr));
  }
  
  console.log(merge_sort([3, -2, 10, 6]));
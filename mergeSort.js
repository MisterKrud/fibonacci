#!/usr/bin/node

const mergeSort = (arr) => {
    
    const len = arr.length
    if(len===1){
        console.log(arr)
        return arr
    } else {console.log(arr);
    let halfLength
    if (len%2 ===0) {
        halfLength = arr.length/2
    } else {
        halfLength = (arr.length-1)/2;
    }
    const leftArray = arr.slice(0, halfLength);
    const rightArray = arr.slice(halfLength)
   
let left =  mergeSort(leftArray);
let right = mergeSort(rightArray);


// if(left<right){
//     return [left, right]
// } else {
//     return [right, left]
// }



}
   
}

const disorderedArray = [3, 2, 1, 13, 8, 5, 0, 1]

console.log(mergeSort(disorderedArray))
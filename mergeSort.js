#!/usr/bin/node

const mergeSort = (arr, n) => {
    
    const len = arr.length
    if (len<1){
        console.log('Length is 0')
        return []
    };

    if(len===1){
        console.log(`Length is one`)
       const newArray = ([arr[0]])
       console.log(newArray);
       console.log(typeof(newArray))
       return newArray
    } 
        
         //console.log(arr);
    
            let halfLength
    if (len%2 ===0) {
        halfLength = arr.length/2
    } else {
        halfLength = (arr.length-1)/2;
    }
   
    console.log(n)
    const leftArray = arr.splice(0, halfLength);
    console.log('Left split is:')
    console.log(leftArray)
    const rightArray = arr.splice(0)
    console.log('Right split is:')
    console.log(rightArray)

    console.log('Running left array...')
    console.log('')
    const left = mergeSort(leftArray, n+1)
    console.log(left)
// console.log(mergeSort(leftArray,n+1));
console.log('Running right Array')
console.log('')
console.log(mergeSort(rightArray,n+1));

console.log('Now do something')

console.log()

return `returning ${n}`





   
}

const disorderedArray = [3, 2, 1, 13, 8, 5, 0, 1]

console.log(mergeSort(disorderedArray,1))

// const splicedArray =  disorderedArray.splice(0,2)
// console.log(splicedArray);
// console.log(disorderedArray);
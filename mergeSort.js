#!/usr/bin/node

const mergeSort = (arr, l) => {
  const len = arr.length;
  if (len < 1) {
    console.log("Length is 0");
    return [];
  }

  if (len === 1) {
    console.log(`Length is one`);
    const lastSplit = arr[0];
    console.log(lastSplit);
    console.log(typeof lastSplit);
    return lastSplit;
  }

  

  //console.log(arr);

  let halfLength;
  if (len % 2 === 0) {
    halfLength = arr.length / 2;
  } else {
    halfLength = (arr.length - 1) / 2;
  }

  console.log(l); //Debugging number left


  //Create Left array
  const leftArray = arr.splice(0, halfLength);
  console.log("Left split is:");
  console.log(leftArray);

  //Create Right array
  const rightArray = arr.splice(0);
  console.log("Right split is:");
  console.log(rightArray);

  //Run mergeSort function of Left
  console.log("Running left array...");
  console.log("");
  let left = mergeSort(leftArray, l + 1);
  if (Array.isArray(left)) left = left.flat()
  console.log("LEFT");
  console.log(left);
//   arr.push(left);
  // console.log(mergeSort(leftArray,n+1));

  //Run mergeSort on Right
  console.log("Running right Array");
  console.log("");
  let right = mergeSort(rightArray, l + 1);
  if(Array.isArray(right)) right = right.flat()
  console.log("RIGHT");
  console.log(right);
//   arr.push(right);



//Group this into a function (recursive??)

    console.log('Regular Loop')
    console.log('Sort')
if (left<right) 
    {
    arr.push(left);
     arr.push(right)
    
    } else {
        arr.push(right)
        arr.push(left)
       
    }
    console.log(arr)



  

  //Repeat this until the length of the new array is zero
//Just included splicing from left and right arrays

//   if(len >2){
//     console.log('GREATER THAN TWO')
//     console.log(arr)
//     console.log(left)
//     console.log(right)
    
//     const leftElement = left[0]
//     const rightElement = right[0]

//     while(left.length>0 || right.length>0){
//         console.log('LENGTHS')
//         console.log('Left:')
//         console.log(left.length)
//         console.log('Right:')
//         console.log(right.length)
//     if (leftElement<rightElement) 
//     {
//         left.splice(0,1)
//     arr.push(leftElement);
   
    
//     } else {
//         right.splice(0,1)
//         arr.push(leftElement)
       
//     }
//     console.log(arr)
//     console.log('<<<<<<>>>>>')
//     return arr
//   }
// }


    console.log(arr)

    console.log('')

// const result = arr.flat()
// console.log(result)

  console.log("**Now do something**");


//   const leftSide = arr[0]
//    console.log('Left side')
//   console.log(leftSide)
 
//   const leftResult = leftSide.flat()
//  console.log(leftResult)

//   const rightSide = arr[1]
//   const rightResult = rightSide.flat()
//   console.log('Right side')
//   console.log(rightSide)
//   console.log(rightResult)


// if (leftResult[0]<rightResult[0]) 
//     {
//     arr.push(leftResult[0]);
//      arr.push(rightResult[0])
//     } else {
//         arr.push(rightResult[0])
//         arr.push(leftResult[0])
//     }

//     arr.pop()
//     arr.pop()

//   const newArr = arr.flat()
//   console.log(newArr);


  console.log(`-----DONE------`);

 return arr
};

const disorderedArray = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(disorderedArray, 1));

// const splicedArray =  disorderedArray.splice(0,2)
// console.log(splicedArray);
// console.log(disorderedArray);

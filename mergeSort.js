#!/usr/bin/node

const mergeSort = (arr) => {
  const len = arr.length;

  //Safety case - if there is nothing in the array return an empty array
  if (len < 1) {
    console.log("Length is 0");
    return [];
  }

  //Base case - return the array if it only has one element
  if (len === 1) {
    return arr;
  }

  //Find the halfway point of the array
  let halfLength;
  if (len % 2 === 0) {
    halfLength = arr.length / 2;
  } else {
    halfLength = (arr.length - 1) / 2;
  }

  //Create Left & Right array halves
  const leftArray = arr.slice(0, halfLength);
  const rightArray = arr.slice(halfLength);

  //Clean arr for future use
  arr = [];

  //Run mergeSort function on left & right arrays
  let left = mergeSort(leftArray);
  let right = mergeSort(rightArray);

  //Loop through finding smallest first element in each array
  while (left.length >= 1 && right.length >= 1) {
    if (left[0] < right[0]) {
      arr.push(left[0]);
      left.shift();
    } else {
      arr.push(right[0]);
      right.shift();
    }
  }

  //If an array is empty, push the other array in it's entirety to the new array
  if (left.length == 0) {
    arr.push(...right);
  }
  if (right.length == 0) {
    arr.push(...left);
  }

  //return the array
  return arr;
};

const disorderedArray = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(disorderedArray));

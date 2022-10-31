// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // iterate over collection with two loops - so we are looking at n^2 runtime
    for (let i = 0; i < arr.length; i++) {
        //first time the largest element goes to the end
        //so next iteration we can ignore that element so we use arr.length - i - 1
        for (let j = 0; j < (arr.length - i - 1); j++) {
          if (arr[j] > arr[j+1]) {
            const lesser = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = lesser;
          }
        }
    }

    return arr;

}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
    
        for (let j = i+1; j <arr.length; j++) {
          if (arr[j] < arr[indexOfMin]) {
            indexOfMin = j;
          }
        }
    
        if (indexOfMin !== i) {
          let lesser = arr[indexOfMin];
          arr[indexOfMin] = arr[i];
          arr[i] = lesser;
        }
      }
    
      return arr;
}

// usually solved with a recursive solution
// merge two sorted arrays and merge them into a single sorted array
// groberts
function mergeSort(arr) {
  if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    // slice will take everything from zero up to (but not including) the second arg
    const left = arr.slice(0, center);
    // take everything starting at center to the end of the array
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));

}

// create results array
// while there are still elements in both arrays
// --- if the first element of the left half is less than first in right
// -----shift the element from the left into a result array
// --- else shift the element from the right into a result array
// take everything from the array that still has stuff in it and put it in results
// groberts
function merge(left, right) {
  const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    //ES2015 syntax
    //takes everything in results, left and right and adds it to array
    //same as calling concat several times
    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

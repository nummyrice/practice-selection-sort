

function selectionSort(arr) {

  // Copy the original array
  let arcpy = arr.slice(0);

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arcpy.length) {



    // Do not move this console.log


    // Find the index of the minimum value in the unsorted half
    let minIdx = 0;
    let minVal = arcpy.reduce((acc, ele, i) => {
      if (ele < acc) {
        acc = ele;
        minIdx = i;
      }
      return acc;
    });
    console.log(sorted.join(","));
    // Save and remove the value at the min index
    arcpy.splice(minIdx, 1);


    // Add the min value to the end of the sorted array
    sorted.push(minVal);
  }
  return sorted;
}



function selectionSortInPlace(arr) {

  // Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;
  let temp = arr[divider];

  // Repeat while the unsorted half is not empty:
  while(divider < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    // Save the min value
    let minVal = Math.min(...arr.slice(divider));
    let minIdx = arr.indexOf(minVal);

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIdx ; i > divider ; i--) {
      arr[i] = arr[i-1];
    }

    // Put the min value at the divider
    arr[divider] = minVal;

    // Increment the divider and repeat
    divider++;

  }

}


module.exports = [selectionSort, selectionSortInPlace];

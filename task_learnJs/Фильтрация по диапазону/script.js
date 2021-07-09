// let arr = [5, 3, 8, 1];

// function filterRange(arr,a,b) {
//   let results = arr.filter(function(item,index,array) {
//       return item >= a && item <= b;
//   })
//   return results
// }

// console.log(filterRange(arr, 1, 4));


function filterRangeInPlace(arr,a,b) {
   
     arr = arr.filter(function(item,index,array) {
        if (!(item >= a && item <= b)) {
            array.splice(index,1);
        }
    })
     
}
  
  
  
   let arr = [5, 3, 8, 1];
  
   console.log(filterRangeInPlace(arr, 1, 4)); // удалены числа вне диапазона 1..4
  
  
   console.log( arr ); // [3, 1]
// jshint esversion: 7

//Req. 3b
let arrAvg = arr => {
  let sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
//Req. 3c
let arrMax = arr => {
  var max;
  arr.forEach(elem => {
    if (elem > max) {
      max = elem;
    }
  });
  return max;
};

// Req. 3d
 let sumEvens = arr => {
   let sum = 0;
   for(let elem of arr) {
     sum += ${elem % 2 = 0 ? 0 : elem};
   }
   return sum
 }

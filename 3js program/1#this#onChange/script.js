// var val= function(obj,lowobj,hiobj){

//     if((obj.value < lowobj) || (obj.value > hiobj )){
//         alert('ERROR');
//     }
//     else{
//         alert('I love u');
//     }

// };







// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };
//   console.log(Array.isArray(company.sales));

//   function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//       }
//       return sum;
//     }
//   }
  
//   alert(sumSalaries(company))




const factorial = (n) => {
  if(n === 1) {
    return n;
  }
  else {
    return n * factorial(n-1)
  }
  
};
console.log(factorial(6));































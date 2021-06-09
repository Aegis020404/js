
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
//   function unique(arr) {
//       general='';
//     let set = new Set(values);
//     for(let value of set){
//         general+=value+',';
//     };
//     return general
//   };
  function unique(arr) {
    return Array.from(new Set(arr));
  }
  console.log(unique(values))

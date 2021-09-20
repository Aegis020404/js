let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
   
  let salariesArr = Object.entries(salaries)
  if ( salariesArr.length == 0 ) return null;
  let max = [ 0, 0 ]
  for(let rich of salariesArr) {
    
    max =  max[1] > rich[1] ? max : rich 
    
  }
  
  return max[0];
}

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}








console.log(topSalary(salaries))
// function Calculator() {
    
//     this.calculate = function (str) {
//         arr = str.split(' ');
        
//         switch (arr[1]) {
//             case '+': return +arr[0] + +arr[2]

//             case '-': return +arr[0] - +arr[2]

//             case '*': return +arr[0] * +arr[2]

//             case '/': return +arr[0] / +arr[2]

//             case '**': return (+arr[0]) ** +(arr[2])
//         }
//     }
    
//     this.addMethod = function(bin, func) {
        
//     }

//  }
 
 


// let calc = new Calculator;


function Calculator() {
  
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }



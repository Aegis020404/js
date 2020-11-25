let greeting = "Привет, как тебя зовут";
let  name = prompt(greeting);


    while (name == "" || name == null) {
      name = prompt(greeting);
    }
    
    alert(name + " , я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После кажой попытки я скажу 'мало','много','угадал'.");

    let number = random(100)
    let guess = prompt("Какое число я загадал ?");
    let numberofguesses = 0;

    while (guess != number){
      if(guess > number){
        guess = prompt('Много. Попробуй ещё раз');
      }
      else{
        guess = prompt("Мало. Попробуй ещё раз");
        
      }
      numberofguesses = numberofguesses + 1;
    }
    
    alert('Ты угадал! Это число '+ number + ". Тебе понадобилось " + numberofguesses + " попыток .");
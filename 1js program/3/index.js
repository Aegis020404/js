let  name = prompt("Привет, как тебя зовут");


    if (name == "") {
       name = prompt("не игнорь, как тебя зовут");
    }

    alert(name + " , я загадал число от 1 до 100. Попробуй отгадать его за наименьшее количество попыток. После кажой попытки я скажу 'мало','много','угадал'.");


// Создание
    let now = new Date();
    console.log( now ); // показывает текущие дату и время

    // 0 соответствует 01.91.1970 UTC+0
    let Jan01_1970 = new Date(0);
    console.log(Jan01_1970);

    // new Date(year, month, date, hours, minutes, seconds, ms)


// Получение компонентов даты
    // getFullYear()
    // Получить год (4 цифры)
    // getMonth()
    // Получить месяц, от 0 до 11.
    // getDate()
    // Получить день месяца, от 1 до 31, что несколько противоречит названию метода.
    // getHours(), getMinutes(), getSeconds(), getMilliseconds()
    // Получить, соответственно, часы, минуты, секунды или миллисекунды.
    // Никакого getYear(). Только getFullYear()
    // Многие интерпретаторы JavaScript реализуют нестандартный и устаревший метод getYear(), который порой возвращает год в виде двух цифр. Пожалуйста, обходите его стороной. Если нужно значение года, используйте getFullYear().

    // Кроме того, можно получить определённый день недели:

    // getDay()
    // Вернуть день недели от 0 (воскресенье) до 6 (суббота). Несмотря на то, что в ряде стран за первый день недели принят понедельник, в JavaScript начало недели приходится на воскресенье.

    //     getTime()
    // Для заданной даты возвращает таймстамп – количество миллисекунд, прошедших с 1 января 1970 года UTC+0.

    // getTimezoneOffset()
    // Возвращает разницу в минутах между местным часовым поясом и UTC:


// Преобразование к числу, разность дат
    // Если объект Date преобразовать в число, то получим таймстамп по аналогии с date.getTime():

    let date = new Date();
    console.log(+date); // количество миллисекунд, то же самое, что date.getTime()


// Date.now() - говорит о колличестве миллисикунд пошедшего с 1 января 1970 года


// Разбор строки с датой
    // Метод Date.parse(str) считывает дату из строки.

    // Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:

    // YYYY-MM-DD – это дата: год-месяц-день.
    // Символ "T" используется в качестве разделителя.
    // HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
    // Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.
    // Возможны и более короткие варианты, например, YYYY-MM-DD или YYYY-MM, или даже YYYY.

    // Вызов Date.parse(str) обрабатывает строку в заданном формате и возвращает таймстамп (количество миллисекунд с 1 января 1970 года UTC+0). Если формат неправильный, возвращается NaN.       
     date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

    console.log(date);



// Создаёте дату

    date = new Date( 2012, 1, 20, 3, 12 );
    console.log(date)


// Покажите день недели

    date = new Date(2014, 0, 5);
    
    function getWeekDay( date ) {
        let week 

        switch( date.getDay() ) {
            case 0: week = 'ВС';
            break;
            case 1: week = 'ПН'
            break;
            case 2: week = 'ВТ'
            break;
            case 3: week = 'СР'
            break;
            case 4: week = 'ЧТ'
            break;
            case 5: week = 'ПТ'
            break;
            case 6: week = 'СБ'
            default:
                week = "Curva"
        }

        return week;
    };
    console.log( date,'  ',getWeekDay( date ) ); 



// Последнее число месяца?
    
    function getLastDayOfMonth(year, month) {
        let date = new Date( year, month + 1 ,0 );
        console.log(date)
        return date.getDate();
    }

    getLastDayOfMonth(2020, 1);//31



// Сколько сегодня прошло секунд?
    function getSecondsToday() {
        date = new Date();


        return date.getSeconds() + date.getMinutes()*60 + date.getHours()*3600;
    }
    console.log(getSecondsToday())


// Форматирование относительной даты

function formatDate(date) {
    let nowDate = new Date()
    let del = date - nowDate;

    let answer = del > -1000 ? 'прямо сейчас' : del > -60000 ? `${del/-1000} сек. назад` : del > -3600000 ? `${del/-60000} мин. назад` : `${'0'+date.getDate()}.${'0'+(+date.getMonth()+1)}.${date.getFullYear()%100} ${date.getHours()}:${date.getMinutes()}`
    return answer;
}


console.log( formatDate(new Date(new Date - 1)) );
console.log( formatDate(new Date(new Date - 30 * 1000)));
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log( formatDate(new Date(new Date - 86400 * 1000)) );
console.log(formatDate(new Date(2014, 2, 1, 11, 22, 33) ) ) ;



console.log(new Date(2014, 2, 1, 11, 22, 33))

  
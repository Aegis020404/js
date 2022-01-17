// Обратная ссылка по номеру: \N
    let str = `He said: "she's the one!".`;

    let regexp = /['"](.*?)['"]/g;

    console.log( str.match(regexp)); // [`"she'`]

    regexp = /(['"])(.*?)\1/g;

    console.log( str.match(regexp)); // [`"she's the one!"`]


// Обратная ссылка по имени: \k<имя>
    // Если в регулярном выражении много скобочных групп, то удобно давать им имена.
    // Для обращения к именованной группе можно использовать синтаксис \k<имя>.
    // В примере ниже кавычки обозначены ?<quote>, так что обращение будет \k<quote>:

str = `He said: "She's the one!".`;

regexp = /(?<quote>['"])(.*?)\k<quote>/g;

console.log( str.match(regexp) ); // "She's the one!"
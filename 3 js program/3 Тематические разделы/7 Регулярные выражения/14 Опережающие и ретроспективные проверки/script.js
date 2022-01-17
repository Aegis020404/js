// Опережающая проверка
    let str = "1 индейка стоит 30€";
    console.log( str.match(/\d+(?=€)/));
    console.log( str.match(/\d+(?=\s)(?=.+30)/));

    str = "2 индейки стоят 60€";
    console.log( str.match(/\d+(?!€)/) ); // 2 (в этот раз проигнорирована цена)


// Ретроспективная проверка
    str = "1 индейка стоит $30";
    console.log( str.match(/(?<=\$)\d+/) ); // 30

    console.log( str.match(/(?<!\$)\d+/) ); // 1




regexp = /(?<![-\d])\d+/g;

str = "0 12 -5 123 -18";
    
console.log( str.match(regexp) ); // 0, 12, 123



regexp = /(?<=<body.+?>)/;

str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

str = str.replace(regexp, `<h1>Hello</h1>`);

console.log(str)
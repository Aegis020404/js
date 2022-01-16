// Пример: gogogo
    console.log( 'Gogogo now!'.match(/(go)+/i))


// Пример: домен
    let regexp = /([\w-]+\.)+\w+/g
    console.log( 'site.com my.site.com'.match(regexp) );


// Пример: email
    regexp = /[-/\w]+@[\w-]+/g;
    console.log("my@mail.com @ his@site.com.uk".match(regexp));


// Содержимое скобок в match
    let str = '<h1>Hello, world!</h1>';

    let tag = str.match(/<(.*?)>/);

    console.log( tag[0]);
    console.log( tag[1]);


    str = '<span class="my">';

    regexp = /<(([a-z]+)\s*([^>]*))>/;

    let result = str.match(regexp);
    console.log( result[0] );
    console.log( result[1] );
    console.log( result[2] );
    console.log( result[3] );

{
    let regexp = /#(\w{3}){1,2}/g;

    let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

    console.log( str.match(regexp) ); // #3f3 #AA00ef
}

{
    let regexp = /-?[\d\.]+/g;

    let str = "-1.5 0 2 -123.4.";

    console.log( str.match(regexp) ); // -1.5, 0, 2, -123.4
}
console.clear()

function parse(expr) {
    let expa = expr.match( /(\d+[.\d]+)([ \*\-\+\/]+)(\d+[.\d]+)/);
    return [expa[1], expa[2], expa[3]]

    // return expr.match()
}

console.log(parse("1.2 * 3.4"))

let [a, op, b] = parse("1.2 * 3.4");

console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4





{
let regexp = /((\d){2}:){5}AB/;

console.log( regexp.test('01:32:54:67:89:AB') ); // true

console.log( regexp.test('0132546789AB') ); // false (нет двоеточий)

console.log( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)

console.log( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)
}
// Жадный поиск
    let str = 'a "Witch" and her "broom" is one';
    console.log(str.match(/".+"/)); // '"Witch" and her "broom"'


// Ленивый режим
    console.log(str.match(/".+?"/g)); // ['"Witch"', '"broom"']


// Альтернативный подход
    console.log( str.match(/"[^"]+"/g))

    str = '...<a href="link" class="doc">...';
    let regexp = /<a href=".*" class="doc">/g;
    console.log(str.match(regexp));

    str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
    console.log(str.match(regexp));

    regexp = /<a href=".*?" class="doc">/g
    console.log(str.match(regexp));

    str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
    console.log(str.match(regexp));

    str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...'
    regexp = /<a href="[^"]*" class="doc">/g;
    console.log(str.match(regexp));




regexp = /<!--.*?-->/gs;

str = `... <!-- My -- comment
test --> ..  <!----> ..
`;

console.log( str.match(regexp) );


regexp = /<[^.>]+>/g;

str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>', '<b>'
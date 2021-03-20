'strict mode'
var pattern = new RegExp("\w+","gim" );//(строкак которая содежрит регулярное значение, строка которая содержит флаги)
var samePattern = /\w+/gim;//литерал регулярных выражений

let strings = "How we survive  is what  makes us who  we are";
var pattern = /\w+/g ,
  string=strings

console.log(pattern)
console.log(string.match(pattern));//возвращает массив

console.log(string.search(pattern));//возвращает 1 массив из текста

console.log(string.split(/[\s,]+/));//используется как разделитель

console.log(pattern.global);//true скажет установлены ли флаги или нет
console.log(pattern.ignoreCase);//false
console.log(pattern.multiline);//false

console.log(pattern.lastIndex);//0  для хранения индекса последнего результата


var pattern = /\w+@\w+\.\w+/,
    string =" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry";


    console.log(pattern.test(string));//false так как  в тексте нету регулярных значений
    
    var pattern = /\w+@\w+\.\w+/g,
    string =" Lorem Ispsum is simply dummy text of the printing and typesetting industry.qwe@ff.ru Lorem Ipsum qwerty@qwe.com has been the industry";


    console.log(pattern.test(string));//true так как в тексте есть регулярное значение
    console.log(pattern.lastIndex);
    console.log(pattern.test(string));//true
    console.log(pattern.test(string));//false

    console.log(pattern.exec(string));//возвращает первый массив

    console.log(pattern.lastIndex);
    console.log(pattern.exec(string));


var pattern = /\w+/g,
string = "How we survive is what makes us who we are",
    match;

while (match = pattern.exec(string)) {
    console.log(match[0] + " (Index: " +match.index+ ")");
   
}  

         






















// Анаграммы – это слова, у которых те же буквы в том же количестве, но они
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {

     // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let result =arr.map(function(item){
            return   item = item.toLowerCase().split('').sort().join('');
           });
           return Array.from(new Set(result));
        
    
}
console.log(aclean(arr))
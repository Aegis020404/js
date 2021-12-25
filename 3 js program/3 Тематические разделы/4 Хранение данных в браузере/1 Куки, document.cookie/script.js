// // Запись в document.cookie

//     console.log(document.cookie); 
// // console.log('qwe')

// document.cookie = "ir=loveYou"


// let name = 'my name';
// let value = 'John Smith'

// // кодирует в my%20name=John%20Smith
// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

// console.log()

// document.cookie = 'path=/admin'




// +1 день от текущей даты
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "expires=" + date;
document.forms[0].addEventListener('submit',function(e) {
    e.preventDefault();
    console.log(e.target.text.value);

    document.cookie = 'color=' + e.target.text.value


    let color = document.cookie.split(';').find((e) => e.split('=').includes(' color')).split('=')[1]

    document.body.style.background = color || 'blue'
})



let color = document.cookie.split(';').find((e) => e.split('=').includes('color')).split('=')[1]

document.body.style.background = color || 'blue'

// куки будет удалено через 1 час
// document.cookie = "user=John; max-age=3600000";

// удалим куки (срок действия истекает прямо сейчас)
// document.cookie = "user=John; max-age=0";


// secure
    // secure
// Куки следует передавать только по HTTPS-протоколу.
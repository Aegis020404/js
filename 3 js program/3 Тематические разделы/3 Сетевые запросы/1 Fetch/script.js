let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);
let json = await response.json();
console.log(json);


// Заголовки ответа
{
    let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
    console.log(response.headers.get('Content-type')); // application/json; charset=utf-8

    // перебрать все заголовки
    for (let [key,value] of response.headers) {
        document.body.append(`${key} = ${value} `)
        
    }
}


// Post запросы 
{
    let user = {
        name: 'John',
        surname: 'Smith'
    };

    // let response = await fetch('')
}


// Отправка изображения

canvasElem.onmousemove = function(e) {
    let ctx = canvasElem.getContext('2d');
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  };

  async function submit() {
    let blob = await new Promise(resolve => canvasElem.toBlob(resolve, 'image/png'));
    let response = await fetch('/article/fetch/post/image', {
      method: 'POST',
      body: blob
    });

    // сервер ответит подтверждением и размером изображения
    let result = await response.json();
    alert(result.message);
  }































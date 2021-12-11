// Отправка простой формы
    formElement.onsubmit = async(e) => {
        e.preventDefault()
        let response = await fetch('form.html',{
            method: 'POST',
            body: new FormData(formElement)
        });

        let result = await response.json();
        console.log(result.message)
    }


// Методы объекта FormData
    // formData.append(name, value) – добавляет к объекту поле с именем name и значением value,
    // formData.append(name, blob, fileName) – добавляет поле, как будто в форме имеется элемент <input type="file">, третий аргумент fileName устанавливает имя файла (не имя поля формы), как будто это имя из файловой системы пользователя,
    // formData.delete(name) – удаляет поле с заданным именем name,
    // formData.get(name) – получает значение поля с именем name,
    // formData.has(name) – если существует поле с именем name, то возвращает true, иначе false
    let form = new FormData(formElement);
    console.log(form.has('name'))

    form.append('key1', 'value1');
    form.append('key2', 'value2');

    // Список пар ключ значение
    for(let [name, value] of form) {
        console.log(`${name} = ${value} /[]`);
    }


//Отправка формы с файлом
    formElem.onsubmit = async(e) => {
        e.preventDefault();

        let response = await fetch('form.html', {
            method:'POST',
            body:new FormData(formElem)
        });

        let result = await response.json();
        console.log(result.message);
    }


// Отправка формы с Blob-данными
    // canvasElem.onmousedown = function() {
        canvasElem.onmousemove = function(e) {
            let ctx = canvasElem.getContext('2d');
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
          };
    // }
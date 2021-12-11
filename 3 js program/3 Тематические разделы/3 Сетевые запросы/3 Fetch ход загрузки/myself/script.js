let arr
import {api} from './api.js'
api.then((api)=> arr = api)
let current

formElem.addEventListener('submit',function(e) {
    e.preventDefault();
    let text = e.target.username.value;
    let btn = false


    for(let key in arr) {
        if (arr[key].username == text) {
            console.log(arr[key])
            current = arr[key]
            btn = true
        } 
    }
    
    if(btn) banner(text)
    if(!btn) document.body.insertAdjacentText('beforeend','Такого пользователя нет')
});


function banner(text) {
    let wrap = document.createElement('div');
    document.body.append(wrap)
    let h3 = document.createElement('h3')
    h3.innerHTML = `Search: '${text}'`;
    wrap.append(h3)

    let ul = document.createElement('ul')
    wrap.append(ul)
    addInf(current,ul)
}


function addInf(obj,ul) {
    for(let key in obj) {
        let li = document.createElement('li');
        ul.append(li)
        if (typeof obj[key] == 'object') {
            let inUl = document.createElement('ul');
            li.append(inUl)
            return addInf(obj[key], inUl)
        }
        li.innerHTML = `${key}:  ${obj[key]}`;

    }
}


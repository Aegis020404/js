let i = 0;
div.onclick = count;

function count(e) {
    
    div.style.width = i >= 100 ? 100 : i++ + 'px'; 

    if(i < 100) setTimeout(count, 30)
    if(i >= 100) {
        console.log('complete');
        div.innerHTML = 'Downloaded'
    }
    return false;
}

let form = document.forms[0]
console.log(form)
form.onsubmit = function() {
    console.log(input.value)

    return false;
}
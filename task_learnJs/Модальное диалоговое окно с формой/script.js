let prompt = document.getElementById('prompt-form')
prompt.cancel.onclick = function () {
    alert(`Вы ввели null`)
    window["cover-div"].hidden = true;

}
prompt.onsubmit = function (e) {
    let mess = this.text.value
    alert(`Вы ввели ${ this.text.value || null}`)
    window["cover-div"].hidden = true;
    return false;
}
function callback (res){

}
document.forms[0].onsubmit = function () {
    console.log('qwe')
    window["cover-div"].hidden = false
    return false;
} 
form.onsubmit=function(){
    console.log("qwe")
    cover=document.createElement('div');
    cover.id='cover-div';
    document.body.style.overflow="hidden"
    document.body.append(cover)
    
    let promptFormContainer =document.getElementById('prompt-form-container');
    promptFormContainer.hidden = false;

    let promptForm=document.getElementById('prompt-form');
    promptForm.onsubmit = function (e) {
        if(!(promptForm.elements.text.value=="")) {
            showPrompt(promptForm.elements.text.value,call);
        }
        if(promptForm.elements.text.value=="") return false;

    }
    document.onkeydown=function(e){
        if(e.code =="Escape") {
            showPrompt(null,call)
            promptForm.submit();
        }
    }
    promptForm.elements.cancel.onclick=function(){
        showPrompt(null,call)
        console.log('cancel')
        promptForm.submit();
    }
    
    return false;
};

let call = function(html){
    alert('Вы ввели '+html)
}

function showPrompt(html,callback) {
    return callback(html);

}


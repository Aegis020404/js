document.addEventListener('click',function(event){
    if(event.target.getElementsByClassName('remove-button') != undefined) {
        event.target.parentNode.style.display="none"
    }

})

container.addEventListener('click',function(e) {
    if(e.target.dataset.remove !=undefined) {
        e.target.parentElement.hidden = true
    }
})
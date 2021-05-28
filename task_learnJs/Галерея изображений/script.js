
thumbs.addEventListener('click',function(event){
    if (event.target.parentElement.tagName =='A'){
        let a=event.target.parentElement
        event.preventDefault();
        console.log(a);
        largeImg.src=a.href
    }
})
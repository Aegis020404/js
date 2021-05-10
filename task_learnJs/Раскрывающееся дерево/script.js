for (li of document.getElementsByTagName('li')){
    let span = document.createElement('span');
    
    li.prepend(span)
    span.append(span.nextSibling)
}
document.addEventListener('click',function(event){
    if(event.target.tagName == 'SPAN') {
      
        if (event.target.nextElementSibling !== null) { 
        let ul =event.target.nextElementSibling;
        ul.hidden=!ul.hidden;
    }
    
    }
})
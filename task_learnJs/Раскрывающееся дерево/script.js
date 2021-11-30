for(let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span')
    span.append(li.firstChild)
    li.prepend(span)
}


tree.addEventListener('click',function(e) {
    if(e.target.tagName !== 'SPAN') return

    if(!e.target.nextElementSibling) return;
    console.log(e.target.nextElementSibling)
    e.target.nextElementSibling.hidden = !e.target.nextElementSibling.hidden 
})
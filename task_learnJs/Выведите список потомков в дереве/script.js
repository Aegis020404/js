for(let li of document.body.querySelectorAll('li')) {
    li.firstChild.data +=` [${li.querySelectorAll('li').length}]`
}

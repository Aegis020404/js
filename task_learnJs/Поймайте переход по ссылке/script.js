contents.addEventListener('click',function(e) {
    if(!e.target.closest('A')) return
    let question = confirm(`Leave for ${e.target.closest('A').href}`)
    question ? undefined : e.preventDefault()
})
thumbs.addEventListener('click', function (e) {
    let link = e.target.closest('A')
    if (!link) return
    e.preventDefault();
    largeImg.src = link.href
})
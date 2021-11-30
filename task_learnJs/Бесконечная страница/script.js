let win = document.documentElement.clientHeight
document.addEventListener('scroll',function() {
    let date = document.createElement('div');
    date.innerHTML = new Date();
    document.body.append(date);
    if(date.getBoundingClientRect().bottom > win) {
        win+=1;
        date.replaceWith()
    }
});
    
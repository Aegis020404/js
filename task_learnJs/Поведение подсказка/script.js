for(let btn of document.querySelectorAll('button')) {
    btn.addEventListener('mouseover',function() {
        let helper = document.createElement('div');
        helper.classList.add('toolTip')
        helper.innerHTML = this.dataset.tooltip
        document.body.append(helper);
        helper.style.top = this.offsetTop - helper.offsetHeight - 5 +'px'
        helper.style.left = this.offsetLeft + 'px'
        console.log(getComputedStyle(helper).top)
        this.addEventListener('mouseout',function() {
            helper.replaceWith()
        })
    })


    
}
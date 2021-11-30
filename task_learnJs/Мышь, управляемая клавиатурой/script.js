mouse.onfocus = function(e) {
    console.log('qwe')
    e.target.style.border = '1px dashed'
    mouse.addEventListener('keydown', function(e) {
        switch (e.code) {
            case 'ArrowUp': this.style.top =parseInt(getComputedStyle(this).top) - this.offsetHeight + 'px'
                break;
            case 'ArrowDown': this.style.top =parseInt(getComputedStyle(this).top) + this.offsetHeight + 'px'
                break;
            case 'ArrowLeft': this.style.left =parseInt(getComputedStyle(this).left) - this.offsetWidth + 'px'
                break;
            case 'ArrowRight': this.style.left =parseInt(getComputedStyle(this).left) + this.offsetWidth + 'px'
        }
    })
} 
mouse.onblur = (e) => e.target.style.border = 'none'
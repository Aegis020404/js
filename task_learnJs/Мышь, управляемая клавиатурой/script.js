mouse.addEventListener('focus',function() {
    mouse.addEventListener('keydown',function(event){
        console.log(event.code)
        let mouseStyle = getComputedStyle(mouse)
        if(event.code == "ArrowRight"){
       
            mouse.style.left=parseInt(mouseStyle.left)+mouse.getBoundingClientRect().width+'px'
        }
        if(event.code == "ArrowLeft"){
           
            mouse.style.left=parseInt(mouseStyle.left)-mouse.getBoundingClientRect().width+'px'
        }
        if(event.code == "ArrowUp"){
            
            mouse.style.top=parseInt(mouseStyle.top)-mouse.getBoundingClientRect().height+'px'
        }
        if(event.code == "ArrowDown"){
            
            mouse.style.top=parseInt(mouseStyle.top)+mouse.getBoundingClientRect().height+'px'
        }
    })
})


    // ArrowLeft
    // ArrowUp
    // ArrowRight
    // ArrowDown  
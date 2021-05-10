let tooltip = document.createElement('div');
tooltip.classList.add("tooltips");



document.addEventListener('mouseover',function(event){
   
    if( event.target.dataset.tooltip == "эта подсказка должна быть длиннее, чем элемент"){

        tooltip.style.display="block"
        tooltip.style.minWidth="200px"
        tooltip.innerHTML=event.target.dataset.tooltip;
        tooltip.style.top=(event.target.getBoundingClientRect().y-15-event.target.offsetHeight)+'px'
        tooltip.style.left=0+"px"
        
        
        
       

        
        event.target.after(tooltip)
        console.log(event.target.getBoundingClientRect().y)
        console.log(event.target.clientHeight)
        


        }
    


    if( event.target.dataset.tooltip == "HTML<br>подсказка"){
        tooltip.style.minWidth="0px"
        tooltip.style.display="block"
        tooltip.innerHTML=event.target.dataset.tooltip;
        tooltip.style.top=(event.target.getBoundingClientRect().y-34-event.target.offsetHeight)+'px';
        tooltip.style.left=event.target.getBoundingClientRect().x+"px"
        event.target.after(tooltip)
         console.log('HTML<br>подсказка')
        }
        if(event.target.getBoundingClientRect().y < tooltip.clientHeight) {
            tooltip.style.top=event.target.getBoundingClientRect().y+event.target.clientHeight+5+'px'
        }

})

document.addEventListener('mouseout',function(event){
    if( event.target.dataset.tooltip == "эта подсказка должна быть длиннее, чем элемент"){
        tooltip.style.display="none"
    }
    if( event.target.dataset.tooltip == "HTML<br>подсказка"){
        tooltip.style.display="none"
    }



})


let tool = document.createElement('div');
house.addEventListener('mouseover',function(e){

        if(e.target.dataset.tooltip==undefined) {
           
            
        tool.classList.add('tooltips');
        tool.innerHTML=e.currentTarget.dataset.tooltip
        house.after(tool)
        tool.style.left=e.currentTarget.getBoundingClientRect().x+e.currentTarget.getBoundingClientRect().width/2-tool.getBoundingClientRect().width/2+'px'
        tool.style.top=e.currentTarget.getBoundingClientRect().y-tool.getBoundingClientRect().height+'px'

        if(e.currentTarget.getBoundingClientRect().y<tool.getBoundingClientRect().height){
         
            tool.style.top=e.currentTarget.getBoundingClientRect().y+e.currentTarget.getBoundingClientRect().height+'px'
        }
          

        return;
        }
        

    
    tool.classList.add('tooltips');
    tool.innerHTML=e.target.dataset.tooltip
    house.after(tool)
    tool.style.left=e.target.getBoundingClientRect().x+e.target.getBoundingClientRect().width/2-tool.getBoundingClientRect().width/2+'px'
    tool.style.top=e.target.getBoundingClientRect().y-tool.getBoundingClientRect().height+'px'
    if(e.target.getBoundingClientRect().y<tool.getBoundingClientRect().height){
    
        tool.style.top=e.target.getBoundingClientRect().y+e.target.getBoundingClientRect().height+'px'
    }
      
});
house.addEventListener('mouseout',function(e){
    tool.remove()
});

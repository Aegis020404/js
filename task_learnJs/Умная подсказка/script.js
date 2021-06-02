let i=0;
tooltips.style.top=elem.getBoundingClientRect().height+elem.getBoundingClientRect().y+'px';


elem.addEventListener('mouseenter',function(e){
    i=1;
   
    setTimeout(function(){
        if(i==1) tooltips.hidden=false;
    },1000)
 
    
  
});
elem.addEventListener('mouseleave',function(e){
    tooltips.hidden=true;
    i=0;
});

console.log(tooltips.hidden);
console.log(elem.getBoundingClientRect().height);
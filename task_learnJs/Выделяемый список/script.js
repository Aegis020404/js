ul.addEventListener('click',function(e) {
    if(e.target.tagName !== 'LI') return
    if(e.ctrlKey){
         e.target.classList.toggle('selected');
         return;
    }
    for(li of ul.querySelectorAll('li')) li.classList.remove('selected')
    
    e.target.classList.add('selected');

});
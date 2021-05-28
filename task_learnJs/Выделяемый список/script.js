let selectedLi
ul.addEventListener('click',function(e){
    let element=e.target;
    if((e.ctrlKey || e.metaKey) && (element.tagName == "LI")){
        element.classList.add('selected');
        return;
    }
    if (element.tagName == "LI") {
        select(element)
        }
    
    function select(li) {
        for(li2 of document.getElementsByTagName('li')){
            li2.classList.remove('selected')
        }
        selectedLi = li;
        selectedLi.classList.add('selected');
    }


})
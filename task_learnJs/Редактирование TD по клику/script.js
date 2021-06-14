let check =1;
let area =null;
let table = document.getElementById('bagua-table');
table.addEventListener('click',function(event){
    if(check==0) return
    let target = event.target.closest('TD');

    if( target.tagName=='TD'){
        
        console.log('qwe')
        if(!(target==area)){
        editStart(target);
    }
    }
    
})

function editStart(target) {
    check=0
    area = document.createElement('textarea');
    area.value=target.innerHTML;
    target.replaceWith(area)
    console.log(target.tagName)
    let btnSave = document.createElement('button');
    btnSave.innerHTML ="OK"
    btnSave.className="btnSave";
    document.body.prepend(btnSave);
    btnSave.style.top=area.getBoundingClientRect().bottom+'px'
    btnSave.style.left=area.getBoundingClientRect().left+'px'
    btnSave.onclick=function() {
        target.innerHTML=area.value;
        area.replaceWith(target);
        btnSave.remove();
        btnCancel.remove();
        check=1
    }
    let btnCancel =document.createElement('button');
    btnCancel.innerHTML ="CANCEL"
    btnCancel.className="btnCancel";
    document.body.prepend(btnCancel);
    btnCancel.style.top=area.getBoundingClientRect().bottom+'px'
    btnCancel.style.left=area.getBoundingClientRect().left+'px'
    btnCancel.onclick=function() {
        area.replaceWith(target);
        btnSave.remove();
        btnCancel.remove();
        check=1
    }
};



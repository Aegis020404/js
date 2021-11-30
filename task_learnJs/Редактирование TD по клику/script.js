let data = document.getElementById('bagua-table');
let text
let selected = false;
data.onclick = function(e) {
    if(selected || e.target.tagName == 'BUTTON') return 
    selected = true;
    let td = e.target.closest('td');
    text = td.innerHTML
    editTd(td)
}

function editTd(td) {
    td.style.position = 'relative'
    let edit = document.createElement('textarea');
    edit.classList.add('edit')
    edit.style.height = td.offsetHeight + 'px' 
    edit.style.width = td.offsetWidth + 'px'  
    edit.value = text
    td.append(edit)
    

    btnOk = document.createElement('button');
    btnOk.innerHTML = 'OK';
    btnOk.className = 'btn';
    btnOk.style.top = btnOk.offsetHeight + td.offsetHeight +'px';
    btnOk.style.left = 0;
    td.append(btnOk)

    btnOk.onclick = function() {
           td.innerHTML = edit.value;
           edit.replaceWith();
           selected = false;
    }
        
        
    btnCancel = document.createElement('button');
    btnCancel.innerHTML = 'CANCEL';
    btnCancel.className = 'btn';
    btnCancel.style.top = btnCancel.offsetHeight + td.offsetHeight +'px';
    btnCancel.style.left = btnOk.offsetWidth +'px';
    td.append(btnCancel)

    btnCancel.onclick = function() {
        td.innerHTML = text;
        edit.replaceWith();
        selected = false;
 }
}
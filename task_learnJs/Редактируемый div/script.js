let view = document.querySelector('#view')
view.addEventListener('focus',function() {
    let edit = document.createElement('textarea');
    edit.className = 'edit';
    edit.value = view.innerHTML
    view.replaceWith(edit)
    edit.focus();

    edit.addEventListener('blur', function () {
        view.innerHTML = edit.value;
        edit.replaceWith(view)
    });
});


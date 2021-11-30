for(let pane of document.querySelectorAll('.pane')) {
    pane.innerHTML+='<button class="remove-button">[x]</button>'
    pane.querySelector('.remove-button').onclick = function(e) {
        e.currentTarget.parentElement.hidden = true;
    }
}
let area=null;
let view= document.getElementById('view');
view.onclick = function() {
    editStart();
};
function editStart() {
    area = document.createElement('textarea');
    area.className = 'edit';
    area.value=view.innerHTML;

    area.onkeydown = function(e) {
        if(e.key == "Enter") {
            this.blur();
        }
    }

area.onblur = function(){
    editEnd();
};
view.replaceWith(area);
area.focus();
};
function editEnd() {
    view.innerHTML = area.value;
    area.replaceWith(view);
  }
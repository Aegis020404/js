let table = document.getElementById('bagua-table');

let selectedTd;

table.onclick = function(event) {
    let target = event.target;// где был клик?

    while (target!=this) {
        if (target.tagName == "TD") {/// не на TD? тогда не интересует
            highlight(target);// подсветить TD
            return;
        }
        
        target = target.parentNode;
    }
}

    function highlight(node) {
        if (selectedTd) {// убрать существующую подсветку, если есть
            selectedTd.classList.remove('highlight');
        }
        selectedTd = node;
        selectedTd.classList.add('highlight');// подсветить новый td
    }



    // Поведение счётчик
    document.addEventListener('click',function(event){
        if(event.target.dataset.counter != undefined) {//если есть атрибут
           event.target.value++ 
        }
    })

    // Поведение: "Переключатель"(Toggler)
    document.addEventListener('click',function(event) {
        let id = event.target.dataset.toggleId;
        if (!id) return;

        let elem = document.getElementById(id);

        elem.hidden = !elem.hidden
    })
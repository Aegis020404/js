// Событие: change
    // Событие change срабатывает по окончании изменения элемента.
    // Для текстовых <input> это означает, что событие происходит при потере фокуса. 
    // Для других элементов: select, input type=checkbox/radio событие запускается сразу после изменения значения:


// Событие: input
    // Событие input срабатывает каждый раз при изменении значения.
    input.oninput= function() {
        result.innerHTML=input.value;
    };


// События: cut, copy, paste
    // Эти события происходят при вырезании/копировании/вставке данных.
    // Мы также можем использовать event.preventDefault() для предотвращения действия по умолчанию, и в итоге ничего не скопируется/не вставится.


    notCopy.oncut = notCopy.oncopy = notCopy.onpaste = function(event) {
        alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
        return false;
      };
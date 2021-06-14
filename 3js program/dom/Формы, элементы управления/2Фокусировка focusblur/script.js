// События focus/blur
// Событие focus вызывается в момент фокусировки, а blur – когда элемент теряет фокус.
input.onblur=function() {
    if(!input.value.includes('@')){//не email
    this.classList.add('invalid');
    error.innerHTML='Пожалуйста, введите правильный email.'
    
    }
};
input.onfocus=function() {
    if(this.classList.contains('invalid')) {
        //удаляем индикатор ошибки ,т.к. пользователь хочет ввести заново
        this.classList.remove('invalid');
        error.innerHTML='';
    }
}


//  Методы focus/blur
// Методы elem.focus() и elem.blur() устанавливают/снимают фокус.
input1.onblur=function(){
    if(!this.value.includes('@')){
        this.classList.add('invalid');
        error.innerHTML='Пожалуйста, введите правильный email.'
        // ...и вернуть фокус обратно
        this.focus();
      } else {
        this.classList.remove("invalid");
        error.innerHTML=''
      }
    };

// Включаем фокусировку на любом элементе: tabindex
// tabindex="0" ставит элемент в один ряд с элементами без tabindex. То есть, при переключении такие элементы будут после элементов с tabindex ≥ 1.

// Обычно используется, чтобы включить фокусировку на элементе, но не менять порядок переключения. Чтобы элемент мог участвовать в форме наравне с обычными <input>.

// tabindex="-1" позволяет фокусироваться на элементе только программно. Клавиша Tab проигнорирует такой элемент, но метод elem.focus() будет действовать.
     


// События focusin/focusout
// Второе решение: события focusin и focusout – такие же, как и focus/blur, но они всплывают.
// Заметьте, что эти события должны использоваться с elem.addEventListener, но не с on<event>.
let form =document.forms.my;
form.addEventListener('focusin',()=>form.classList.add('focused'));
form.addEventListener('focusin',()=>form.classList.remove('focused'));



// Текущий элемент с фокусом можно получить из document.activeElement.
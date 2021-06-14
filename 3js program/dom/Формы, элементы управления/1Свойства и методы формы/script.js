// Навигация : формы и элементы
    // document.forms.my - форма с именем "my"(name="my");
    // document.forms[0] - первая форма в документе;

    //получаем форму
    let form = document.forms.my;

    //получаем элемент
    let elem1 =form.elements.one;

    // Может быть несколько элементов с одним и тем же именем, это часто бывает с кнопками-переключателями radio.
    // В этом случае form.elements[name] является коллекцией, например:
    let form1 = document.forms[1]
    let ageElems = form1.elements.age;
    console.log(ageElems); 



    console.log(form3.elements.login);

    let fieldset = form3.elements.userFields;
    console.log(fieldset);

    //  Мы можем достать элемент по имени как из формы , так и из fieldset c ним
    console.log(fieldset.elements.login==form3.elements.login);

    // Обратная ссылка: element.form
    // Для любого элемента форма доступна через element.form. Так что форма ссылается на все элементы, а эти элементы ссылаются на форму.
    console.log(fieldset.form)


    //     input и textarea
    // К их значению можно получить доступ через свойство input.value (строка) или input.checked (булево значение) для чекбоксов.

    // Вот так:

    // input.value = "Новое значение";
    // textarea.value = "Новый текст";

    // input.checked = true; // для чекбоксов и переключателей
    form3.elements.login.value="$uM1m4$eN"


// Элементы формы
//     select и option
//     Элемент <select> имеет 3 важных свойства:
// select.options – коллекция из подэлементов <option>,
// select.value – значение выбранного в данный момент <option>,
// select.selectedIndex – номер выбранного <option>.

    //  все три строки делают одно и то же

    // select.options[2].selected=true;
    // select.selectIndex = 2;
    select.value="banana"

    let selected= Array.from(select.options)
    .filter(option=>option.selected)
    .map(option=>option.value);
    console.log(selected)


//     new Option
// Элемент <option> редко используется сам по себе, но и здесь есть кое-что интересное.
// В спецификации есть красивый короткий синтаксис для создания элемента <option>:
// option = new Option(text, value, defaultSelected, selected);
let option = new Option('Ананас','pineapple',true, true);
// Элементы <option> имеют свойства:
// option.selected
// Выбрана ли опция.
// option.index
// Номер опции среди других в списке <select>.
// option.text
// Содержимое опции (то, что видит посетитель).

select.prepend(option);









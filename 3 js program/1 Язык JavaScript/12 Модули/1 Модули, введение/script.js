// Что такое модуль?
    // Модули могут загружать друг друга и использовать директивы export и import, чтобы обмениваться функциональностью, вызывать функции одного модуля из другого:

    // // export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
    // // import позволяет импортировать функциональность из других модулей.
    import {sayHi} from './sayHi.js';

    console.log(sayHi); // function...
    sayHi('John'); // Hello, John!
    // script type="module">.


// Основные возможности модулей

    // В модулях всегда используется режим use strict

        // a = 6 // вызовет ошибку

    // Каждый модуль имеет свою собственную область видимости

        // console.log(window.secScript || 'такой переменной нет')

        import {user} from './sayHi.js';
        document.body.innerHTML = user

    // Код в модуле выполняется только один раз при импорте

        import './run1.js';
        // покажет , что модуль ран был выполнен
        
        import './run1.js'; // ничего не покажет

        import {qwe} from './run1.js';
        console.log(qwe); //{1: 'sayHi'} изменения в скприпте 'sayHi' полекли к полному изменению объекта

    // import.meta
        // Содержимое зависит от окружения. В браузере он содержит ссылку на скрипт или ссылку на текущую веб-страницу, если модуль встроен в HTML:
        console.log(import.meta.url);

    // В модуле «this» не определён
        console.log(this) // undefined
        
    // Модули являются отложенными (deferred)
    // Но атрибут async работает во встроенных скриптах

    // Не допускаются «голые» модули
        // import {sayHi} from 'sayHi'; // Ошибка, "голый" модуль
        // путь должен быть, например './sayHi.js' или абсолютный

    // Совместимость, «nomodule»
        // Старые браузеры не понимают атрибут type="module". Скрипты с неизвестным атрибутом type просто игнорируются. Мы можем сделать для них «резервный» скрипт при помощи атрибута nomodule:


// Инструменты сборки
    // В реальной жизни модули в браузерах редко используются в «сыром» виде. Обычно, мы объединяем модули вместе, используя специальный инструмент, например Webpack и после выкладываем код на рабочий сервер.

    // Одно из преимуществ использования сборщика – он предоставляет больший контроль над тем, как модули ищутся, позволяет использовать «голые» модули и многое другое «своё», например CSS/HTML-модули.

    // Сборщик делает следующее:

    // Берёт «основной» модуль, который мы собираемся поместить в <script type="module"> в HTML.
    // Анализирует зависимости (импорты, импорты импортов и так далее)
    // Собирает один файл со всеми модулями (или несколько файлов, это можно настроить), перезаписывает встроенный import функцией импорта от сборщика, чтобы всё работало. «Специальные» типы модулей, такие как HTML/CSS тоже поддерживаются.
    // В процессе могут происходить и другие трансформации и оптимизации кода:
    // Недостижимый код удаляется.
    // Неиспользуемые экспорты удаляются («tree-shaking»).
    // Специфические операторы для разработки, такие как console и debugger, удаляются.
    // Современный синтаксис JavaScript также может быть трансформирован в предыдущий стандарт, с похожей функциональностью, например, с помощью Babel.
    // Полученный файл можно минимизировать (удалить пробелы, заменить названия переменных на более короткие и т.д.).
    // Если мы используем инструменты сборки, то они объединяют модули вместе в один или несколько файлов, и заменяют import/export на свои вызовы. Поэтому итоговую сборку можно подключать и без атрибута type="module", как обычный скрипт:


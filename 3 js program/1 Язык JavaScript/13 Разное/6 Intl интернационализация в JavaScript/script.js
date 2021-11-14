// Основные объекты
    // Intl.Collator
        // Умеет правильно сравнивать и сортировать строки.
    // Intl.DateTimeFormat
        // Умеет форматировать дату и время в соответствии с нужным языком.
    // Intl.NumberFormat
        // Умеет форматировать числа в соответствии с нужным языком.


// Локаль
    // Локаль – первый и самый важный аргумент всех методов, связанных с интернационализацией.
    // Локаль описывается строкой из трёх компонентов, которые разделяются дефисом:
    // Код языка.
    // Код способа записи.
    // Код страны.

    // На практике не всегда указаны три, обычно меньше:
        // ru – русский язык, без уточнений.
        // en-GB – английский язык, используемый в Англии (GB).
        // en-US – английский язык, используемый в США (US).
        // zh-Hans-CN – китайский язык (zh), записываемый упрощённой иероглифической письменностью (Hans), используемый в Китае.


// Строки, Intl.Collator
    // let collator = new Intl.Collator([locales,[options]])
        //     Параметры:
        // locales
        // Локаль, одна или массив в порядке предпочтения.
        // options
        // Объект с дополнительными настройками:
        // localeMatcher – алгоритм выбора подходящей локали.
        // usage – цель сравнения: сортировка "sort" или поиск "search", по умолчанию "sort".
        // sensitivity – чувствительность: какие различия в символах учитывать, а какие – нет, варианты:
            // base – учитывать только разные символы, без диакритических знаков и регистра, например: а ≠ б, е = ё, а = А.
            // accent – учитывать символы и диакритические знаки, например: а ≠ б, е ≠ ё, а = А.
            // case – учитывать символы и регистр, например: а ≠ б, е = ё, а ≠ А.
            // variant – учитывать всё: символ, диакритические знаки, регистр, например: а ≠ б, е ≠ ё, а ≠ А, используется по умолчанию.
        // ignorePunctuation – игнорировать знаки пунктуации: true/false, по умолчанию false.
        // numeric – использовать ли численное сравнение: true/false, если true, то будет 12 > 2, иначе 12 < 2.
        // caseFirst – в сортировке должны идти первыми прописные или строчные буквы, варианты: "upper" (прописные), "lower" (строчные) или "false" (стандартное для локали, также является значением по умолчанию). Не поддерживается IE11.
        // В подавляющем большинстве случаев подходят стандартные параметры, то есть options указывать не нужно.
    let collator = new Intl.Collator()

    // let result = collator.compare(str1, str2);
        // Результат compare имеет значение 1 (больше), 0 (равно) или -1 (меньше).
    console.log( "ёжик" > "яблоко" ); // true (ёжик больше, что неверно)
    console.log( collator.compare("ёжик", "яблоко") ); // -1 (ёжик меньше, верно)
    console.log( collator.compare("ЁжиК", "ёжик") ); // 1, разные
    collator = new Intl.Collator(undefined, {
        sensitivity: 'accent'
    });
    console.log( collator.compare("ЁжиК", "ёжик") ); // 0, одинаковые


// Даты, Intl.DateTimeFormat
    // создание
    // let formatter = new Intl.DateTimeFormat([locales, [options]])

    let date = new Date();
    let formatter1 = new Intl.DateTimeFormat('ru');
    console.log(formatter1.format(date)) // 14.11.2021

    let formatter2 = new Intl.DateTimeFormat('en-US');
    console.log(formatter2.format(date)) // 11/14/2021

    // Длинная дата, с настройками:
    let formatter3 = new Intl.DateTimeFormat('ru', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    console.log(formatter3.format(new Date())) // воскресенье, 14 ноября 2021 г.

    let formatter4 = new Intl.DateTimeFormat('ru', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    })
    setInterval(()=> document.body.innerHTML = formatter4.format(new Date()),1000)
    

// Числа, Intl.NumberFormat
    // Форматтер Intl.NumberFormat умеет красиво форматировать не только числа, но и валюту, а также проценты.

    // Пример без опций:
    {
        let formatter = new Intl.NumberFormat('ru');
        console.log(formatter.format(1234567890.123)); // 1 234 567 890,123
    }
    // С ограничением значимых цифр (важны только первые 3):
    {
        let formatter = new Intl.NumberFormat('ru', {
            maximumSignificantDigits: 3,
        });
        console.log(formatter.format(1234567890.123)); // 1 230 000 000
    }
    // С опциями для валюты:
    {
        let formatter = new Intl.NumberFormat('ru', {
            style: 'currency',
            currency: 'GBP'
        });
        console.log(formatter.format(1234.5)); // 1 234,50 £
    }


// Методы в Date, String, Number
    console.log(`ёжик`.localeCompare('яблоко','ru')); // -1

    console.log(new Date().toLocaleString('ru', { year: 'numeric', month: 'long'})); // ноябрь 2021 г.



// Отсортируйте массив с буквой ё
{
    let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
    animals.sort((a,b) =>a.localeCompare(b,'ru'))
    console.log(animals)
}
// MutationObserver: наблюдатель за изменениями
    let observer = new MutationObserver(mutationRecords => {
        console.log(mutationRecords); // console.log(изменения)
    });
    
    // наблюдать за всем, кроме атрибутов
    observer.observe(elem, {
        childList: true, // наблюдать за непосредственными детьми
        subtree: true, // и более глубокими потомками
        characterDataOldValue: true // передавать старое значение в колбэк
    });

    elem.innerHTML = 'qwe'
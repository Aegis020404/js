//history push state
var updatestate,
    links,
    contentEl,
    navEl,
    updatebuttons;


contentEl = document.querySelector('.content');//селектор запроса
navEl = document.querySelector('.nav');
links = {
    main: "This is th <strong>main</strong> page ",
    about: "This is th <strong>about</strong> page",
    downloads: "This is th <strong>downloads</strong> page"
};//отдельными сылками описан контент

updatestate = function(state){
    if (!state) return;
        contentEl.innerHTML =links[state.page];
        updatebuttons(state);
    };

    updatebuttons = function(state){
    [].slice.call(navEl.querySelectorAll('a'))
        .forEarch(function(e){
            var classList = e.parentNode.classList;
            state.page === e.getAttribute('href')
            ? classList.add('active')
            : classList.remove('active');
        });
    };

    window.addEventListener('popstate', function(e){
        updatestate(e.state);
    });


navEl.addEventListener('click', function(e){
    var state;
    if (e.target.tagName !== 'A') return;
    state = {
        page:e.target.getAttribute('href')
    };
    history.pushState(state,'',state.page);//(Объект состаяния из ктоторого мы в последствии сможем востановить состояние,описание,относительная ссылка)
    updatestate(state);//обновим состояние
    e.preventDefault();
});



//ни чё не вышло :(





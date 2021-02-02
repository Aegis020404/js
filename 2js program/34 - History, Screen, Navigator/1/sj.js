'use strick'
// // screen пи помощи него мы можем узнать разрешение экрана пользователя
// console.log(screen.width, screen.height);

// console.log(screen.availWidth, screen.availHeight);//показывает максимальный размер доступной области
// console.log(screen.colorDepth);//глубина цвета колличество бит на пиксель


// console.log(navigator);//можно получить немного информации об браузере и о платформе

// if (history && history.pushState){
//     //Do somethinge with history api
// }
// console.log(history.length);//вывести длину истории , которая нам доступна

// setTimeout(
//     function(){
//         history.back();//history.forward() - чтобы перейти на следующую страницу

//     },2000
// )//если ме перейдем из какой-нибудь страницы на эту , то через 2 секунды мы вернемся обратно 

// history.go(2);//чтобы перейти на 2 страницы вперед
// history.go(-2);//чтобы прейти на 2 страницы назад



//#
var updatestate, links, contentEl;

contentEl = document.querySelector('.content');//селектор запроса

links = {
    main: "This is th <strong>main</strong> page ",
    about: "This is th <strong>about</strong> page",
    downloads: "This is th <strong>downloads</strong> page"
}//отдельными сылками описан контент

updatestate = function(){
        var content = links[location.hash.slice(1)];//забирает hash с location и обрезает пирвый символ (#)
        contentEl.innerHTML = content || "Page not found";
    };

window.addEventListener('hashchange', updatestate);
window.addEventListener('load',updatestate);
















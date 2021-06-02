
// События mouseover/mouseout, relatedTarget
// Для события mouseover:
// event.target – это элемент, на который курсор перешёл.
// event.relatedTarget – это элемент, с которого курсор ушёл (relatedTarget → target).
// Для события mouseout наоборот:
// event.target – это элемент, с которого курсор ушёл.
// event.relatedTarget – это элемент, на который курсор перешёл (target → relatedTarget).


//  Пропуск элементов mousemove
// Браузер периодически проверяет позицию курсора и, заметив изменения, генерирует события mousemove.
// Это означает, что если пользователь двигает мышкой очень быстро, то некоторые DOM-элементы могут быть пропущены:
child.addEventListener('mouseover',function(e){
    console.log('child mouseover')
})
child.addEventListener('mouseout',function(e){
    console.log('child mouseout')
})
parents.addEventListener('mouseover',function(e){

    console.log('parents mouseover')
})
parents.addEventListener('mouseout',function(e){
    console.log('parents mouseout')
})


// События mouseenter и mouseleave
// Переходы внутри элемента, на его потомки и с них, не считаются.
// События mouseenter/mouseleave не всплывают.
child.addEventListener('mouseenter',function(e){
    console.log('child mouseenter')
})
child.addEventListener('mouseleave',function(e){
    console.log('child mouseleave')
})
parents.addEventListener('mouseenter',function(e){

    console.log('parents mouseenter')
})
parents.addEventListener('mouseleave',function(e){
    console.log('parents mouseleave')
})




//Деллегтрование событий

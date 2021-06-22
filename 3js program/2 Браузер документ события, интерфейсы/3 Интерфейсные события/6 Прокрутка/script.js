document.addEventListener('keydown',function(e){
    console.log(e.code);
    console.log(e.key);
    e.preventDefault();// Остановит прокрутку PageDown и PageUp
//     window.addEventListener('scroll',function(e){
//         e.preventDefault();
//     })
})
field.onclick = function (event) {

    // координаты поля относительно окна браузера 
    let fieldCoords = this.getBoundingClientRect();
    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
        top:event.clientY -fieldCoords.top - field.clientTop - ball.clientHeight/2,
        left:event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth/2,
    };

    // Запрещаем пересекать границы поля 
    if(ballCoords.top<0) ballCoords.top=0;//сверху
    if(ballCoords.left<0) ballCoords.left=0;//cлева
    if(ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    };
    if(ballCoords.top +ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    console.log(fieldCoords.top)
    console.log(fieldCoords.left)
    ball.style.left = ballCoords.left + 'px'
    ball.style.top = ballCoords.top + 'px'
}











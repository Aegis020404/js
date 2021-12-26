color.onclick = function(e) {
    e.target.style.backgroundColor = 'red';
}


// transition-property – свойство перехода
// transition-duration – продолжительность перехода
// transition-timing-function – временная функция перехода
// transition-delay – задержка начала перехода

growing.onclick = function() {
    this.style.fontSize = '36px';
    this.style.color = 'red';
}

stripe.onclick = function() {
    stripe.classList.add('animate')
}


flyjet.onclick = function() {
    flyjet.style.width = '400px';
    flyjet.style.height = '240px';
}

flyjet.addEventListener('transitionend', function(e) {
    if (e.propertyName == 'width') console.log('Анимация закончилася!')
})
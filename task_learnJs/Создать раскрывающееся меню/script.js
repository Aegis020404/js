
openList.onclick = function () {
    // ul.hidden = ul.hidden ? false : true
    ul.style.top = parseInt(getComputedStyle(ul).top) ? 0 : `-100px`
    openList.innerHTML = parseInt(getComputedStyle(ul).top) ?  '▼ Сладости (нажми меня)!' : '| ▶  Сладости (нажми меня)' 
}
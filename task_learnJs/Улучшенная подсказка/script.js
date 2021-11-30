let tooltip
house.addEventListener('mouseover',function(e) {
    let key = e.target.dataset.tooltip ? e.target : e.currentTarget;
    tooltip = document.createElement('div');
    tooltip.innerHTML = key.dataset.tooltip 
    tooltip.classList.add('tooltips')
    let coords = key.getBoundingClientRect();
    house.append(tooltip)
    tooltip.style.left = coords.x + coords.width/2 - tooltip.offsetWidth/2 + 'px'
    if (coords.y > tooltip.offsetHeight + 5) {
        tooltip.style.top = coords.y - tooltip.offsetHeight  - 5 +'px'
    } else {
        tooltip.style.top = coords.y + coords.height  + 5 +'px'
    }
})

house.addEventListener('mouseout',function(e) {
    tooltip.replaceWith()
})
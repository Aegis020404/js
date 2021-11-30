let idTime, tooltip;
elem.addEventListener('mouseenter',function() {
    idTime =setTimeout(()=>{
        tooltip = document.createElement('div');
        tooltip.className = "tooltip";
        tooltip.innerHTML = "Tooltip";
        tooltip.style.left = elem.getBoundingClientRect().left + 'px';
        tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
        elem.append(tooltip)
    },1000)

    elem.addEventListener('mouseleave',function() {
    clearTimeout(idTime)
    tooltip.replaceWith()
    });
});
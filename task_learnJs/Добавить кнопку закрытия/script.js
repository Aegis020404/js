let pane = document.getElementsByClassName('pane')
console.log(pane)
for(block of pane){
    block.innerHTML+='<button class="remove-button">[x]</button>';
    block.style.position="relative"
}
let removeButton = document.getElementsByClassName('remove-button')
console.log(removeButton);
for(item of removeButton){
    item.style.cssText=`
    position:absolute;
    right:2%;
    top:0em;
    `;
    item.addEventListener('click',removeBlock)
}
function removeBlock () {
    this.parentElement.style.display="none"
}



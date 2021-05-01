let i = 1;
for(let li of document.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;

}
let n=0
function getNext () {
  n+=390
  for(let li of document.querySelectorAll('li')) {
    
    
    li.style.left=`${n}px`
  }
}
 arrowNext.addEventListener('click',getNext)

 function getPrevious () {
   n-=390
   for(let li of document.querySelectorAll('li')) {
     
     
     li.style.left=`${n}px`
   }
 }

 arrowPrevious.addEventListener('click',getPrevious)
 
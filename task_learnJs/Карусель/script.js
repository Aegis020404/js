let lis = ul.querySelectorAll('li').length - 3;
console.log(lis)
next.onclick = function() {
  if(lis > 3) {
    lis -=3
  ul.style.marginLeft = parseInt(getComputedStyle(ul).marginLeft) - 390 + 'px'
} else if(lis == 2) {
    lis -=2
    ul.style.marginLeft = parseInt(getComputedStyle(ul).marginLeft) - 230 + 'px'
} else if(lis == 1) {
    lis -=1
    ul.style.marginLeft = parseInt(getComputedStyle(ul).marginLeft) - 130 + 'px'
}


  // console.log(getComputedStyle(ul).width)
  // console.log(parseInt(getComputedStyle(ul).marginLeft))
}
prev.onclick = function() {
  if(lis < 7) {
    lis +=3
    ul.style.marginLeft = parseInt(getComputedStyle(ul).marginLeft) + 360 + 'px'
  } 
    




  // console.log(parseInt(getComputedStyle(ul).marginLeft))
}
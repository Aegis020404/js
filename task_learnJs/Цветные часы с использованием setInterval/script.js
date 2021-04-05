let date = new Date();
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())

function getTime () {
    date =new Date();
hours.innerHTML = date.getHours() +':';



minutes.innerHTML = date.getMinutes()+':';



seconds.innerHTML = date.getSeconds()+' ';

}
setInterval(getTime,1000)
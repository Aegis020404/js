let time
function clockStart() {
    time = setInterval(()=>{
        let date = new Date();
        hours.innerHTML = date.getHours();
        minutes.innerHTML = date.getMinutes();
        seconds.innerHTML = date.getSeconds();
    },1000);
}

function clockStop() {
    clearInterval(time)
}

// console.log(ul.firstElementChild)
ul.firstElementChild.insertAdjacentHTML('afterend','<li>2</li><li>3</li>')




arr = []
for(let i = 0; i < table.rows.length-1; i++) arr.push(table.rows[i+1])

arr.sort((a,b)=>a.cells[0].innerHTML.length - b.cells[0].innerHTML.length)
table.append(...arr)































// let date = new Date();
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

// function getTime () {
//     date =new Date();
// hours.innerHTML = date.getHours() +':';



// minutes.innerHTML = date.getMinutes()+':';



// seconds.innerHTML = date.getSeconds()+' ';

// }
// setInterval(getTime,1000)
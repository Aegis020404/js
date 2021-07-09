
function camelize(str) {
    arr =  str.split('-');
    let aArr = []
    arr = arr.forEach((item,index,array) => { 
        // console.log(item[0].toUpperCase());
        if (!(index === 0)) {
        char0 = item[0]?.toUpperCase() 
        array[index] = char0 + item.slice(1)
        }
        aArr.push(array[index])
        // console.log(array[index])
       
    });
    str = aArr.join('');
    return str
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))










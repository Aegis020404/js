console.log(window.location);//позволяет работать с адресной строкой браузера
location.hash = "anything"//присвоение hash 
// hash - это дин из способов сохранения состояния в одностраничных приложениях

onhashchange = function(){
console.log(location.hash.slice(1));
}//для того чтобы следить за изменение хэша

// location.href = "http://google.com"//чтобы изменить адрес и отправится на другую страничку можно даже и без href на прямую
console.log(location.toString());//вернет значение нашего свойства href
console.log("Current URL is " + location);//при конкатинации вернет location значений своего href

location.search = "myself";//get - запрос

// console.log(location.reload());//страница будет постоянно перезагружаться

// location.assign("http://google.com");  переход на другую страницу
// location.replace("http://google.com"); тоже самое


console.log(encodeURI("http://google.com/page?name=Какое-то имя"));//перевод из нормальной строки в url последовотельность
console.log(decodeURI("http://google.com/page?name=%D0%9A%D0%B0%D0%BA%D0%BE%D0%B5-%D1%82%D0%BE%20%D0%B8%D0%BC%D1%8F"));
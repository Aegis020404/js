// let dates
// let body =getComputedStyle(document.body);
// let i=0
// function getTime (e){
//     while(innerHeight>document.body.offsetHeight){
//         let date = new Date
//         dates= document.createElement('p');
//         dates.innerHTML=date
//         i++
//         document.body.append(dates)
//     } 
//     innerHeight+=dates.getBoundingClientRect().height
//     console.log('qwerty')
// }
// getTime();
// document.addEventListener('scroll',getTime);






// function populate() {
//     while(true) {
//       // нижняя граница документа
//       let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
  
//       // если пользователь прокрутил достаточно далеко (< 100px до конца)
//       if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
//         // добавим больше данных
//         document.body.insertAdjacentHTML("beforeend", `<p>Дата: ${new Date()}</p>`);
//       }
//     }
//   }
  
//   populate()
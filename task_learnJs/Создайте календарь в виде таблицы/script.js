




function createCalendar(elem, year, month) {
    let date = new Date(year,month,0)
    let arr = []
    let days = date.getDate(); 
    for(let i = 0; i < 35;i++) {
        if(days <= 0) {
            arr[i] = 0
            continue;
        };
         arr[i] = days--
    }
    arr.sort((a,b)=>a-b)
    console.log(arr)
   let table = document.createElement('table');
   table.innerHTML ='<tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr>'
//    table.append(trH)
   elem.append(table)


    let i = 0
   for(let ir = 0 ; ir<=4; ir++) {
    let tr = document.createElement('tr');
    
    for(let id = 0 ; id<7; id++) {
        let td = document.createElement('td');
        if(arr[i] > 0) td.innerHTML = arr[i];
        tr.append(td);
        i++;
    }
    table.append(tr)
   }
  }



  let date = new Date(2012,9,0)
  console.log(new Date(date).getDate())


  createCalendar(calendar, 2022, 0);






































// function createCalendar(elem,year,month) {
//     let mon = month -1;// месяцы в js идут от 0 до 11 ,а не от 1 до 12
//     let d =new Date (year,mon);
//     let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

// //пробелы для первого ряда
// // с понедельника до первого месяца
// // * * * 1 2 3 4
//     for (let i = 0;i < getDay(d); i++) {
//         table += '<td></td>';
//     }

//     // <td> ячейки календаря с датами 
//     while (d.getMonth() == mon) {
//         table+='<td>' +d.getDate() + '</td>';

//         if (getDay(d) % 7 ==6) {// вс,последний день - перевод строки
//             table += "</tr><tr>";
//         }

//         d.setDate(d.getDate()+1);
//     }
//     console.log(d.getMonth())
//     //добить таблицу пустыми ячейками ,если нужно
//     //29 30 31 * * * *
//     if(getDay(d)!=0){
//         for (let i =getDay(d); i<7;i++){
//             table += "<td></td>";
//         }
//     }
//     //закрыть таблицу

//     table += "</tr></table>";
//     elem.innerHTML =table;
// }

// function getDay(date) {//получить номер дня недели , от 0 (пн) до 6 (вс)
//     let day =date.getDay();
//     if(day == 0) day = 7 ;// сделать воскресенье (0) последним днём 

//     return day -1;

// }
// createCalendar(calendar,2021,4)


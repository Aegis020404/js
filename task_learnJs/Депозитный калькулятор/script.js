let form = document.forms.calculator;
let months = form.elements.months;
let initial = form.elements.money;
let interest = form.elements.interest;

form.oninput=function(){
    let result =Math.round(initial.value * (1 + interest.value/100  * months.value/12 ));
    console.log(result)
    height_after.style.height=result/100+"px"
}


3412
4231
2143
1324

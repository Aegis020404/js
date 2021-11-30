let diag = document.getElementById('height-after')
let before = document.getElementById('money-before');
let after = document.getElementById('money-after');
let calc = document.forms.calculator
calc.oninput = function(e) {
    before.innerHTML = calc[0].value;
    let result = Math.round(calc[0].value * (1 + calc[2].value/100) ** (calc[1].value/12))
    console.log(result/(calc[0].value/100) )
    after.innerHTML = result;
    diag.style.height = result/(calc[0].value/100)+ 'px'
}

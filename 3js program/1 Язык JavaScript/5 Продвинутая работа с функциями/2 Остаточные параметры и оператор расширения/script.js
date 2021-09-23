let button = document.querySelector('button');
button.style.width='20em'
button.style.height='5em'
document.body.addEventListener('click', function(e) {
    if (e.target.className === 'btn') {
        e.target.parentNode.removeChild( e.target )
        let secondBTN = document.createElement('button')
        secondBTN.innerHTML ='click'
        secondBTN.className = "btn"
        document.body.append( secondBTN )

        let thirdBTN = document.createElement('button')
        thirdBTN.innerHTML ='click'
        thirdBTN.className = "btn"
        document.body.append( thirdBTN )

        thirdBTN.style.width=thirdBTN.getBoundingClientRect().width/1.1+'px'
        thirdBTN.style.height=thirdBTN.getBoundingClientRect().height/1.1+'px'

        secondBTN.style.width=secondBTN.
        getBoundingClientRect().width/1.1+'px'
        secondBTN.style.height=secondBTN.getBoundingClientRect().height/1.1+'px'
        console.log(secondBTN.getBoundingClientRect().width)
        // document.body.append( button )
    }
});

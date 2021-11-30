let setDown = new Set(),
    setUp = new Set();
let i = 0;
document.onkeydown = function(e) {
    setDown.add(e.code);
    console.log(e.code)
    if(setDown.has('KeyQ') && setDown.has('KeyW')) {
        setUp.clear();
        i = i < 3 ? i : 0;
        document.body.style.background = ['red','blue','green'][i++]
    }
    document.onkeyup = (e) => {
        setUp.add(e.code);
        if(setUp.has('KeyQ') && setUp.has('KeyW')){
            setDown.clear();
        }

    }
}




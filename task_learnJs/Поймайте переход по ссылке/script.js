for(a of document.getElementsByTagName('a')){
    a.onclick=function(){
        console.log('a')
        let question =confirm('leave for '+a.href+' ?')
        if(!question) return false;
        
    }
}

 
let i=0
openList.onclick=function() {
    
    if(i==0) {
        i++;
        openList.innerHTML=" ▶ Сладости (нажми меня)!"
        ul.innerHTML =`<li>Пирожное</li>
        <li>Пончик</li>
        <li>Мёд</li>`
    }
    else if(i==1){
        i--;
        openList.innerHTML=" ▼ Сладости (нажми меня)!"
        ul.innerHTML =``
    }
}
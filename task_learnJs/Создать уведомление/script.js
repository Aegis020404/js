function showNotification({top = 0, right = 0, className, html}) {
    let alert = document.createElement('div');
    alert.className = `${className} notification`;
    alert.style.top = top + 'px';
    alert.style.right = right + 'px';
    alert.innerHTML = html
    document.body.append(alert);
    setTimeout(()=>alert.style.display = 'none',1500)
  }




  // test it
  let i = 1;
  setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
  }, 2000);


//   showNotification({
//     top: 10,
//     right: 10,
//     html: 'Hello ' + 'World',
//     className: "welcome"
//   });
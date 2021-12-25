let textarea = document.querySelector('textarea')
textarea.innerHTML = localStorage.getItem('textarea')
textarea.addEventListener('input',function() {
    localStorage.setItem('textarea', textarea.value);
});
// localStorage.clear()



console.log(Object.keys(localStorage));
console.log(Object.values(localStorage));

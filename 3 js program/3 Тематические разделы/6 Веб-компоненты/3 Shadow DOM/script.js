customElements.define('show-hello', class extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML = `<p>
        Hello, ${this.getAttribute('name')}
        </p>`;
    }
})




let media = document.querySelector('video')
// media.mode = true;
console.log(media.mode)
sessionStorage.clear()
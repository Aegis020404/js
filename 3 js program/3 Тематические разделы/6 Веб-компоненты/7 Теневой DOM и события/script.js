customElements.define('user-card', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <p>
        <button>Нажми на меня</button>
        </p>`;
        this.shadowRoot.firstElementChild.onclick = e => console.log('Внутренний целевой элемент ' + e.target.tagName);
    }
});

document.onclick = e => console.log('Внешний целевой элемент: ' + e.target.tagName);


console.log(sahl)
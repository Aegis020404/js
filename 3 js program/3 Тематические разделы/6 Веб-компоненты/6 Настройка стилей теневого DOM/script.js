customElements.define('custom-dialog', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true));
    }
})
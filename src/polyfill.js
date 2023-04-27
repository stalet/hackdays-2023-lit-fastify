if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
    /** @type {HTMLTemplateElement | null} */
    const template = document.querySelector('rick-morty template'); // targets the react-ssr-hydration custom element and its nested template element which is automatically added as part of the SSR process
    const shadowRoot = template?.parentElement?.attachShadow({ mode: 'open' });
    if (template?.content) {
        shadowRoot?.appendChild(template?.content);
    }
}

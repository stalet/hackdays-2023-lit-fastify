import { LitElement, html, isServer } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('rick-morty')
export class RickMortyComponent extends LitElement {
    static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
    };
    @property()
    version = 'STARTING';

    @property()
    text = 'foo';

    render() {
        !isServer && console.log('render ric-morty');
        return html`
            <h1>Hello, world!</h1>
            <slot></slot>
            <p>This is a web component with Lit inside. ${this.text}</p>
        `;
    }
}

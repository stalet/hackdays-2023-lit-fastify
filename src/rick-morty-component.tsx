import { LitElement, html, isServer, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './App';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

@customElement('rick-morty')
export class RickMortyComponent extends LitElement {
    static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
    };

    static styles = css`
        @import 'https://assets.finn.no/pkg/@fabric-ds/css/v1/fabric.min.css';
        p {
            color: green;
        }
    `;

    @property()
    version = 'STARTING';

    @property()
    text = 'foo';

    @property()
    start = 100;

    render() {
        const app = `<div id="app">${renderToString(
            <App start={this.start} />,
        )}</div>`;
        console.log(`app: ${app}`);

        !isServer && console.log('render ric-morty');
        return html`
            <h1>Hello, world!</h1>
            <slot></slot>
            <p>This is a web component with Lit inside. ${this.text}</p>
            ${unsafeHTML(app)}
        `;
    }
}

import { html } from 'lit-html';
import './rick-morty-component.js';

export default ({ text }: { text?: string }) => {
    return html`<rick-morty text="${text}"></rick-morty>`;
};

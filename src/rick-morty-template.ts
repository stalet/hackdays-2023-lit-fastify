import { html } from 'lit-html';
import './rick-morty-component.js';

export default ({ text }: { text?: string }) => {
    return html`<html lang="en">
        <head>
            <title>Rick And Morty Web Component</title>
        </head>
        <body>
            <h1>Rick and morty web component!</h1>
            <rick-morty text="${text}"></rick-morty>
            <script type="module" src="/public/esm.js"></script>
        </body>
    </html>`;
};

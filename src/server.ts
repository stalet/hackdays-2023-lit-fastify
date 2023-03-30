import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
import * as url from 'url';
import { html } from 'lit-html';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import './rick-morty-component.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = fastify();

app.register(fastifyStatic, {
    root: join(__dirname, '../eik'),
    prefix: '/public/',
    index: false,
    list: true,
});

const template = (content: unknown) => `<html lang="en">
    <head>
        <title>Rick And Morty Web Component</title>
    </head>
    <body>
        <h1>Rick and morty web component!</h1>
        ${content}
        <script type="module" src="/public/esm.js"></script>
    </body>
</html>`;

app.get('/', async (request, reply) => {
    reply
        .type('text/html')
        .send(
            template(
                await collectResult(render(html`<rick-morty></rick-morty>`)),
            ),
        );
});

app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

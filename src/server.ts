import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
import * as url from 'url';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import rickMortyTemplate from './rick-morty-template.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = fastify();

app.register(fastifyStatic, {
    root: join(__dirname, '../eik'),
    prefix: '/public/',
    index: false,
    list: true,
});

const initialData = {
    text: 'Inside Shadow DOM',
};

/*
const template = (content: unknown) => html`<html lang="en">
    <head>
        <title>Rick And Morty Web Component</title>
    </head>
    <body>
        <h1>Rick and morty web component!</h1>
        ${content}
        <script type="module" src="/public/esm.js"></script>
    </body>
</html>`;
*/

app.get('/', async (request, reply) => {
    reply
        .type('text/html')
        .send(await collectResult(render(rickMortyTemplate(initialData))));
});

app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

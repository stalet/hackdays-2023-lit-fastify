import { html } from 'lit';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
import * as url from 'url';
import { TemplateResult } from 'lit-html';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = fastify();

app.register(fastifyStatic, {
    root: join(__dirname, '../eik'),
    prefix: '/public/',
    index: false,
    list: true,
});

const getRenderString = (data: TemplateResult) => {
    const { strings, values } = data;
    const v = [...values, ''];
    return strings.reduce((acc, s, i) => acc + s + v[i], '');
};

const template = (content: unknown) => html` <html lang="en">
    <head>
        <title>Rick And Morty Web Component</title>
    </head>
    <body>
        <h1>Rick and morty web component!</h1>
        ${content}
        <script type="module" src="/public/esm.js"></script>
    </body>
</html>`;

app.get('/', (request, reply) => {
    reply
        .type('text/html')
        .send(getRenderString(template(`<rick-morty></rick-morty>`)));
});

app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

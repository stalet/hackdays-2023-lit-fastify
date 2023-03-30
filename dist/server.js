import { html } from 'lit';
import fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join } from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = fastify();
app.register(fastifyStatic, {
    root: join(__dirname, '../eik'),
    prefix: "/public/",
    index: false,
    list: true
});
const getRenderString = (data) => {
    const { strings, values } = data;
    const v = [...values, '']; // + last emtpty part
    return strings.reduce((acc, s, i) => acc + s + v[i], '');
};
const template = (content) => html `
<html lang="en">
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
    reply.type('text/html').send(getRenderString(template((`<rick-morty></rick-morty>`))));
});
/*
app.get('/', (req, res) => {
  res.type('text/html').send(template((html`<RickMortyComponent></RickMortyComponent>`)));
});
*/
app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});

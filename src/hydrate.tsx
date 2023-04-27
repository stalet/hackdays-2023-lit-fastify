import './polyfill.js';
import 'lit/experimental-hydrate-support.js';
import('./rick-morty-component.js');
import React from 'react';
import App from './App';
import { hydrateRoot } from 'react-dom/client';

try {
    const el = document.querySelector('rick-morty');
    const props = el?.getAttribute('start');
    const element = el?.shadowRoot?.querySelector('#app');
    if (el && element && props) {
        hydrateRoot(element, <App start={+props} />);
    } else {
        console.log(
            `SKIPPING hydrating app el=${el} element=${element} props=${props}`,
        );
    }
    console.log('Done hydrating app');
} catch (err) {
    console.error('Failed to hydrate React app.', err);
}

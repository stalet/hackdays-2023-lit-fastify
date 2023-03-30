import { LitElement, html } from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('rick-morty')
export class RickMortyComponent extends LitElement {

  @property()
  version = 'STARTING';

  render() {
    return html`
      <h1>Hello, world!</h1>
      <p>This is a web component with Lit inside. ${this.version}</p>
    `;
  }
}

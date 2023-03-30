var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let RickMortyComponent = class RickMortyComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.version = 'STARTING';
    }
    render() {
        return html `
            <h1>Hello, world!</h1>
            <p>This is a web component with Lit inside. ${this.version}</p>
        `;
    }
};
__decorate([
    property()
], RickMortyComponent.prototype, "version", void 0);
RickMortyComponent = __decorate([
    customElement('rick-morty')
], RickMortyComponent);
export { RickMortyComponent };

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../agencia-viajes-home/agencia-viajes-header/agencia-viajes-header.js';
import '../agencia-viajes-home/agencia-viajes-body/agencia-viajes-body.js';
import '../agencia-viajes-home/agencia-viajes-footer/agencia-viajes-footer.js';
import '../styles/theme-styles-colors.js';
/**
 * @customElement
 * @polymer
 */
class AgenciaViajesApp extends PolymerElement {
  static get template() {
    return html`
      <style include="theme-styles-colors">
        :root {
          width: 100%;
          height: 100vh;
          background-color: var(--second-color-theme-two);
        }
      </style>
      <agencia-viajes-header></agencia-viajes-header>
      <agencia-viajes-body></agencia-viajes-body>
      <agencia-viajes-footer></agencia-viajes-footer>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'agencia-viajes-app'
      }
    };
  }
}

window.customElements.define('agencia-viajes-app', AgenciaViajesApp);

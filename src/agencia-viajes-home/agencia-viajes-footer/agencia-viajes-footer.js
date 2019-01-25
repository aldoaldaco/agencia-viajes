import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '../../styles/theme-styles-colors.js';
/*
* @customElement
* @polymer
* */
class AgenciaViajesFooter extends PolymerElement {
  static get template() {
    return html`
      <style include="theme-styles-colors">
        :root {
          position: fixed;
          bottom: 0;
          left: 0; 
          width: 100%;
          height: 5rem;
          font-family: var(--font-family, sans-serif);
          background-color: var(--sixth-color-theme-four);
          color: var(--first-color-theme-one);
        }
        h1 {
          margin: 0;
          padding: 0;
        }
        footer {
          display: flex;
        }
        .footer-left {
          display: flex;
          width: 55%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        .footer-right {
          display: flex;
          width: 45%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        h1 {
          font-size: 3rem;
        }
        paper-tabs {
          --paper-tabs: {
            width: 100%;
            height: 100%;
            font-size: 1rem;
          };
          --paper-tab-ink: var(--first-color-theme-one);
          --paper-tab: {
            background-color: var(--second-color-theme-one);
          };
        }
        .footer {
          flex-direction: row;
          justify-content: space-around;
          align-content: center;
          align-items: center;
        }
        @media only screen and (max-width: 780px) {
          .footer {
            flex-direction: column;
            justify-content: space-between;
            justify-items: center;
            height: 8rem;
          }
          .footer-left {
            width: 100%;
            height: 50%;
          }
          .footer-right {
            width: 100%;
            height: 50%;
          }
        } 
      </style>
      <footer class="footer">
        <div class="footer-left">
          <paper-tabs>
            <paper-tab>Facebook</paper-tab>
            <paper-tab>Instagram</paper-tab>
            <paper-tab>Google</paper-tab>
            <paper-tab>WhatsApp</paper-tab>
          </paper-tabs> 
        </div>
        <div class="footer-right">
          <h1>[[footer]]</h1>
        </div>
      </footer>
    `;
  }
  static get properties() {
    return {
      footer: {
        type: String,
        value: 'FOOTER'
      }
    };
  }
}

window.customElements.define('agencia-viajes-footer', AgenciaViajesFooter);

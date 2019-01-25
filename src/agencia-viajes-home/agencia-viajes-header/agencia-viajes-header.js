import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '../../styles/theme-styles-colors.js';
/*
* @customElement
* @polymer
* */
class AgenciaViajesHeader extends PolymerElement {
  static get template() {
    return html`
      <style include="theme-styles-colors">
        :root {
          font-family: var(--font-family, sans-serif);
          background-color: var(--second-color-theme-four);
          color: var(--second-color-theme-two);
        }
        header {
          display: flex;
          position: fixed;
          top: 0;
          left: 0; 
          width: 100%;
          height: 8rem;
        }
        .header-left {
          display: flex;
          width: 35%;
          height: 100%;
          justify-content: center;
        }
        .header-right {
          display: flex;
          width: 65%;
          height: 100%;
          justify-content: center;
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
          --paper-tabs-selection-bar: {
            border-width: 3px;
          };
          --paper-tab-ink: var(--first-color-theme-one);
          --paper-tabs-selection-bar-color: var(--fourth-color-theme-four);
        }
        .header {
          flex-direction: row;
          justify-content: space-around;
          align-content: center;
          align-items: center;
        }
        @media only screen and (max-width: 780px) {
          .header {
            flex-direction: column;
            justify-content: space-between;
            justify-items: center;
          }
          .header-left {
            width: 100%;
            height: 50%;
            align-items: center;
          }
          .header-right {
            width: 100%;
            height: 50%;
          }
        } 
      </style>
      <!--<div class="overlay-ribbon">
        <div class="ribbon-content">
          <button id="close" class="close-x" on-click="_closeRibbon">x</button>
          <div class="img-container"><img src="https://pixabay.com/static/uploads/photo/2015/10/31/21/02/cop-1016218_960_720.jpg" width="171" height="135" alt="" /></div>
          <h3>[[titleRibbon]]</h3>
          <p>[[contentRibbon]]</p>
        </div>
      </div>-->
      <header class="header">
        <div class="header-left">
          <h1>[[header]]</h1>
        </div>
        <div class="header-right">
          <paper-tabs>
            <paper-tab>Tab 0</paper-tab>
            <paper-tab>Tab 1</paper-tab>
            <paper-tab>Tab 2</paper-tab>
            <paper-tab>Tab 3</paper-tab>
          </paper-tabs>  
        </div>
      </header>
    `;
  }

  static get properties() {
    return {
      header: {
        type: String,
        value: 'HEADER'
      },
      hideRibbon: {
        type: Boolean,
        value: false
      },
      titleRibbon: {
        type: String,
        value: 'Title'
      },
      textRibbon: {
        type: String,
        value: 'Yes officer, I did see the ‘speed limit’ sign, I just didn’t see you.'
      },
      contentRibbon: {
        type: String,
        value: '',
        computed: '_contentRibbon(textRibbon)'
      }
    };
  }

  _closeRibbon(event) {
    event.stopPropagation();
    let parent = event.target.parentElement.parentElement;
    parent.classList.add('slideout');
  }

  _contentRibbon(string) {
    return string.length > 40 ? string.slice(0, 39).concat(' ...') : string.concat(' ...');
  }
}

window.customElements.define('agencia-viajes-header', AgenciaViajesHeader);

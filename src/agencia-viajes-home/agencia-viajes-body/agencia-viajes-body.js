import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-tabs/paper-tabs.js';
//import {Swiper} from '../../../node_modules/swiper/src/components/core/core.js';
import '../../styles/theme-styles-colors.js';
/*
* @customElement
* @polymer
* */
class AgenciaViajesBody extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="swiper/dist/css/swiper.min.css">
      <style include="theme-styles-colors">
        :root {
          width: 100%;
          height: 100%;
          padding-top: 8rem;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
      </style>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
          <div class="swiper-slide">Slide 10</div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <script src="swiper/dist/js/swiper.min.js"></script>
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
  connectedCallback() {
    super.connectedCallback();
    return new Swiper(this.$['swiper-container'], {
      grabCursor: true,
      observer: true,
      loop: false,
      roundLengths: true
    });
  }
}

window.customElements.define('agencia-viajes-body', AgenciaViajesBody);

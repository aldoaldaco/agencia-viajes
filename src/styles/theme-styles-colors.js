{
  const styles = document.createElement('dom-module');
  styles.id = 'theme-styles-colors';
  styles.innerHTML = `<template><style>
    :host {
      /*THEME 1*/
      --first-color-theme-one: #FFFFFF;
      --second-color-theme-one: #BDBDBE;
      --third-color-theme-one: #0083BB;
      --fourth-color-theme-one: #29BF89;
      --fifth-color-theme-one: #7D8E85;
      /*THEME 2*/
      --first-color-theme-two: #FFFFFF;
      --second-color-theme-two: #374353;
      --third-color-theme-two: #25BEA0;
      --fourth-color-theme-two: #FACC43;
      --fifth-color-theme-two: #FABC09;
      /*THEME 3*/
      --first-color-theme-three: #FFFFFF;
      --second-color-theme-three: #B07D5C;
      --third-color-theme-three: #8A2B33;
      --fourth-color-theme-three: #454540;
      --fifth-color-theme-three: #007F70;
      /*THEME 4*/
      --first-color-theme-four: #FFFFFF;
      --second-color-theme-four: #BAE1F2;
      --third-color-theme-four: #64C2EC;
      --fourth-color-theme-four: #F74356;
      --fifth-color-theme-four: #8DAABA;
      --sixth-color-theme-four: #454540;
      /*THEME 5*/
      --first-color-theme-five: #FFFFFF;
      --second-color-theme-five: #878284;
      --third-color-theme-five: #E5C5B6;
      --fourth-color-theme-five: #FA594E;
      --fifth-color-theme-five: #2A252E;
    }
  </style></template>`;
  styles.register(styles.id);
}

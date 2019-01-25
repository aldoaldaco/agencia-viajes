{
  const styles = document.createElement('dom-module');
  styles.id = 'theme-styles-fonts';
  styles.setAttribute('assetpath', import.meta.url);
  styles.innerHTML = `<template><style>
    :host {
    
    }
  </style></template>`;
  styles.register(styles.id);
}

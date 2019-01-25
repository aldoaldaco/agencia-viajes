{
  const styles = document.createElement('dom-module');
  styles.id = 'theme-styles';
  styles.setAttribute('assetpath', import.meta.url);
  styles.innerHTML = `<template><style>
    :host {
      
    }
  </style></template>`;
  styles.register(styles.id);
}

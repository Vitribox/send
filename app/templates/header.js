const html = require('choo/html');
const assets = require('../../common/assets');

module.exports = function(state) {
  return html`<header class="header">
  <div class="send-logo">
    <a href="/">
      <img src="${assets.get('vitribox_logo.png')}" alt="Send"/>
    </a>
  </div>
</header>`;
};

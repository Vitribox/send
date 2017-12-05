const html = require('choo/html');
const assets = require('../../common/assets');

module.exports = function(state) {
  return html`<div class="footer">
    <div class="legal-links">
      Powered by <a href="https://www.mozilla.org" role="presentation"><img class="mozilla-logo" src="${assets.get(
        'mozilla-logo.svg'
      )}" alt="mozilla"/></a>
    </div>
  </div>`;
};

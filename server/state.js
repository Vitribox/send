const config = require('./config');
const layout = require('./layout');
const locales = require('../common/locales');

module.exports = function(req) {
  const locale = req.language || 'en-US';
  return {
    locale,
    translate: locales.getTranslator(locale),
    title: 'Vitribox Upload',
    description:
      'End to End Encrypt your files with a link that automatically expires to make sure your' +
      ' documents stay secure.',
    baseUrl: config.base_url,
    ui: {},
    storage: {
      files: []
    },
    fira: false,
    fileInfo: {},
    layout
  };
};

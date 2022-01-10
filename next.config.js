const withImages = require('next-images')
module.exports = {
  ...withImages(),
  i18n: {
    locales: ['en-US', 'fr-FR'],
    defaultLocale: 'en-US',
  }
};
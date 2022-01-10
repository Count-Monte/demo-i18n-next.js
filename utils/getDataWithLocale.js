export default (data, locale = 'en-US') => {
  if(locale === 'en-US') {
    return data.en;
  } else if(locale === 'fr-FR') {
    return data.fr;
  }
}
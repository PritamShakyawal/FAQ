// const { translate } = require('@vitalets/google-translate-api');

// const translateText = async (text, lang) => {
//   try {
//     const res = await translate(text, { to: lang });
//     return res.text;
//   } catch (error) {
//     console.error('Translation error:', error);
//     return text; // Fallback to original text
//   }
// };

// module.exports = translateText;


// const translate = require('@vitalets/google-translate-api');

// const translateText = async (text, lang) => {
//   try {
//     const res = await translate(text, { to: lang });
//     return res.text;
//   } catch (error) {
//     console.error('Translation error:', error);
//     return text; // Fallback to original text
//   }
// };

// module.exports = translateText;

const translate = require('google-translate-api-x');

const translateText = async (text, lang) => {
 // console.log('Input text:', text); // Log the input text
 //console.log('Target language:', lang); // Log the target language

  try {
    const res = await translate(text, { to: lang });
    //console.log('Translated text:', res.text); // Log the translated text
    return res.text;
  } catch (error) {
   // console.error('Translation error:', error);
    return text; // Fallback to original text
  }
};

module.exports = translateText;

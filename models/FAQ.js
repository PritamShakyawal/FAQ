


const mongoose = require('mongoose');
const translateText = require('../utils/translate');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    question_hi: String, // Hindi translation
    question_bn: String, // Bengali translation
    answer_hi: String,
    answer_bn: String,
  },
});

// Automatically translate question and answer before saving
faqSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.translations.question_hi = await translateText(this.question, 'hi');
    this.translations.question_bn = await translateText(this.question, 'bn');
    this.translations.answer_hi = await translateText(this.answer, 'hi');
    this.translations.answer_bn = await translateText(this.answer, 'bn');
  }
  next();
});

module.exports = mongoose.model('FAQ', faqSchema);

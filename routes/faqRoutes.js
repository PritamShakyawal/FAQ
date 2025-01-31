


// important 

const express = require('express');
const FAQ = require('../models/FAQ');
const router = express.Router();

// Create FAQ
router.post('/', async (req, res) => {
  const { question, answer } = req.body;

  try {
    // Check if the FAQ already exists
    const existingFAQ = await FAQ.findOne({ question });
    if (existingFAQ) {
      return res.status(400).send({ error: 'FAQ already exists' });
    }

    // Create a new FAQ
    const faq = new FAQ({ question, answer });
    await faq.save();
    res.status(201).send(faq);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all FAQs
// router.get('/', async (req, res) => {
//   try {
//     const faqs = await FAQ.find({});
//     res.send(faqs);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

router.get('/', async (req, res) => {
    const lang = req.query.lang || 'en'; // Default to English
    try {
      const faqs = await FAQ.find({});
      const translatedFAQs = faqs.map(faq => ({
        _id: faq._id,
        question: faq.translations[`question_${lang}`] || faq.question,
        answer: faq.translations[`answer_${lang}`] || faq.answer,
      }));
      res.send(translatedFAQs);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  // Delete an FAQ by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedFAQ = await FAQ.findByIdAndDelete(id);
      if (!deletedFAQ) {
        return res.status(404).send({ error: 'FAQ not found' });
      }
      res.send({ message: 'FAQ deleted successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const faq = await FAQ.findById(id);
      if (!faq) {
        return res.status(404).send({ error: 'FAQ not found' });
      }
      res.send(faq);
    } catch (error) {
      res.status(500).send(error);
    }
  });


  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;
  
    try {
      const updatedFAQ = await FAQ.findByIdAndUpdate(
        id,
        { question, answer },
        { new: true } // Return the updated document
      );
  
      if (!updatedFAQ) {
        return res.status(404).send({ error: 'FAQ not found' });
      }
  
      res.send(updatedFAQ);
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports = router;





// const express = require('express');
// const FAQ = require('../models/FAQ');
// const router = express.Router();

// // Get all FAQs with language support
// router.get('/', async (req, res) => {
//   const lang = req.query.lang || 'en'; // Default to English
//   try {
//     const faqs = await FAQ.find({});
//     const translatedFAQs = faqs.map(faq => ({
//       question: faq.translations[`question_${lang}`] || faq.question,
//       answer: faq.translations[`answer_${lang}`] || faq.answer,
//     }));
//     res.send(translatedFAQs);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// module.exports = router;
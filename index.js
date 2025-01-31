// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const faqRoutes = require('./routes/faqRoutes');
// const path = require('path');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON
// app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));


// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Route for the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the FAQ Management System! Visit /api/faqs to manage FAQs.');
// });

// // Routes
// app.use('/api/faqs', faqRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const faqRoutes = require('./routes/faqRoutes');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/faqs', faqRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
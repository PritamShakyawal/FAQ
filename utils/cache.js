const redis = require('redis');

// Create a Redis client
const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379', // Use environment variable or default URL
});

// Handle connection errors
client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect to Redis
client.connect()
  .then(() => console.log('Connected to Redis'))
  .catch(err => console.error('Redis connection error:', err));

// Middleware to check cache
const cache = (req, res, next) => {
  const lang = req.query.lang || 'en';
  const cacheKey = `faq:${lang}`;

  client.get(cacheKey)
    .then(data => {
      if (data) {
        res.send(JSON.parse(data)); // Return cached data
      } else {
        next(); // Proceed to the next middleware/route
      }
    })
    .catch(err => {
      console.error('Cache error:', err);
      next(); // Proceed even if there's a cache error
    });
};

// Function to set cache
const setCache = (key, data) => {
  client.setEx(key, 3600, JSON.stringify(data)) // Cache for 1 hour
    .catch(err => console.error('Cache set error:', err));
};

module.exports = { cache, setCache };
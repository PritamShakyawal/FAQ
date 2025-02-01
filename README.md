# FAQ Management System

The FAQ Management System is a web application that allows users to manage Frequently Asked Questions (FAQs). It supports multilingual content, enabling users to view FAQs in different languages. The system includes a backend API built with Node.js, Express, and MongoDB, and a frontend built with HTML, CSS, and JavaScript.

## Key Features
- Add, view, update, and delete FAQs.
- Multilingual support for FAQs (English, Hindi, Bengali).
- Caching mechanism using Redis for improved performance.
- User-friendly frontend interface.

## Installation

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or remotely)
- Redis (optional, for caching)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/PritamShakyawal/FAQ.git
   cd project


## Install dependencies:

  npm install -y  

  npm install express mongoose redis dotenv nodemon @vitalets/google-translate-api google-translate-api-x


## Set up environment variables:

MONGO_URI=mongodb://localhost:27017/faq-app

REDIS_URL=redis://localhost:6379

PORT=3000

## Start Redis:
Ensure Redis and MongoDB are running on your machine.

## For Redis: (open window powershell and run redis-cli then it will run the redis server only if install in the system)
redis-server
(To check the redis server is running or not write ping then it will return pong in response that means server is running.)


## Start the server:
nodemon index.js 

    or
    
npm start


## Access the application:
http://localhost:3000

---

### **Step 4: Add API Usage Examples**
Provide examples of how to use the API endpoints.

#### **Filename: `README.md`**
```markdown
## API Usage

## The backend API provides the following endpoints:

API Endpoints
Method	Endpoint	Description
GET	/api/faq	Fetch all FAQs.
POST	/api/faq	Add a new FAQ with translation.
GET	/api/faq/:id	Fetch a specific FAQ by ID.
PUT	/api/faq/:id	Update an existing FAQ.
DELETE	/api/faq/:id	Delete an FAQ.


: Get All FAQs

URL: GET /api/faqs

Query Parameters:

lang (optional): Language code (e.g., en, hi, bn). Defaults to en.

# Fetch FAQs in English (default)
 http://localhost:8000/api/faqs/

# Fetch FAQs in Hindi
 http://localhost:8000/api/faqs/?lang=hi

# Fetch FAQs in Bengali
 http://localhost:8000/api/faqs/?lang=bn



:Delete an FAQ

URL: DELETE /api/faqs/:id or we have delete button option

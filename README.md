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


Install dependencies:
 npm install


Set up environment variables:

MONGO_URI=mongodb://localhost:27017/faq-app
REDIS_URL=redis://localhost:6379
PORT=3000

Start the server:
nodemon index.js


Access the application:
http://localhost:3000

---

### **Step 4: Add API Usage Examples**
Provide examples of how to use the API endpoints.

#### **Filename: `README.md`**
```markdown
## API Usage

The backend API provides the following endpoints:

### 1. Add a New FAQ
- **URL**: `POST /api/faqs`
- **Request Body**:
  ```json
  {
    "question": "What is Node.js?",
    "answer": "Node.js is a runtime environment for executing JavaScript on the server."
  }



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
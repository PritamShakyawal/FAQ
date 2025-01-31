const apiUrl = 'http://localhost:3000/api/faqs';

// DOM Elements
const addFaqForm = document.getElementById('add-faq-form');
const faqList = document.getElementById('faqs');
const updateFaqForm = document.getElementById('update-faq-form');
const cancelUpdateButton = document.getElementById('cancel-update');

// Fetch all FAQs and display them
// async function fetchFAQs() {
//   try {
//     const response = await fetch(apiUrl);
//     const faqs = await response.json();
//     displayFAQs(faqs);
//   } catch (error) {
//     console.error('Error fetching FAQs:', error);
//   }
// }

let currentLanguage = 'en'; // Default language

// Fetch all FAQs and display them
async function fetchFAQs() {
  try {
    const response = await fetch(`${apiUrl}?lang=${currentLanguage}`);
    const faqs = await response.json();
    displayFAQs(faqs);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
  }
}

const languageSelect = document.getElementById('language');

// Handle language selection
languageSelect.addEventListener('change', (e) => {
  currentLanguage = e.target.value;
  fetchFAQs(); // Refresh the list with the selected language
});

// Display FAQs in the list
function displayFAQs(faqs) {
  faqList.innerHTML = '';
  faqs.forEach(faq => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${faq.question}</strong>
      <p>${faq.answer}</p>
      <button onclick="editFAQ('${faq._id}')">Edit</button>
      <button onclick="deleteFAQ('${faq._id}')">Delete</button>
    `;
    faqList.appendChild(li);
  });
}

async function deleteFAQ(id) {
  if (!confirm('Are you sure you want to delete this FAQ?')) {
    return; // Cancel deletion if the user clicks "Cancel"
  }

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Deleted FAQ:', result); // Debugging
    fetchFAQs(); // Refresh the list
  } catch (error) {
    console.error('Error deleting FAQ:', error);
  }
}



// Add a new FAQ
addFaqForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, answer }),
    });
    const newFAQ = await response.json();
    fetchFAQs(); // Refresh the list
    addFaqForm.reset(); // Clear the form
  } catch (error) {
    console.error('Error adding FAQ:', error);
  }
});

// Edit an FAQ
function editFAQ(id) {
  console.log('Edit button clicked for FAQ ID:', id); // Debugging
  if (!id) {
    console.error('FAQ ID is undefined');
    return;
  }

  fetch(`${apiUrl}/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(faq => {
      console.log('Fetched FAQ:', faq); // Debugging

      // Populate the update form
      document.getElementById('update-id').value = faq._id;
      document.getElementById('update-question').value = faq.question;
      document.getElementById('update-answer').value = faq.answer;

      // Display the update form
      document.getElementById('update-faq-form').style.display = 'block';
      console.log('Update form display:', document.getElementById('update-faq-form').style.display);
    })
    .catch(error => console.error('Error fetching FAQ:', error));
}

// Update an FAQ
updateFaqForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById('update-id').value;
  const question = document.getElementById('update-question').value;
  const answer = document.getElementById('update-answer').value;

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, answer }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const updatedFAQ = await response.json();
    console.log('Updated FAQ:', updatedFAQ); // Debugging

    fetchFAQs(); // Refresh the list
    updateFaqForm.reset(); // Clear the form
    updateFaqForm.style.display = 'none'; // Hide the update form
  } catch (error) {
    console.error('Error updating FAQ:', error);
  }
});

// Cancel update
cancelUpdateButton.addEventListener('click', () => {
  updateFaqForm.reset();
  updateFaqForm.style.display = 'none';
});

// Initial fetch of FAQs
fetchFAQs();










// const apiUrl = 'http://localhost:3000/api/faqs';

// // DOM Elements
// const addFaqForm = document.getElementById('add-faq-form');
// const faqList = document.getElementById('faqs');
// const updateFaqForm = document.getElementById('update-faq-form');
// const cancelUpdateButton = document.getElementById('cancel-update');
// const languageSelect = document.getElementById('language');

// let currentLanguage = 'en'; // Default language

// // Fetch all FAQs and display them
// async function fetchFAQs() {
//   try {
//     const response = await fetch(`${apiUrl}?lang=${currentLanguage}`);
//     const faqs = await response.json();
//     displayFAQs(faqs);
//   } catch (error) {
//     console.error('Error fetching FAQs:', error);
//   }
// }

// // Display FAQs in the list
// function displayFAQs(faqs) {
//   faqList.innerHTML = '';
//   faqs.forEach(faq => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//       <strong>${faq.question}</strong>
//       <p>${faq.answer}</p>
//       <button onclick="editFAQ('${faq._id}')">Edit</button>
//     `;
//     faqList.appendChild(li);
//   });
// }

// // Add a new FAQ
// addFaqForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const question = document.getElementById('question').value;
//   const answer = document.getElementById('answer').value;

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ question, answer }),
//     });
//     const newFAQ = await response.json();
//     fetchFAQs(); // Refresh the list
//     addFaqForm.reset(); // Clear the form
//   } catch (error) {
//     console.error('Error adding FAQ:', error);
//   }
// });

// // Edit an FAQ
// function editFAQ(id) {
//   console.log('Edit button clicked for FAQ ID:', id); // Debugging
//   fetch(`${apiUrl}/${id}`)
//     .then(response => response.json())
//     .then(faq => {
//       console.log('Fetched FAQ:', faq); // Debugging
//       document.getElementById('update-id').value = faq._id;
//       document.getElementById('update-question').value = faq.question;
//       document.getElementById('update-answer').value = faq.answer;
//       document.getElementById('update-faq-form').style.display = 'block';
//     })
//     .catch(error => console.error('Error fetching FAQ:', error));
// }

// // Update an FAQ
// updateFaqForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const id = document.getElementById('update-id').value;
//   const question = document.getElementById('update-question').value;
//   const answer = document.getElementById('update-answer').value;

//   try {
//     const response = await fetch(`${apiUrl}/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ question, answer }),
//     });
//     const updatedFAQ = await response.json();
//     fetchFAQs(); // Refresh the list
//     updateFaqForm.reset(); // Clear the form
//     updateFaqForm.style.display = 'none'; // Hide the update form
//   } catch (error) {
//     console.error('Error updating FAQ:', error);
//   }
// });

// // Cancel update
// cancelUpdateButton.addEventListener('click', () => {
//   updateFaqForm.reset();
//   updateFaqForm.style.display = 'none';
// });

// // Handle language selection
// languageSelect.addEventListener('change', (e) => {
//   currentLanguage = e.target.value;
//   fetchFAQs(); // Refresh the list with the selected language
// });

// // Initial fetch of FAQs
// fetchFAQs();
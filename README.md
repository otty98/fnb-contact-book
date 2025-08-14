Contact Book Web Application - README
Overview
A minimalist black and white contact management web application with full CRUD (Create, Read, Update, Delete) functionality. Features include adding new contacts, viewing all contacts, editing existing contacts, and deleting contacts.

Features
Modern UI: Clean black and white design with subtle animations

Full CRUD Operations:

Create new contacts with profile pictures

Read/View all contacts in a scrollable list

Update existing contact information

Delete contacts with confirmation

Responsive Design: Works on desktop and mobile devices

Form Validation: Ensures data integrity

API Integration: Connects to backend services

Technologies Used
Frontend: HTML5, CSS3, JavaScript

Backend API: Custom API endpoints (provided separately)

Storage: LocalStorage for API key persistence

File Structure
text
contact-book/
├── index.html          # Main landing page
├── add-contact.html    # Add new contact form
├── edit-contact.html   # Edit existing contact form
├── enter-api-key.html  # API key entry page
├── config.js           # Configuration and API settings
├── style.css           # Main stylesheet
└── background.jpg      # Background image (optional)
Installation
Clone the repository:

bash
git clone https://github.com/yourusername/contact-book.git
Open index.html in your web browser

Configuration
Set your API endpoint in config.js:

javascript
let rootPath = "https://your-api-endpoint.com/";
The application will prompt for an API key on first launch

Usage
Viewing Contacts
The main page (index.html) displays all contacts

Click any contact to edit it

Use the refresh button to reload contacts

Adding Contacts
Click "Add Contact" button

Fill in the form (First Name is required)

Click "Save Contact"

Editing Contacts
Click on any contact in the list

Modify the information in the form

Click "Save Contact"

Deleting Contacts
Open the contact in edit mode

Click "Delete Contact"

Confirm deletion

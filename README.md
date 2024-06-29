## Creative Coloring Email Signup Form

This React application provides a user-friendly email collection form for your Creative Coloring website. Users can subscribe to your email list to receive an Easter Coloring Book PDF (the specific content can be easily refactored for other offers).

## Features:
Seamless Mailchimp Integration: Collects email addresses and adds them to your desired Mailchimp list for targeted marketing campaigns.
User-Friendly Interface: Clean and intuitive design encourages users to subscribe.
Customization Potential: Easily modify the form content and offered incentive to align with future promotions.

## Getting Started:

#### Prerequisites:
Basic understanding of React development.
A Mailchimp account with a list created for email collection.

### Clone the Repository:
git clone https://your-github-repository-url.git

### Install Dependencies:
cd creative-coloring-email-form
npm install

### Configure Mailchimp:
Obtain your Mailchimp API key and list ID from your Mailchimp account settings.

Create a .env file in the project's root directory and add the following environment variables, replacing the placeholders with your actual values:

REACT_APP_MAILCHIMP_API_KEY=YOUR_MAILCHIMP_API_KEY
REACT_APP_MAILCHIMP_LIST_ID=YOUR_MAILCHIMP_LIST_ID
#### Start the Development Server:
npm start

This will launch the application in development mode at http://localhost:3000 by default.

## Customization:

The form content (placeholder text, button labels, etc.) can be modified within the src/components/EmailSignupForm.jsx file.
The offered incentive (currently an Easter Coloring Book) can be changed by updating the relevant text and download link within the form component.
Deployment:

The deployment process will depend on your chosen hosting provider. Refer to their documentation for specific instructions.
Ensure that you replace the placeholder API key and list ID values in your deployment environment with your actual Mailchimp credentials.

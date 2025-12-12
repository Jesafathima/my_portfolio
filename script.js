// script.js

// --- 1. Initialize EmailJS with your Public Key ---
// This must be done before trying to send anything.
(function() {
    // Replace 'YOUR_PUBLIC_KEY' with your actual Public Key from your EmailJS account settings
    emailjs.init('YOUR_PUBLIC_KEY'); 
})();


// --- 2. Handle the Form Submission Event ---

// Wait until the DOM is fully loaded before trying to access form elements
window.onload = function() {
    // Get the form element by its ID
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = document.getElementById('submit-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default browser form submission

        submitButton.disabled = true; // Disable button while sending
        formStatus.textContent = 'Sending message...';
        formStatus.style.color = 'gray';

        // --- 3. Send the form using emailjs.sendForm ---
        // Replace the placeholder IDs below with YOUR specific IDs
        const serviceID = 'YOUR_SERVICE_ID'; 
        const templateID = 'YOUR_TEMPLATE_ID';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                // Success case
                formStatus.textContent = 'Message sent successfully! 🎉';
                formStatus.style.color = 'green';
                contactForm.reset(); // Clear the form fields
                submitButton.disabled = false; // Re-enable button
            }, (err) => {
                // Error case
                formStatus.textContent = 'Failed to send message. Please try again later. 😟';
                formStatus.style.color = 'red';
                console.error('EmailJS Error:', err);
                submitButton.disabled = false; // Re-enable button
            });
    });
}

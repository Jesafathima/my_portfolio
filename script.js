
(function() {
    
    emailjs.init(i76a5bojJJmJMihhD); 
})();

window.onload = function() {
    
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = document.getElementById('submit-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        submitButton.disabled = true; 
        formStatus.textContent = 'Sending message...';
        formStatus.style.color = 'gray';

        const serviceID = service_il8ontc; 
        const templateID = template_2a0co2q;

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = 'green';
                contactForm.reset(); 
                submitButton.disabled = false; 
            }, (err) => {
                formStatus.textContent = 'Failed to send message. Please try again later.';
                formStatus.style.color = 'red';
                console.error('EmailJS Error:', err);
                submitButton.disabled = false; 
            });
    });
}

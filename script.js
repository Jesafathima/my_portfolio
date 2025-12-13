
(function() {
    
    emailjs.init("i76a5bojJJmJMihhD"); 
})();

window.onload = function() {
    
    const contactForm = document.getElementById('contact-form');   
    const submitButton = document.getElementById('submit-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        submitButton.disabled = true; 
        const serviceID = "service_il8ontc"; 
        const templateID = "template_2a0co2q";

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                showToast("Message sent successfully!", "green");
                contactForm.reset();
                submitButton.disabled = false;
            })
           .catch(() => {
                showToast("Failed to send message. Try again!", "red");
                submitButton.disabled = false;
            });

    });
}
const toast = document.getElementById("toast");

function showToast(message, bgColor) {
    toast.textContent = message;
    toast.style.background = bgColor;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}


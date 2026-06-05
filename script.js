document.addEventListener('DOMContentLoaded', () => {
    // Console log confirming JavaScript file execution
    console.log("CloudSphere core scripts successfully initialized.");

    const contactForm = document.getElementById('contactForm');
    
    // Only run event handling logic if the contact form exists on the current page view
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents page reload on submission
            
            // Fetch raw input data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Fetch targeting slots for error handlers
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            const successBox = document.getElementById('formSuccess');
            
            // Reset existing error statuses
            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            successBox.style.display = "none";
            
            let isValid = true;
            
            // Check Name constraints
            if (name === "") {
                nameError.textContent = "Full name configuration is required.";
                isValid = false;
            }
            
            // Check Email constraints using standard regex mapping
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "") {
                emailError.textContent = "Email stream routing parameter required.";
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = "Invalid format structure for email routing.";
                isValid = false;
            }
            
            // Check Message length constraints
            if (message === "") {
                messageError.textContent = "Message payload payload data cannot be empty.";
                isValid = false;
            } else if (message.length < 10) {
                messageError.textContent = "Message description must exceed 10 characters minimum.";
                isValid = false;
            }
            
            // Handle successful form transaction
            if (isValid) {
                successBox.textContent = `Transmission verified! Thank you, ${name}. Your message has been logged.`;
                successBox.style.display = "block";
                
                // Reset form inputs
                contactForm.reset();
            }
        });
    }
});
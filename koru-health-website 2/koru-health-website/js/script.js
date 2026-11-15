// Show the current year in the footer
let currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Check the contact form when the user submits it
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();
        let feedback = document.getElementById("formFeedback");

        if (name === "" || email === "" || subject === "" || message === "") {
            feedback.textContent = "Please fill in all the boxes.";
            feedback.style.color = "red";
        } else if (!email.includes("@") || !email.includes(".")) {
            feedback.textContent = "Please enter a valid email address.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Thank you! The form has been checked. It has not sent your message.";
            feedback.style.color = "green";
            contactForm.reset();
        }
    });
}

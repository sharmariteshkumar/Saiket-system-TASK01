document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMessage = document.getElementById("successMessage");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let isValid = true;

  if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    isValid = false;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Your message has been submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});

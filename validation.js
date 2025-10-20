document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  // Clear previous messages
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("success").textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name
  if (!name) {
    document.getElementById("error-name").textContent = "Full name is required.";
    valid = false;
  }

  // Email
  if (!email) {
    document.getElementById("error-email").textContent = "Email is required.";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("error-email").textContent = "Please enter a valid email.";
    valid = false;
  }

  // Subject
  if (!subject) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    valid = false;
  }

  // Message
  if (!message) {
    document.getElementById("error-message").textContent = "Message is required.";
    valid = false;
  } else if (message.length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").textContent = "Thank you! Your message has been sent successfully.";
    e.target.reset();
  }
});
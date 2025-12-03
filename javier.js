// Wait for the entire DOM content to load before running the script
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Form");
  const output = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
// Prevent the default form submission
    e.preventDefault();
	
// Get values from the form inputs and remove extra whitespace
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();
    
 // Get values from the form inputs and remove extra whitespace
	if (name.length < 3) {
      output.textContent = "Name must be at least 3 characters.";
      output.style.color = "red";
      return;
    }
// Validate email: must include "@" and "."
    if (!email.includes("@") || !email.includes(".")) {
      output.textContent = "Enter a valid email.";
      output.style.color = "red";
      return;
    }
// Validate message: must be at least 10 characters
    if (msg.length < 10) {
      output.textContent = "Message must be at least 10 characters.";
      output.style.color = "red";
      return;
    }

    output.textContent = "Form submitted successfully!";
    output.style.color = "green";
    // Reset the form fields
	form.reset();
	
  });
});

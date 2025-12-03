document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Form");
  const output = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
	
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();
    if (name.length < 3) {
      output.textContent = "Name must be at least 3 characters.";
      output.style.color = "red";
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      output.textContent = "Enter a valid email.";
      output.style.color = "red";
      return;
    }
    if (msg.length < 10) {
      output.textContent = "Message must be at least 10 characters.";
      output.style.color = "red";
      return;
    }
    output.textContent = "Form submitted successfully!";
    output.style.color = "green";
    form.reset();
  });
});

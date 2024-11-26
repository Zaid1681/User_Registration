// Handle the Register button click
document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    // Get form data
    const empId = document.getElementById("empId").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    // Validate the form fields
    if (!empId || !firstName || !lastName || !phone || !email) {
      alert("Please fill all required fields.");
      return;
    }

    // Generate a random Employee ID
    const randomEmpId = Math.floor(Math.random() * 90000) + 10000;

    // Update acknowledgment screen data
    document.getElementById("generatedEmpId").textContent = randomEmpId;
    document.getElementById(
      "customerName"
    ).textContent = `${firstName} ${lastName}`;
    document.getElementById("customerEmail").textContent = email;

    // Show the success popup
    document.getElementById("successPopup").classList.remove("hidden");
    successPopup.style.display = "flex"; // Set display to flex
  });

// Handle the popup's OK button click
document
  .getElementById("closePopupButton")
  .addEventListener("click", function () {
    console.log("CLosing");

    // Hide the success popup
    document.getElementById("successPopup").classList.add("hidden");
    successPopup.style.display = "none"; // Set display to none

    // Transition to acknowledgment screen
    document.getElementById("registration-form").classList.add("hidden");
    document.getElementById("acknowledgment-screen").classList.remove("hidden");
  });

// Handle the Go Back button click
document.getElementById("goBackButton").addEventListener("click", function () {
  // Reset the form fields
  document.getElementById("employeeForm").reset();

  // Show the registration form again
  document.getElementById("registration-form").classList.remove("hidden");

  // Hide the acknowledgment screen
  document.getElementById("acknowledgment-screen").classList.add("hidden");
});

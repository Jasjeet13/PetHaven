document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('adoptionForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting until validation is complete

        // Fetch all form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const petType = document.getElementById('petType').value;
        const reason = document.getElementById('reason').value.trim();
        const homeType = document.getElementById('homeType').value;
        const currentPets = document.getElementById('currentPets').value;
        const petExperience = document.getElementById('petExperience').value.trim();
        const previousPet = document.getElementById('previousPet').value.trim();
        const workSchedule = document.getElementById('workSchedule').value;
        const terms = document.getElementById('terms').checked;

        let errors = [];

        // Validate required fields
        if (!name) errors.push("Please enter your name.");
        if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) errors.push("Please enter a valid email address.");
        if (!phone || phone.length < 10) errors.push("Please enter a valid 10-digit phone number.");
        if (!address) errors.push("Please enter your address.");
        if (!reason) errors.push("Please explain why you want to adopt a pet.");
        // Add more checks here as necessary
        if (!terms) errors.push("You must agree to the terms and conditions.");

        // Display errors or submit form
        if (errors.length > 0) {
            alert("Please correct the following errors:\n" + errors.join("\n"));
        } else {
            alert("Application submitted successfully!");
            // Here you could also insert an AJAX request to submit the form data to the server without reloading the page
            // For demonstration, we're just showing an alert and then resetting the form
            // form.submit(); Uncomment this to actually submit the form
            form.reset(); // Reset form after submission for demonstration purposes
        }
    });
});

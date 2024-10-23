document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent the default form submission

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Create a payload object with form data
        const payload = {
            fullName: fullName,
            email: email,
            password: password,
        };

        try {
            // Send the data to the server using fetch
            const response = await fetch("http://localhost:3000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload), // Convert the payload object to JSON
            });

            if (response.ok) {
                const data = await response.json().then(() => {
                    window.location.href = "http://127.0.0.1:5500/index.html";
                });
                // alert("Registration successful!");
            } else {
                alert("Registration failed!");
                console.error("Server Error:", response.statusText);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            alert("Error sending registration data. Please try again later.");
        }
    });
});

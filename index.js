    /* back to top button function */
const toTopBtn = document.getElementById("toTopBtn");
function toggleToTopButton() {
    if (window.scrollY > 100) {
        toTopBtn.classList.remove("hidden");
    } else {
        toTopBtn.classList.add("hidden");
    }
}
window.addEventListener("scroll", toggleToTopButton);
toTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



/* form validation */
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    let isValid = true;
    const inputs = document.querySelectorAll("#appointmentForm input, #appointmentForm select");

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.border = "2px solid red";  // Highlight empty fields
        } else {
            input.style.border = "1px solid #ccc";
        }
    });

    if (!isValid) {
        event.preventDefault(); // Stop form submission
        alert("Please fill in all fields before submitting.");
    }
});



/* appointment form submission */
document.addEventListener("DOMContentLoaded", function () {
    const appointmentButton = document.getElementById("appointmentButton");
    appointmentButton.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = document.getElementById("appointmentSection");
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
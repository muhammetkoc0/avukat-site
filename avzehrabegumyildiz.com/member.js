document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("appointmentModal");
    const closeBtn = document.querySelector(".close");
    const appointmentBtns = document.querySelectorAll(".appointment-btn");
    const practiceAreaDropdown = document.getElementById("practiceArea");
    const modalTitle = modal.querySelector("h2"); // Target the modal title
    modal.style.display = "none";

    const practiceAreas = [
        "Corporate Law",
        "Intellectual Property",
        "Family Law",
        "Real Estate",
        "Litigation",
        "Criminal Law",
        "Employment Law"
    ];

    function populatePracticeAreas() {
        practiceAreaDropdown.innerHTML = '<option value="" disabled selected>Select Practice Area</option>';
        practiceAreas.forEach(area => {
            let option = document.createElement("option");
            option.textContent = area;
            option.value = area.toLowerCase().replace(/\s+/g, "-");
            practiceAreaDropdown.appendChild(option);
        });
    }

    function openModal(personName) {
        populatePracticeAreas();
        modalTitle.textContent = `Book an Appointment with ${personName}`; // Update modal title with person's name
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10);
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 300);
    }

    // Attach event listener to appointment buttons
    appointmentBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const personName = this.closest(".box").querySelector("h1").textContent; // Get the person's name
            openModal(personName);
        });
    });

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    document.querySelector(".modal-content").addEventListener("click", e => {
        e.stopPropagation();
    });

    document.getElementById("appointmentForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Appointment booked successfully!");
        closeModal();
    });
});


/* to top button */
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



// Get all the schedule icons// Get all the schedule icons
const scheduleIcons = document.querySelectorAll('.member1 .icons a:nth-child(2)');

// Get modal elements
const modal = document.getElementById('appointmentModal');
const closeModal = document.querySelector('.close');
const modalTitle = document.getElementById('modalTitle');

// Function to open the modal and update the title with the exact person name from the h2 tag
scheduleIcons.forEach((icon) => {
    icon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent link from navigating
        
        // Find the closest member box (parent div) and get the person's name from the h2 tag
        const personName = icon.closest('.member1').querySelector('h2').textContent;
        
        // Update the modal title with the person's name
        modalTitle.textContent = `Book an Appointment with ${personName}`; // Update title dynamically
        
        modal.style.display = "flex"; // Show the modal
    });
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = "none"; // Hide the modal
});

// Close modal when clicked outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("appointmentModal");
    const closeBtn = document.querySelector(".close-modal");
    const appointmentBtns = document.querySelectorAll(".appointment-btn");
    const practiceAreaDropdown = document.getElementById("practiceArea");
    const modalTitle = document.getElementById("modalTitle");
    
    // Uygulama Alanları
    const practiceAreas = [
        "Corporate Law",
        "Intellectual Property",
        "Family Law",
        "Real Estate",
        "Litigation",
        "Criminal Law",
        "Employment Law"
    ];

    // Dropdown'ı Doldur
    if(practiceAreaDropdown) {
        practiceAreaDropdown.innerHTML = '<option value="" disabled selected>Select Practice Area</option>';
        practiceAreas.forEach(area => {
            let option = document.createElement("option");
            option.textContent = area;
            option.value = area.toLowerCase().replace(/\s+/g, "-");
            practiceAreaDropdown.appendChild(option);
        });
    }

    // Modalı Aç
    function openModal(personName) {
        if(modalTitle) {
            modalTitle.textContent = `Book with ${personName}`;
        }
        modal.classList.add("show");
    }

    // Modalı Kapat
    function closeModal() {
        modal.classList.remove("show");
    }

    // Butonlara Tıklama Olayı
    appointmentBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            // En yakın 'member-card' divini bul ve içindeki h2'den ismi al
            const card = this.closest(".member-card");
            const personName = card.querySelector("h2").textContent;
            openModal(personName);
        });
    });

    // Kapatma butonu
    if(closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Dışarı tıklayınca kapat
    window.addEventListener("click", e => { 
        if (e.target === modal) closeModal(); 
    });
});
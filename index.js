/* =========================================
   SAYFA İÇİ ETKİLEŞİMLER (UI INTERACTIONS)
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* --- 1. BAŞA DÖN BUTONU (BACK TO TOP) --- */
    const toTopBtn = document.getElementById("toTopBtn");

    if (toTopBtn) {
        // Sayfa kaydırıldığında butonu göster/gizle
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) { // 300px aşağı inince görünsün
                toTopBtn.classList.remove("hidden");
                toTopBtn.style.opacity = "1";
                toTopBtn.style.visibility = "visible";
            } else {
                toTopBtn.classList.add("hidden");
                toTopBtn.style.opacity = "0";
                toTopBtn.style.visibility = "hidden";
            }
        });

        // Butona tıklayınca yukarı kaydır
        toTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* --- 2. RANDEVU BUTONU İLE AŞAĞI KAYDIRMA --- */
    const appointmentButton = document.getElementById("appointmentButton");
    
    if (appointmentButton) {
        appointmentButton.addEventListener("click", function (e) {
            e.preventDefault();
            const targetSection = document.getElementById("appointmentSection");
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

});
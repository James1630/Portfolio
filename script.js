    function sendMail() {
        // Collect form values
        let params = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Send email using EmailJS
        emailjs.send("service_my641yi", "template_poaa9xo", params)
            .then(function(response) {
                alert("Email Sent Successfully!!");
                document.getElementById("contact-form").reset(); // Reset the form
            }, function(error) {
                console.error("FAILED...", error);
                alert("Failed to send email. Please try again.");
            });
    }

    // ===== PROJECT CARD READ MORE TOGGLE =====
    document.addEventListener("DOMContentLoaded", () => {   
        document.querySelectorAll(".card__button").forEach(button => {
            button.addEventListener("click", function (e) {
                e.preventDefault();

                const card = this.closest(".card__article");
                card.classList.toggle("active");

                this.textContent = card.classList.contains("active")
                    ? "Show Less"
                    : "Read More";
            });
        });
    });
    // ===== AUTO RESET CARD WHEN MOUSE LEAVES =====
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".card__article").forEach(card => {
            card.addEventListener("mouseleave", () => {
                if (card.classList.contains("active")) {
                    card.classList.remove("active");

                    const btn = card.querySelector(".card__button");
                    if (btn) btn.textContent = "Read More";
                }
            });
        });
    });
    
// ===== MOBILE NAV DROPDOWN =====
document.addEventListener("DOMContentLoaded", () => {
    const hamburg = document.querySelector('.hamburg');
    const cancel = document.querySelector('.cancel');
    const dropdown = document.querySelector('.dropdown');
    const navLinks = document.querySelectorAll('.dropdown .links a');

    const MOBILE_WIDTH = 884; // same as your CSS breakpoint

    function isMobile() {
        return window.innerWidth <= MOBILE_WIDTH;
    }

    if (hamburg && cancel && dropdown) {

        // Open menu
        hamburg.addEventListener('click', () => {
            if (!isMobile()) return; // Only mobile
            dropdown.style.transform = 'translateY(0)';
            hamburg.style.display = 'none';
            cancel.style.display = 'block';
        });

        // Close menu
        cancel.addEventListener('click', () => {
            if (!isMobile()) return; // Only mobile
            dropdown.style.transform = 'translateY(-500px)';
            cancel.style.display = 'none';
            hamburg.style.display = 'block';
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (!isMobile()) return; // Only mobile
                dropdown.style.transform = 'translateY(-500px)';
                cancel.style.display = 'none';
                hamburg.style.display = 'block';
            });
        });

        // Optional: reset menu display on resize
        window.addEventListener('resize', () => {
            if (!isMobile()) {
                dropdown.style.transform = 'translateY(-500px)';
                cancel.style.display = 'none';
                hamburg.style.display = 'none'; // hide hamburger on desktop
            } else {
                hamburg.style.display = 'block'; // show hamburger on mobile
            }
        });
    }
});


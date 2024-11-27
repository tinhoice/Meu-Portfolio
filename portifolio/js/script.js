document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
 
    if (menuButton && menu) {
        menuButton.addEventListener("click", function() {
            menu.classList.toggle("hidden");
        });
    }
});
 
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
 
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
 
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const formMessage = document.getElementById("formMessage");
 
            if (name && email && message) {
                formMessage.textContent = "Obrigado pelo contato! Sua mensagem foi enviada.";
                formMessage.style.color = "green";
            } else {
                formMessage.textContent = "Por favor, preencha todos os campos.";
                formMessage.style.color = "red";
            }
        });
    }
});
 
document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
 
    if (galleryItems.length && lightbox && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener("click", function() {
                lightboxImg.src = item.src;
                lightbox.classList.remove("hidden");
            });
        });
 
        lightbox.addEventListener("click", function() {
            lightbox.classList.add("hidden");
        });
    }
});
 
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-in");
 
    const fadeInOnScroll = () => {
        faders.forEach(fade => {
            const fadeInAt = window.scrollY + window.innerHeight - fade.offsetHeight / 2;
            if (fadeInAt > fade.offsetTop) {
                fade.classList.add("show");
            }
        });
    };
 
    if (faders.length) {
        window.addEventListener("scroll", fadeInOnScroll);
    }
});

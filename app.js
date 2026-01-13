// mobile menu functionality
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

// modal functionality
const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modalImg.src = card.dataset.img;

        modal.classList.remove("hidden");
        modal.classList.add("flex");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
});


// form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Errors
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    let isValid = true;
    // reset error
    [nameError, emailError, messageError].forEach(error => error.classList.add("hidden"));
    [name, email, message].forEach(input => input.classList.remove('border-red-500'))
    // Name validation
    if (name.value.trim() === "") {
        nameError.classList.remove("hidden");
        name.classList.add("border-red-500");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.classList.remove("hidden");
        email.classList.add("border-red-500");
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.classList.remove("hidden");
        message.classList.add("border-red-500");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
})

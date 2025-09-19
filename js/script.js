// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Countdown timer
const eventDate = new Date("2025-10-01T09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  if (timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.textContent = days;
    if (hoursEl) hoursEl.textContent = hours;
    if (minutesEl) minutesEl.textContent = minutes;
    if (secondsEl) secondsEl.textContent = seconds;
  } else {
    const timerEl = document.getElementById("timer");
    if (timerEl) {
      timerEl.innerHTML = "Event has started!";
    }
  }
}

// Start countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Accordion functionality for schedule
const accordions = document.querySelectorAll(".accordion-header");
accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";
    
    // Close all other accordions
    accordions.forEach((otherButton) => {
      const otherContent = otherButton.nextElementSibling;
      otherContent.style.display = "none";
    });
    
    // Toggle current accordion
    content.style.display = isOpen ? "none" : "block";
  });
});

// Ticket form validation
const ticketForm = document.getElementById("ticketForm");
if (ticketForm) {
  ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
      "Thank you! Your ticket has been booked.";
    ticketForm.reset();
  });
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("contactMessage").textContent =
      "Message sent! We'll reply soon.";
    contactForm.reset();
  });
}

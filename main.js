document.addEventListener("DOMContentLoaded", () => {
  // Mobile Hamburger Menu Toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("toggle");
  });

  // Contact form submission using Formspree
  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.action;

    fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("✅ Your message has been sent!");
          form.reset();
        } else {
          alert("❌ Oops! Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error(error);
      });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.classList.remove("active"); // close menu on click
      document
        .querySelector(this.getAttribute("href"))
        ?.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Skills fade-in animation on scroll
  const skillItems = document.querySelectorAll(".skill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  skillItems.forEach((skill) => observer.observe(skill));
});

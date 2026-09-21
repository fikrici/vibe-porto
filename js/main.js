/**
 * Main Portfolio Application Logic
 * Fikri Chaerul Insan (kajoester.my.id)
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavbar();
  initTypewriter();
  initScrollSpy();
  initScrollReveal();
  initCopyEmail();
  initContactForm();
  initFooterTime();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const currentTheme = localStorage.getItem("kajoester-theme") || "dark";

  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("kajoester-theme", "dark");
        showToast("Switched to Dark Mode 🌙");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("kajoester-theme", "light");
        showToast("Switched to Light Mode ☀️");
      }
    });
  }
}

/* ==========================================================================
   2. Navbar Scroll Effects & Mobile Navigation
   ========================================================================== */
function initNavbar() {
  const siteNav = document.getElementById("site-nav");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scroll effect on navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      siteNav.classList.add("scrolled");
    } else {
      siteNav.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isOpen = navMenu.classList.contains("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

/* ==========================================================================
   3. Typewriter / Role Rotator
   ========================================================================== */
function initTypewriter() {
  const targetElement = document.getElementById("role-typewriter");
  if (!targetElement) return;

  const roles = [
    "DevOps Engineer",
    "Web Developer",
    "UI/UX Designer",
    "Cloud Enthusiast"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 110;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      targetElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      targetElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   4. Scroll Spy (Active Navigation Link)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 140;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav);
}

/* ==========================================================================
   5. Scroll Reveal with Intersection Observer
   ========================================================================== */
function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  window.triggerScrollReveal = function() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");
    revealElements.forEach(el => observer.observe(el));
  };

  window.triggerScrollReveal();
}

/* ==========================================================================
   6. 1-Click Copy Email with Toast Notification
   ========================================================================== */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll(".btn-copy-email");
  const emailAddress = "fikritmvn@gmail.com";

  copyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailAddress).then(() => {
        showToast("Email address copied to clipboard! 📋");
      }).catch(() => {
        showToast(`Email: ${emailAddress}`);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-notification";
    toast.innerHTML = `
      <span class="toast-icon">✨</span>
      <span class="toast-text">${message}</span>
    `;
    document.body.appendChild(toast);
  } else {
    toast.querySelector(".toast-text").textContent = message;
  }

  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ==========================================================================
   7. Contact Form Simulation & Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const message = document.getElementById("sender-message").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all fields! ⚠️");
      return;
    }

    const submitBtn = form.querySelector(".form-submit-btn");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `<span>Message Sent! ✓</span>`;
      showToast("Thank you! Your message has been sent successfully. 🚀");
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }, 1200);
  });
}

/* ==========================================================================
   8. Realtime Footer Jakarta Time (UTC+7 / WIB)
   ========================================================================== */
function initFooterTime() {
  const timeContainer = document.getElementById("footer-realtime");
  if (!timeContainer) return;

  function update() {
    const now = new Date();
    const options = {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };
    const timeStr = new Intl.DateTimeFormat("en-GB", options).format(now);
    timeContainer.textContent = `${timeStr} WIB (UTC+7)`;
  }

  update();
  setInterval(update, 1000);
}

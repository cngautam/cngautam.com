// =====================================================
// cngautam.com — Main JavaScript
// =====================================================

// --- Sticky nav shadow on scroll ---
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// --- Active nav link highlight on scroll ---
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(sec => observer.observe(sec));

// Active nav style (injected)
const styleEl = document.createElement('style');
styleEl.textContent = `.nav-links a.active { color: var(--brown-dk); font-weight: 500; }`;
document.head.appendChild(styleEl);

// --- Mobile menu toggle ---
function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('open');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});

// --- Fade-in on scroll animations ---
const fadeEls = document.querySelectorAll(
  '.interest-item, .pub-entry, .course-card, .blog-card, .media-item, .tl-item, .about-card, .stat-box'
);

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});

// --- Contact form handler ---
// NOTE: This form currently shows a success message on submit.
// To make it actually send emails, replace this function with
// a Formspree, Netlify Forms, or EmailJS integration.
// See README.md for instructions.
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-form');
  const msg = document.getElementById('form-msg');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulate submission (replace with real form service)
  setTimeout(() => {
    msg.textContent = 'Thank you — your message has been received. I will respond within a few business days.';
    btn.textContent = 'Message Sent';
    e.target.reset();
  }, 1200);
}

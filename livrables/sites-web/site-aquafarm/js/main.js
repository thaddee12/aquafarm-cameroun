/* ============================================================
   AQUAFARM CAMEROUN — Scripts
   ============================================================ */

/* --- Header scroll effect --- */
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* --- Mobile menu --- */
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

/* --- Active nav link --- */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* --- Counter animation --- */
function animateCounter(el) {
  const target  = parseInt(el.dataset.target, 10);
  const suffix  = el.dataset.suffix || '';
  const prefix  = el.dataset.prefix || '';
  const duration = 1800;
  const step     = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(current).toLocaleString('fr-FR') + suffix;
  }, step);
}

const counters = document.querySelectorAll('[data-target]');
if (counters.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* --- Chart bars animation --- */
const bars = document.querySelectorAll('.bar');
if (bars.length) {
  const chartObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach(bar => {
          bar.style.height = bar.dataset.height;
        });
        chartObs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  const chartEl = document.querySelector('.chart-bars');
  if (chartEl) chartObs.observe(chartEl);

  bars.forEach(bar => { bar.style.height = '0'; });
}

/* --- Reveal on scroll --- */
const revealEls = document.querySelectorAll(
  '.product-card, .feature-item, .stat-item, .step, .target-card, .guarantee-card, .contact-card, .social-card, .social-channel-card'
);

if (revealEls.length) {
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    revealObs.observe(el);
  });
}

/* --- WhatsApp pre-fill message --- */
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  const page = currentPage.replace('.html', '');
  const messages = {
    'alevins':  'Bonjour Aquafarm, je souhaite commander des alevins de silure. Pouvez-vous me renseigner sur les disponibilités et les prix ?',
    'silures':  'Bonjour Aquafarm, je suis intéressé par des silures adultes. Pouvez-vous me donner vos conditions de vente ?',
    'contact':  'Bonjour Aquafarm, j\'ai une question. Pouvez-vous me contacter ?',
    'index':    'Bonjour Aquafarm, je souhaite avoir plus d\'informations sur vos produits.'
  };
  const msg = messages[page] || messages['index'];
  if (!link.href.includes('text=')) {
    link.href = link.href + '?text=' + encodeURIComponent(msg);
  }
});

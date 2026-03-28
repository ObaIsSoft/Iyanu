import './style.css'

// Define the navigation HTML to be injected into all pages
const navHTML = `
  <nav class="site-nav">
    <div class="nav-container">
      <a href="/" class="brand nav-transition-link">Iyanuoluwa Adenle</a>
      <div class="nav-links text-accent">
        <a href="/pages/about.html" class="nav-link nav-transition-link">About</a>
        <a href="/pages/books.html" class="nav-link nav-transition-link">Books</a>
        <div class="dropdown">
          <a href="/pages/projects.html" class="nav-link nav-transition-link">Projects</a>
        </div>
        <div class="dropdown">
          <a href="/pages/publications.html" class="nav-link nav-transition-link">Publications</a>
          <div class="dropdown-content bg-dark text-accent">
            <a href="/pages/poems.html" class="nav-transition-link">Poems</a>
            <a href="/pages/fiction.html" class="nav-transition-link">Fiction</a>
            <a href="/pages/essays.html" class="nav-transition-link">Essays</a>
            <a href="/pages/art-writing.html" class="nav-transition-link">Art Writing</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="/pages/press.html" class="nav-link nav-transition-link">Press</a>
          <div class="dropdown-content bg-dark text-accent">
            <a href="/pages/features.html" class="nav-transition-link">Features</a>
            <a href="/pages/interviews.html" class="nav-transition-link">Interviews</a>
            <a href="/pages/videos.html" class="nav-transition-link">Videos</a>
          </div>
        </div>
        <a href="/pages/events.html" class="nav-link nav-transition-link">Events</a>
        <a href="/pages/contact.html" class="nav-link nav-transition-link">Contact</a>
      </div>
    </div>
  </nav>
`;

// Pull cord toggle — rope SVG with "pull" label
const pullCordHTML = `
  <div class="sidenav-pull-wrap" id="sidenavPull">
    <button class="sidenav-pull-btn" aria-label="Toggle navigation">
      <svg class="pull-rope-svg" viewBox="0 0 13 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- knot at top -->
        <circle cx="6.5" cy="3" r="2.5" fill="currentColor" opacity="0.6"/>
        <!-- rope body — slightly wavy -->
        <path d="M6.5,5.5 C8.5,11 4.5,17 6.5,23 C8.5,29 4.5,35 6.5,41 C8.5,47 4.5,53 6.5,57"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <!-- frayed cut end -->
        <line x1="6.5" y1="57" x2="3" y2="65" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
        <line x1="6.5" y1="57" x2="6.5" y2="67" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
        <line x1="6.5" y1="57" x2="10" y2="65" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
        <line x1="6.5" y1="57" x2="2.5" y2="62" stroke="currentColor" stroke-width="0.7" stroke-linecap="round"/>
        <line x1="6.5" y1="57" x2="10.5" y2="62" stroke="currentColor" stroke-width="0.7" stroke-linecap="round"/>
      </svg>
      <span class="pull-label">pull</span>
    </button>
  </div>
`;

// Fixed name — always visible at top on mobile, separate from the nav
const siteNameHTML = `
  <a href="/" class="mobile-site-name nav-transition-link">Iyanuoluwa Adenle</a>
`;

// Mobile floating left sidebar — toggleable via pull cord (no brand inside)
const sidenavHTML = `
  <aside class="mobile-sidenav" id="mobileSidenav" aria-label="Site navigation">
    <ul class="sidenav-list">
      <li class="sidenav-item">
        <span class="sidenav-dash">—</span>
        <a href="/pages/about.html" class="sidenav-link nav-transition-link">About</a>
      </li>
      <li class="sidenav-item">
        <span class="sidenav-dash">—</span>
        <a href="/pages/books.html" class="sidenav-link nav-transition-link">Books</a>
      </li>
      <li class="sidenav-item">
        <span class="sidenav-dash">—</span>
        <a href="/pages/projects.html" class="sidenav-link nav-transition-link">Projects</a>
      </li>
      <li class="sidenav-group">
        <div class="sidenav-item sidenav-toggle-row" data-group="publication">
          <span class="sidenav-dash">—</span>
          <button class="sidenav-link sidenav-toggle-btn" pointer-events="all">Publication</button>
        </div>
        <ul class="sidenav-sublist">
          <li class="sidenav-subitem">
            <span class="sidenav-subdash">—</span>
            <a href="/pages/poems.html" class="sidenav-sublink nav-transition-link">Poems</a>
          </li>
          <li class="sidenav-subitem">
            <span class="sidenav-subdash">—</span>
            <a href="/pages/fiction.html" class="sidenav-sublink nav-transition-link">Fiction</a>
          </li>
          <li class="sidenav-subitem">
            <span class="sidenav-subdash">—</span>
            <a href="/pages/essays.html" class="sidenav-sublink nav-transition-link">Essays</a>
          </li>
          <li class="sidenav-subitem">
            <span class="sidenav-subdash">—</span>
            <a href="/pages/art-writing.html" class="sidenav-sublink nav-transition-link">Art Writing</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-group">
        <div class="sidenav-item sidenav-toggle-row" data-group="press">
          <span class="sidenav-dash">—</span>
          <button class="sidenav-link sidenav-toggle-btn">Press</button>
        </div>
        <ul class="sidenav-sublist">
          <li class="sidenav-subitem">
            <span class="sidenav-subdash">—</span>
            <a href="/pages/features.html" class="sidenav-sublink nav-transition-link">Features</a>
          </li>
          <li class="sidenav-subitem">
            <span class="sidenav-subdash">—</span>
            <a href="/pages/interviews.html" class="sidenav-sublink nav-transition-link">Interviews</a>
          </li>
          <li class="sidenav-subitem">
            <span class="sidenav-subdash">—</span>
            <a href="/pages/videos.html" class="sidenav-sublink nav-transition-link">Videos</a>
          </li>
        </ul>
      </li>
      <li class="sidenav-item">
        <span class="sidenav-dash">—</span>
        <a href="/pages/events.html" class="sidenav-link nav-transition-link">Events</a>
      </li>
      <li class="sidenav-item">
        <span class="sidenav-dash">—</span>
        <a href="/pages/contact.html" class="sidenav-link nav-transition-link">Contact</a>
      </li>
    </ul>
  </aside>
`;

const footerHTML = `
  <footer class="site-footer">
    <div class="container footer-content">
      <a href="/" class="brand nav-transition-link" style="font-size: 1rem;">Iyanuoluwa Adenle</a>
      <div class="social-links text-accent">
        <a href="mailto:adenleiyanuoluwa@gmail.com">Email</a>
      </div>
      <p class="text-accent" style="opacity: 0.4;">© 2025</p>
    </div>
  </footer>
`;

// Insert the desktop nav
document.querySelector('#app').insertAdjacentHTML('afterbegin', navHTML);

// Insert mobile elements into body
document.body.insertAdjacentHTML('afterbegin', sidenavHTML);
document.body.insertAdjacentHTML('afterbegin', pullCordHTML);
// Only inject the site name on pages that don't opt out
if (!document.body.classList.contains('no-mobile-name')) {
  document.body.insertAdjacentHTML('afterbegin', siteNameHTML);
}
document.body.insertAdjacentHTML('beforeend', '<div class="page-overlay" id="pageOverlay"></div>');

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const isHome = document.body.classList.contains('no-footer');

  // No footer on the landing page
  if (main && !isHome) main.insertAdjacentHTML('afterend', footerHTML);

  // Scroll indicator — skip on pages that opt out
  if (!document.body.classList.contains('no-scroll-indicator')) {
    const indicatorHTML = `
      <div class="scroll-indicator" id="scrollIndicator" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 8l7 7 7-7" stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', indicatorHTML);

    const indicator = document.getElementById('scrollIndicator');
    window.addEventListener('scroll', () => {
      indicator.classList.toggle('hidden', window.scrollY > 80);
    }, { passive: true });
  }

  const sidenav = document.getElementById('mobileSidenav');
  const pullWrap = document.getElementById('sidenavPull');
  const pullLabel = pullWrap.querySelector('.pull-label');
  const overlay = document.getElementById('pageOverlay');

  function openNav() {
    sidenav.classList.add('is-open');
    pullWrap.classList.add('nav-open');
    pullLabel.textContent = 'push';
    document.body.classList.add('nav-is-open');
  }
  function closeNav() {
    sidenav.classList.remove('is-open');
    pullWrap.classList.remove('nav-open');
    pullLabel.textContent = 'pull';
    document.body.classList.remove('nav-is-open');
  }

  pullWrap.addEventListener('click', () => {
    sidenav.classList.contains('is-open') ? closeNav() : openNav();
  });

  // Clicking/touching the blurred overlay closes the nav
  if (overlay) overlay.addEventListener('click', closeNav);

  // Close nav on scroll (works on scrollable pages)
  window.addEventListener('scroll', () => {
    if (sidenav.classList.contains('is-open')) closeNav();
  }, { passive: true });

  // Close nav on swipe/touch-move on pages where body scroll is locked (e.g. about)
  document.addEventListener('touchstart', (e) => {
    if (!sidenav.classList.contains('is-open')) return;
    if (!sidenav.contains(e.target) && !pullWrap.contains(e.target)) closeNav();
  }, { passive: true });

  // Mark active links + auto-open nav/group if on a sub-page
  const path = window.location.pathname;
  document.querySelectorAll('.sidenav-link, .sidenav-sublink').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
      const group = link.closest('.sidenav-group');
      if (group) {
        group.classList.add('is-open');
        openNav();
      }
    }
  });

  // Toggle Publication / Press sub-items on tap
  document.querySelectorAll('.sidenav-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.sidenav-group').classList.toggle('is-open');
    });
  });
});

// Logic to highlight the active page in the desktop nav
const currentPath = window.location.pathname;
const allNavLinks = document.querySelectorAll('.site-nav a');

allNavLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/')) {
    if (link.classList.contains('nav-link')) {
      link.classList.add('active');
    } else {
      const dropdown = link.closest('.dropdown');
      if (dropdown) {
        const parentNavLink = dropdown.querySelector('.nav-link');
        if (parentNavLink) parentNavLink.classList.add('active');
      }
      link.classList.add('active');
    }
  }
});

// Scroll listener for desktop nav
const nav = document.querySelector('.site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Page Transition Logic
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  if (main) main.classList.add('page-enter');

  document.querySelectorAll('.nav-transition-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (main && href) {
        main.classList.remove('page-enter');
        main.classList.add('page-exit');
        setTimeout(() => { window.location.href = href; }, 400);
      } else if (href) {
        window.location.href = href;
      }
    });
  });
});

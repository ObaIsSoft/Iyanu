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

// Insert the navigation
document.querySelector('#app').insertAdjacentHTML('afterbegin', navHTML);

// Logic to highlight the active page in the navigation
const currentPath = window.location.pathname;
const allNavLinks = document.querySelectorAll('.site-nav a');

allNavLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/')) {
    // If it's a standard nav-link
    if (link.classList.contains('nav-link')) {
      link.classList.add('active');
    } else {
      // If it's a dropdown link, find the parent nav-link
      const dropdown = link.closest('.dropdown');
      if (dropdown) {
        const parentNavLink = dropdown.querySelector('.nav-link');
        if (parentNavLink) parentNavLink.classList.add('active');
      }
      // Also highlight the sublink itself if desired, though CSS might not have it yet
      link.classList.add('active');
    }
  }
});

// Simple scroll listener to toggle a class on the nav for visual effect on scroll
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
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector('main');
  if (main) {
    main.classList.add('page-enter');
  }

  const transitionLinks = document.querySelectorAll('.nav-transition-link');
  transitionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (main && href) {
        main.classList.remove('page-enter');
        main.classList.add('page-exit');
        setTimeout(() => {
          window.location.href = href;
        }, 400); // match animation duration
      } else {
        window.location.href = href;
      }
    });
  });
});

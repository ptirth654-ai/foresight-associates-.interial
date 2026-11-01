/**
 * FORESIGHT ASSOCIATES — Luxury Architecture & Interior Design Studio
 * Navigation Controller (Sticky header, Active link, Mobile Drawer)
 */

(function () {
  'use strict';

  function initNavigation() {
    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. Sticky Header scroll listener
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // 2. Active Link state detection
    function setActiveLink() {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      
      navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });

      mobileLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });
    }

    setActiveLink();

    // 3. Mobile Hamburger Menu Toggle
    if (menuToggle && mobileDrawer) {
      function openMenu() {
        menuToggle.classList.add('is-active');
        menuToggle.setAttribute('aria-expanded', 'true');
        mobileDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      }

      menuToggle.addEventListener('click', function () {
        const isOpen = mobileDrawer.classList.contains('is-open');
        if (isOpen) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      // Close mobile menu on link click
      mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
          closeMenu();
          menuToggle.focus();
        }
      });
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();


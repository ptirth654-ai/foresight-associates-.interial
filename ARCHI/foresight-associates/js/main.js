/**
 * FORESIGHT ASSOCIATES — Luxury Architecture & Interior Design Studio
 * Main Application Orchestrator
 */

(function () {
  'use strict';

  function initApp() {
    // 1. Update Copyright Year dynamically
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
      el.textContent = currentYear;
    });

    // 2. Back To Top Button Controller
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add('is-visible');
        } else {
          backToTopBtn.classList.remove('is-visible');
        }
      }, { passive: true });

      backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // 3. Frontend Contact Inquiry Form Handler (Strictly Frontend Only)
    const inquiryForm = document.querySelector('#contactInquiryForm');
    const toastNotice = document.querySelector('#toastNotice');

    if (inquiryForm) {
      inquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = inquiryForm.querySelector('#clientName');
        const emailInput = inquiryForm.querySelector('#clientEmail');
        const phoneInput = inquiryForm.querySelector('#clientPhone');
        const projectType = inquiryForm.querySelector('#projectType');
        const messageInput = inquiryForm.querySelector('#projectMessage');

        // Basic client validation
        if (!nameInput.value.trim() || !emailInput.value.trim()) {
          showToast('Please provide your name and contact email.');
          return;
        }

        // Display sophisticated feedback
        showToast('Inquiry prepared. You can also connect directly with Shivali, Kunal & Azaz on Instagram @foresight_associates.');
        inquiryForm.reset();
      });
    }

    function showToast(message) {
      if (!toastNotice) return;
      toastNotice.textContent = message;
      toastNotice.classList.add('is-active');

      setTimeout(function () {
        toastNotice.classList.remove('is-active');
      }, 5500);
    }

    // 4. Smooth Anchor Scrolling for jump links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 90;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // 5. Image Fallback Handling: Graceful fallback for images
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('error', function () {
        this.style.opacity = '0.9';
        this.style.filter = 'grayscale(20%)';
      }, { once: true });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();


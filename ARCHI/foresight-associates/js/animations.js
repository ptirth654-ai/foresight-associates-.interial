/**
 * FORESIGHT ASSOCIATES — Luxury Architecture & Interior Design Studio
 * Scroll-Driven Animations & Reveal Controller
 */

(function () {
  'use strict';

  function initAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal, .reveal-slide-up, .reveal-fade, .reveal-slide-left, .reveal-slide-right').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // 1. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-slide-up, .reveal-fade, .reveal-slide-left, .reveal-slide-right, .line-expand'
    );

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('is-revealed'));
    }

    // 2. Animated Stats Counter on Entry
    const statElements = document.querySelectorAll('.stat-number[data-target]');
    if (statElements.length && 'IntersectionObserver' in window) {
      const statObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const targetEl = entry.target;
            const targetNum = parseInt(targetEl.getAttribute('data-target'), 10);
            const prefix = targetEl.getAttribute('data-prefix') || '';
            const suffix = targetEl.getAttribute('data-suffix') || '';
            const duration = 1800;
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeOut * targetNum);

              targetEl.textContent = prefix + currentVal + suffix;

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                targetEl.textContent = prefix + targetNum + suffix;
              }
            }

            requestAnimationFrame(updateCounter);
            observer.unobserve(targetEl);
          }
        });
      }, {
        threshold: 0.5
      });

      statElements.forEach(stat => statObserver.observe(stat));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();


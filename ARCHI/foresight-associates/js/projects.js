/**
 * FORESIGHT ASSOCIATES — Luxury Architecture & Interior Design Studio
 * Portfolio & Project Filter Controller + Interactive Modal
 */

(function () {
  'use strict';

  // Verified authentic project records for Foresight Associates
  const PROJECT_DATABASE = {
    'pramukh-villa': {
      title: 'Pramukh Villa',
      subtitle: 'Where Architecture Dissolves into Verdant Plant Pockets',
      category: 'Residential Architecture & Interior Design',
      categoryFilter: ['residential', 'interior', 'architecture'],
      location: 'Vadodara, Gujarat, India',
      area: '3,400 Sq. Ft.',
      year: '2024',
      photography: 'Volume Zero Architecture Archive',
      image: 'assets/images/projects/pramukh-villa.jpg',
      materials: 'Grey Baisan Wall Panels, Natural Teakwood, Concrete Textures, Living Flora',
      description: 'Featured in Volume Zero Architecture & Interior Design Magazine, Pramukh Villa is a 3,400 sq. ft. dwelling crafted by Foresight Associates in Vadodara. From the shaded verandah opening to a captivating grey baisan panel and an elegant traditional wooden table, this home dissolves boundaries between architecture and nature, filled with verdant plant pockets and serene artistic joinery.'
    },
    'vairaag-house': {
      title: 'VAIRAAG House',
      subtitle: 'Award-Winning Modern-Rustic Residence of Earth and Light',
      category: 'Residential Architecture & Interior Design',
      categoryFilter: ['residential', 'interior', 'architecture'],
      location: 'Bill-road, Vadodara, Gujarat',
      area: '3,690 Sq. Ft.',
      year: '2023',
      photography: 'Tejas Shah Photography (@tejasshahphotography)',
      image: 'assets/images/projects/vairaag-house.jpg',
      materials: 'Raw Exposed Concrete, Brick Masonry, Corten Steel Jalis, Earthen Textures',
      description: '“VAIRAAG” is a 3,690 sq. ft. residence designed and decorated by Foresight Associates in Bill, Vadodara. An exemplary suburban home pairing fresh modern design with contrasting rustic elements. The name honors homeowners Vaishali and Gaurang. Recognized at FOAID as the #2 Most Liked Project on Instagram 2022-2023 and featured in Volume Zero Architecture Magazine, Vairaag features exposed concrete, raw brickwork, and custom corten steel screens that interact with Gujarat\'s sun.'
    },
    'shayonam': {
      title: 'Shayonam',
      subtitle: 'An Artful Nucleus of Modern and Ethnic Design',
      category: 'Residential Architecture & Interior Design',
      categoryFilter: ['residential', 'interior', 'architecture'],
      location: 'Vadodara, Gujarat',
      area: '4-Level Family Residence',
      year: '2023',
      photography: 'Volume Zero Architecture Archive',
      image: 'assets/images/projects/shayonam.jpg',
      materials: 'Solid Teakwood Paneling, Handcrafted Gond Art Murals, Water Feature Granite, Fluted Glass',
      description: 'Featured in Volume Zero, Shayonam is a 4-level family residence in Vadodara blending modern aesthetics with traditional Indian craft. A dedicated ground-floor studio opens directly to a tranquil courtyard water body and lush garden. An east-facing vertical light-well anchors the central staircase, cascading morning illumination across handcrafted Gond art murals and sculpted teak elements.'
    },
    'isha-office': {
      title: 'Isha Developer’s Site Office',
      subtitle: 'A Raw, Rustic Workspace Rooted in Timeless Materiality',
      category: 'Commercial Architecture & Workspace Interior',
      categoryFilter: ['commercial', 'interior', 'architecture'],
      location: 'Vadodara, Gujarat',
      area: '1,500 Sq. Ft. Workspace',
      year: '2023',
      photography: 'Volume Zero Architecture Archive',
      image: 'assets/images/projects/isha-office.jpg',
      materials: 'Kota Stone Flooring, Exposed Clay Brick, Sloping Roof Trusses, Cast-Iron Jali',
      description: 'Featured in Volume Zero, this 1,500 sq. ft. corporate site office redefines commercial environments through rustic architectural integrity. Built with a 15-year functional lifespan in mind, sloping roof profiles and exposed clay masonry frame a semi-open central courtyard with native green planters. Overhead custom cast-iron jalis temper the Baroda sun, casting refined filigree patterns across Kota stone floors.'
    },
    'sopan-55': {
      title: 'Sopan 55 Show House',
      subtitle: 'Modern Minimalist Haven with Symmetrical Elegance',
      category: 'Residential Interior Design',
      categoryFilter: ['residential', 'interior'],
      location: 'Bhayli, Vadodara, Gujarat',
      area: '4 BHK Luxury Show Home',
      year: '2024',
      photography: 'The Architect\'s Diary Archive',
      image: 'assets/images/projects/sopan-55.jpg',
      materials: 'Fluted Wall Paneling, Carved Veneer Accents, Patina-Finished Metal Murals, Pastel Fabrics',
      description: 'Featured in The Architect\'s Diary, Sopan 55 adopts a disciplined symmetrical spatial grammar. Linear fluted wall claddings create tactile rhythm, complemented by delicate veneer carvings, warm foyer pendant illumination, and a signature rustic patina mural commanding the main salon with understated luxury.'
    },
    'stria-house': {
      title: 'The Stria House',
      subtitle: 'A Contemporary 5-BHK Home Designed Around Everyday Living',
      category: 'Residential Architecture & Interior Design',
      categoryFilter: ['residential', 'interior', 'architecture'],
      location: 'Darshnam Celestial, Bill, Vadodara',
      area: '4,500 Sq. Ft. (5-BHK)',
      year: '2024',
      photography: 'Tejas Shah Photography (@tejasshahphotography)',
      image: 'assets/images/projects/stria-house.jpg',
      materials: 'Raw Concrete, Patinated Metal, Granite, Cane, Veneer, Fluted Paneling',
      description: 'Set within Darshnam Celestial in Bill, Vadodara, this 4,500 sq. ft. 5-BHK residence was designed by Kunal Patel, Shivali Agrawal, and Azaz Saleh for a family who desired "a house, not a hotel." Featured in The Architect’s Diary, FOAID, Design Perspective, and Design Unfiltered, The Stria House balances minimalist tranquility, tactile warmth, and timeless Indian craftsmanship.'
    },
    'darshnam-ocean': {
      title: 'Darshnam Ocean',
      subtitle: 'Infusing Modern Minimalism with Traditional Richness',
      category: 'Residential Interior Design',
      categoryFilter: ['residential', 'interior'],
      location: 'Vadodara, Gujarat',
      area: 'Sample Flat & Luxury Suite Interiors',
      year: '2024',
      photography: 'Sudhir Parmar Photography',
      image: 'assets/images/projects/darshnam-ocean.jpg',
      materials: 'Neutral Palette Finishes, Fluted Paneling, Classical Moldings, Contemporary Millwork',
      description: 'Designed by Foresight Associates as a showcase residence in Vadodara, Darshnam Ocean demonstrates how modern minimalism and traditional richness intertwine in perfect harmony. Subtle classical moldings complement clean-lined contemporary millwork, resulting in an intimate, serene domestic retreat.'
    }
  };

  function initProjects() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const modalBackdrop = document.querySelector('.project-modal-backdrop');
    const modalCloseBtn = document.querySelector('.modal-close-btn');

    // 1. Category Filtering
    if (filterButtons.length && projectCards.length) {
      filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
          const filterValue = this.getAttribute('data-filter');

          // Update active button state
          filterButtons.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          // Filter cards
          projectCards.forEach(card => {
            const categories = card.getAttribute('data-categories') || '';
            const categoryList = categories.split(' ').map(c => c.trim().toLowerCase());

            if (filterValue === 'all' || categoryList.includes(filterValue.toLowerCase())) {
              card.classList.remove('is-hidden');
            } else {
              card.classList.add('is-hidden');
            }
          });
        });
      });
    }

    // 2. Project Quick View Modal Logic
    if (modalBackdrop) {
      const modalImg = modalBackdrop.querySelector('.modal-img');
      const modalCategory = modalBackdrop.querySelector('.modal-category');
      const modalTitle = modalBackdrop.querySelector('.modal-title');
      const modalLocation = modalBackdrop.querySelector('.modal-location-val');
      const modalArea = modalBackdrop.querySelector('.modal-area-val');
      const modalPhoto = modalBackdrop.querySelector('.modal-photo-val');
      const modalMaterials = modalBackdrop.querySelector('.modal-materials-val');
      const modalNarrative = modalBackdrop.querySelector('.modal-narrative');

      let previouslyFocusedElement = null;

      function openModal(projectId) {
        const data = PROJECT_DATABASE[projectId];
        if (!data) return;

        previouslyFocusedElement = document.activeElement;

        // Populate modal
        if (modalImg) {
          modalImg.src = data.image;
          modalImg.alt = data.title + ' — Foresight Associates';
        }
        if (modalCategory) modalCategory.textContent = data.category;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalLocation) modalLocation.textContent = data.location;
        if (modalArea) modalArea.textContent = data.area;
        if (modalPhoto) modalPhoto.textContent = data.photography;
        if (modalMaterials) modalMaterials.textContent = data.materials;
        if (modalNarrative) modalNarrative.textContent = data.description;

        // Show modal
        modalBackdrop.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        if (modalCloseBtn) modalCloseBtn.focus();
      }

      function closeModal() {
        modalBackdrop.classList.remove('is-active');
        document.body.style.overflow = '';
        if (previouslyFocusedElement) previouslyFocusedElement.focus();
      }

      // Card trigger listeners
      projectCards.forEach(card => {
        const trigger = card.querySelector('.project-media-wrapper') || card;
        const projectId = card.getAttribute('data-project-id');

        if (projectId) {
          trigger.addEventListener('click', function (e) {
            e.preventDefault();
            openModal(projectId);
          });

          // Keyboard support for project triggers
          trigger.setAttribute('tabindex', '0');
          trigger.setAttribute('role', 'button');
          trigger.setAttribute('aria-label', 'View details for ' + (card.querySelector('.project-title')?.textContent || 'project'));
          trigger.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openModal(projectId);
            }
          });
        }
      });

      // Close button listener
      if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
      }

      // Close on backdrop click (outside container)
      modalBackdrop.addEventListener('click', function (e) {
        if (e.target === modalBackdrop) {
          closeModal();
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalBackdrop.classList.contains('is-active')) {
          closeModal();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjects);
  } else {
    initProjects();
  }
})();


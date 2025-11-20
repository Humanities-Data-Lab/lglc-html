/**
 * LGLC Header JavaScript
 * Handles mobile menu toggle and accessibility
 */

(function() {
  'use strict';

  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded
      this.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle hidden attribute on mobile menu
      if (isExpanded) {
        mobileMenu.setAttribute('hidden', '');
      } else {
        mobileMenu.removeAttribute('hidden');
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnToggle = mobileMenuToggle.contains(event.target);
      const isExpanded = 
        mobileMenuToggle.getAttribute('aria-expanded') === 'true';

      if (!isClickInsideMenu && !isClickOnToggle && isExpanded) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('hidden', '');
      }
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        const isExpanded = 
          mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('hidden', '');
          mobileMenuToggle.focus();
        }
      }
    });
  }

  // Search tabs functionality
  const searchTabs = document.querySelectorAll('.search-tab');
  const searchPanels = document.querySelectorAll('.search-panel');

  if (searchTabs.length > 0 && searchPanels.length > 0) {
    searchTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        const targetPanelId = this.getAttribute('aria-controls');
        
        // Update tabs
        searchTabs.forEach(function(t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        
        // Update panels
        searchPanels.forEach(function(panel) {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        });
        
        const targetPanel = document.getElementById(targetPanelId);
        if (targetPanel) {
          targetPanel.classList.add('active');
          targetPanel.removeAttribute('hidden');
          
          // Focus on the search input in the active panel
          const searchInput = targetPanel.querySelector('.search-input');
          if (searchInput) {
            searchInput.focus();
          }
        }
        
        // Announce to screen readers
        announceToScreenReader(
          this.textContent + ' search selected'
        );
      });
      
      // Keyboard navigation for tabs
      tab.addEventListener('keydown', function(event) {
        let newIndex;
        const currentIndex = 
          Array.from(searchTabs).indexOf(this);
        
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          newIndex = currentIndex > 0 ? 
            currentIndex - 1 : searchTabs.length - 1;
          searchTabs[newIndex].click();
          searchTabs[newIndex].focus();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          newIndex = currentIndex < searchTabs.length - 1 ? 
            currentIndex + 1 : 0;
          searchTabs[newIndex].click();
          searchTabs[newIndex].focus();
        } else if (event.key === 'Home') {
          event.preventDefault();
          searchTabs[0].click();
          searchTabs[0].focus();
        } else if (event.key === 'End') {
          event.preventDefault();
          searchTabs[searchTabs.length - 1].click();
          searchTabs[searchTabs.length - 1].focus();
        }
      });
    });
  }

  // Improve focus management for skip link
  const skipLink = document.querySelector('.skip-link');
  const mainContent = document.getElementById('main-content');

  if (skipLink && mainContent) {
    skipLink.addEventListener('click', function(event) {
      event.preventDefault();
      mainContent.focus();
      window.scrollTo({
        top: mainContent.offsetTop,
        behavior: 'smooth'
      });
    });
  }

  // Add smooth scroll behavior for better UX
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        const target = document.querySelector(href);
        
        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Set focus for accessibility
          if (target.hasAttribute('tabindex')) {
            target.focus();
          }
        }
      }
    });
  });

  // Handle window resize - close mobile menu if screen becomes large
  let resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (window.innerWidth >= 768) {
        if (mobileMenuToggle && mobileMenu) {
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('hidden', '');
        }
      }
    }, 250);
  });

  // Announce dynamic content changes to screen readers
  function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(function() {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Add visually hidden class for screen reader only content
  const style = document.createElement('style');
  style.textContent = `
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `;
  document.head.appendChild(style);

})();


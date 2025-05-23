// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Fade in elements when scrolled into view
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  // Initial check for elements in viewport
  checkFadeElements();
  
  // Check elements on scroll
  window.addEventListener('scroll', function() {
    checkFadeElements();
  });
  
  function checkFadeElements() {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  }
  
  // Add hover effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
      if (this.classList.contains('btnred') || this.classList.contains('btnredsm')) {
        this.style.boxShadow = '0 0 15px rgba(229, 9, 20, 0.6)';
      }
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });
  
  // Animate Netflix logo on hover
  const logo = document.querySelector('.logo');
  logo.addEventListener('mouseenter', function() {
    const img = this.querySelector('img');
    img.style.transition = 'all 0.3s ease';
    img.style.transform = 'scale(1.1)';
    img.style.filter = 'brightness(1.2)';
  });
  
  logo.addEventListener('mouseleave', function() {
    const img = this.querySelector('img');
    img.style.transform = 'scale(1)';
    img.style.filter = 'brightness(1.1)';
  });
  
  // Add parallax effect to main hero section
  const mainSection = document.querySelector('.main');
  
  window.addEventListener('scroll', function() {
    const scrollValue = window.scrollY;
    if (scrollValue < mainSection.offsetHeight) {
      const translateY = scrollValue * 0.3;
      mainSection.style.backgroundPosition = `center calc(top + ${translateY}px)`;
    }
  });
  
  // Add animation to input field on focus
  const emailInputs = document.querySelectorAll('input[type="text"]');
  emailInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transition = 'all 0.3s ease';
      this.style.transform = 'scale(1.02)';
      this.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.2)';
    });
    
    input.addEventListener('blur', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
  
  // Add subtle animations to section images
  const sectionImages = document.querySelectorAll('.secimg');
  sectionImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
      const image = this.querySelector('img');
      image.style.transition = 'all 0.5s ease';
      image.style.transform = 'scale(1.03)';
    });
    
    img.addEventListener('mouseleave', function() {
      const image = this.querySelector('img');
      image.style.transform = 'scale(1)';
    });
  });
  
  // Add typing animation to download status
  const downloadStatus = document.querySelector('.download-status');
  if (downloadStatus) {
    setInterval(() => {
      const currentText = downloadStatus.textContent;
      if (currentText === 'Downloading...') {
        downloadStatus.textContent = 'Downloading.';
      } else if (currentText === 'Downloading.') {
        downloadStatus.textContent = 'Downloading..';
      } else {
        downloadStatus.textContent = 'Downloading...';
      }
    }, 500);
  }
});
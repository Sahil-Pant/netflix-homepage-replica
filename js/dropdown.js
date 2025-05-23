// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.getElementById('langOptions');

  // Toggle dropdown visibility
  langDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
    
    // Toggle the show class on dropdown content
    if (langOptions.classList.contains('show')) {
      langOptions.classList.remove('show');
    } else {
      langOptions.classList.add('show');
    }
  });

  // Handle language selection
  const languageLinks = langOptions.querySelectorAll('a');
  languageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Update active language
      languageLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Update button text
      const langText = langDropdown.querySelector('span');
      langText.textContent = this.textContent;
      
      // Close dropdown
      langOptions.classList.remove('show');
      langDropdown.classList.remove('active');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!langDropdown.contains(e.target)) {
      langOptions.classList.remove('show');
      langDropdown.classList.remove('active');
    }
  });
  
  // Handle keyboard navigation
  langDropdown.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      langDropdown.click();
    }
  });
  
  // Add hover effects to dropdown items
  languageLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.2s ease';
      this.style.paddingLeft = '18px';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.paddingLeft = '16px';
    });
  });
});
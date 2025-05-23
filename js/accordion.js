// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  // Add click event listener to each accordion header
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    
    header.addEventListener('click', function() {
      // Get current state
      const isActive = item.classList.contains('active');
      
      // Close all accordions
      accordionItems.forEach(accItem => {
        accItem.classList.remove('active');
        const accContent = accItem.querySelector('.accordion-content');
        accContent.style.maxHeight = null;
      });
      
      // If the clicked item was not active, open it
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
    
    // Add hover effect to accordion headers
    header.addEventListener('mouseenter', function() {
      if (!item.classList.contains('active')) {
        this.querySelector('.accordion-icon').style.transform = 'rotate(45deg)';
        this.style.transform = 'translateX(5px)';
      }
    });
    
    header.addEventListener('mouseleave', function() {
      if (!item.classList.contains('active')) {
        this.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
        this.style.transform = 'translateX(0)';
      }
    });
  });
  
  // Add keyboard accessibility
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    header.setAttribute('aria-expanded', 'false');
    
    header.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
    
    header.addEventListener('click', function() {
      const isActive = item.classList.contains('active');
      this.setAttribute('aria-expanded', isActive);
    });
  });
  
  // Open first accordion by default
  if (accordionItems.length > 0) {
    const firstItem = accordionItems[0];
    const firstContent = firstItem.querySelector('.accordion-content');
    
    firstItem.classList.add('active');
    firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    firstItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'true');
  }
});
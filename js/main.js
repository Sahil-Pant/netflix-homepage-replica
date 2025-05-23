// Main functionality
document.addEventListener('DOMContentLoaded', function() {
  // Handle form submissions
  const emailForms = document.querySelectorAll('.subbtns');
  
  emailForms.forEach(form => {
    const input = form.querySelector('input');
    const button = form.querySelector('button');
    
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const email = input.value.trim();
      
      if (email === '') {
        // Shake animation for empty input
        input.style.animation = 'none';
        setTimeout(() => {
          input.style.animation = 'shake 0.5s ease';
          input.style.borderColor = 'var(--netflix-error)';
        }, 10);
        
        // Reset after animation
        setTimeout(() => {
          input.style.borderColor = 'var(--netflix-gray)';
        }, 1500);
        
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        // Show invalid email message
        const errorMsg = document.createElement('div');
        errorMsg.classList.add('error-message');
        errorMsg.textContent = 'Please enter a valid email address';
        errorMsg.style.color = 'var(--netflix-error)';
        errorMsg.style.fontSize = '0.875rem';
        errorMsg.style.marginTop = '8px';
        errorMsg.style.animation = 'fadeIn 0.3s ease';
        
        // Remove existing error message if any
        const existingError = form.querySelector('.error-message');
        if (existingError) {
          form.removeChild(existingError);
        }
        
        form.appendChild(errorMsg);
        input.style.borderColor = 'var(--netflix-error)';
        
        return;
      }
      
      // Successful submission animation
      button.innerHTML = 'Processing...';
      button.disabled = true;
      
      setTimeout(() => {
        // Simulate successful submission
        button.innerHTML = 'Success!';
        button.style.backgroundColor = 'var(--netflix-success)';
        input.style.borderColor = 'var(--netflix-success)';
        
        // Remove any error messages
        const existingError = form.querySelector('.error-message');
        if (existingError) {
          form.removeChild(existingError);
        }
        
        // Reset after animation
        setTimeout(() => {
          button.innerHTML = 'Get Started <svg class="gsarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none"><path d="M9 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          button.style.backgroundColor = 'var(--netflix-red)';
          button.disabled = false;
          input.value = '';
          input.style.borderColor = 'var(--netflix-gray)';
        }, 2000);
      }, 1000);
    });
    
    // Add Enter key support
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        button.click();
      }
    });
  });
  
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  

  // Add custom animations on page load
  setTimeout(() => {
    // Animate hero content
    const heroElements = document.querySelectorAll('.subs > *');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200);
    });
  }, 500);
  
  // Add keyframe animation for background shimmer on hover
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
      20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    @keyframes shimmer {
      0% { background-position: -100% 0; }
      100% { background-position: 200% 0; }
    }
    
    .btnred:hover, .btnredsm:hover {
      background-image: linear-gradient(90deg, var(--netflix-red) 0%, var(--netflix-red-hover) 50%, var(--netflix-red) 100%);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
  `;
  document.head.appendChild(style);
});
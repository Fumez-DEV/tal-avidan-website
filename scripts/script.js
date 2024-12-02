// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Form Validation
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
    } else {
      alert('Thank you for your message! We will get back to you soon.');
      form.reset(); // Clear the form fields
    }
  });
  
  // Helper Function to Validate Email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Back-to-Top Button (Optional)
  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = '⬆️';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.left = '20px';
  backToTopButton.style.padding = '10px';
  backToTopButton.style.backgroundColor = '#007bff';
  backToTopButton.style.color = '#fff';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '5px';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.display = 'none';
  document.body.appendChild(backToTopButton);
  
  // Show/Hide Back-to-Top Button on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to Top When Back-to-Top Button is Clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
  const reels = document.querySelectorAll(".reel");

  // Dynamic loading of reels (as in the previous step)
  const totalReels = 28; // Total number of reels
  const reelsPerDay = 4; // Number of reels to display daily
  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
  const startIndex = (dayOfYear * reelsPerDay) % totalReels;

  reels.forEach((video, index) => {
    const reelIndex = (startIndex + index) % totalReels + 1;
    video.src = `reels/reels${reelIndex}.mp4`;

    // Add hover event listeners for play/unmute and pause/mute
    video.addEventListener("mouseenter", function () {
      video.play();
      video.muted = false;
    });

    video.addEventListener("mouseleave", function () {
      video.pause();
      video.muted = true;
    });
  });
});

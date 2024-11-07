

const carousel = document.querySelector('#testimonialCarousel');
const interval = 3000; // 3 seconds

// Set the interval for sliding
const bootstrapCarousel = new bootstrap.Carousel(carousel, {
  interval: interval,
  wrap: true
});



function toggleText() {
    const moreText = document.querySelector('.more-text');
    const btn = document.querySelector('.read-more-btn');
    
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'inline';
      btn.textContent = 'Show Less';
    } else {
      moreText.style.display = 'none';
      btn.textContent = 'Read More';
    }
  }
  
  function toggleText2(){
      const moreText = document.querySelector('.more-text2');
    const btn = document.querySelector('.read-more-btn2');
    
    if (moreText.style.display === 'none' || moreText.style.display === '') {
      moreText.style.display = 'inline';
      btn.textContent = 'Show Less';
    } else {
      moreText.style.display = 'none';
      btn.textContent = 'Read More';
    }
  }
  
  function toggleDetails() {
          const yellowSection = document.getElementById("yellowSection");
          yellowSection.classList.toggle("expanded");
      }
  
      function toggleDetails2() {
          const yellowSection = document.getElementById("yellowSection2");
          yellowSection.classList.toggle("expanded");
      }
  
  
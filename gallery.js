document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
  
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      const transformValue = -currentIndex * 100 + '%';
      document.querySelector('.gallery').style.transform = 'translateX(' + transformValue + ')';
    }
  
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
  
    document.querySelector('.gallery-container').addEventListener('click', function (event) {
      if (event.target.classList.contains('slide')) {
        const clickedIndex = Array.from(slides).indexOf(event.target);
        showSlide(clickedIndex);
      }
    });
  
    document.querySelector('.gallery-container').addEventListener('mouseover', function () {
      document.querySelector('.gallery').style.transition = 'transform 0.3s ease-in-out';
    });
  
    document.querySelector('.gallery-container').addEventListener('mouseout', function () {
      document.querySelector('.gallery').style.transition = 'none';
    });
  
    document.querySelector('.gallery-container').addEventListener('mousedown', function (event) {
      if (event.target.tagName === 'IMG') {
        event.preventDefault(); 
      }
    });
  
    document.querySelector('.gallery-container').addEventListener('wheel', function (event) {
      event.preventDefault(); 
      if (event.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    });
  
    document.querySelector('.gallery-container').addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    });
  
    showSlide(currentIndex);
  });
  
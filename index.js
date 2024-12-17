// Hamburger Menü Aç/Kapat
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
///////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150); // Kartlar arasında 150ms gecikme
  });
});

// Dinamik olarak footer'da yılı güncelle
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;
});


function prevSlide(button) {
  const slider = button.parentElement.querySelector('.slider');
  const slides = slider.querySelectorAll('img');
  let currentIndex = parseInt(slider.dataset.index) || 0;

  // Kaydırmayı bir önceki resme ayarla
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  slider.dataset.index = currentIndex;
}

function nextSlide(button) {
  const slider = button.parentElement.querySelector('.slider');
  const slides = slider.querySelectorAll('img');
  let currentIndex = parseInt(slider.dataset.index) || 0;

  // Kaydırmayı bir sonraki resme ayarla
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  slider.dataset.index = currentIndex;
}
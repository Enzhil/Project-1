// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = index;
    slider.style.transform = `translateX(${-index * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 2000);
});

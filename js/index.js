// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll(".slide-1"),
  sliderLine = document.querySelector(".slider_line"),
  sliderBtnNext = document.querySelector(".arr-right"),
  sliderBtnPrev = document.querySelector(".arr-left");

// Переменные
let sliderCount = 0,
  sliderWidth;

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);

// Автоматическое перелистывание слайдов

setInterval(() => {
  nextSlide();
}, 15000);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
  sliderWidth = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));

  rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
}

// Перелистывает слайд назад
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = sliderImages.length - 1;

  rollSlider();
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
// slider best sellers

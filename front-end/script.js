// script.js
document.addEventListener("DOMContentLoaded", () => {
    /* -----------------------------
       ★ 히어로 슬라이더 기능
    ----------------------------- */

    const slider = document.querySelector(".slider-container");
    const dots = document.querySelectorAll(".dot");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let index = 0;
    const totalSlides = 3;

    function showSlide(i) {
        slider.style.transform = `translateX(-${i * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[i].classList.add("active");
        index = i;
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % totalSlides;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => showSlide(i));
    });

});

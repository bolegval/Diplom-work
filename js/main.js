document.addEventListener("DOMContentLoaded", function draw() {
  //Ellips
  let canvas = document.getElementById("banner__bg");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    let lingrad = ctx.createLinearGradient(0, 630, 830, 100);
    lingrad.addColorStop(0, "#ff8f5a");
    lingrad.addColorStop(1, "#ff2f96");
    ctx.fillStyle = lingrad;

    let ellipse = new Path2D(
      "M395.52 40.407C502.261-10.05 602.994-10.204 687.212 27.67c84.435 37.567 152.356 113.165 198.491 207.114 44.27 94.884 44.223 196.799 8.068 279.242-36.656 83.673-97.666 146.755-180.805 191.777-44.03 22.669-90.312 38.198-149.148 47.731-58.06 9.394-128.676 12.79-203.493 7.944-148.474-9.32-314.876-53.081-349.967-151.79-19.887-49.012-7.404-105.197 17.32-161.739 25.13-56.624 62.503-113.604 101.74-166.115 39.645-52.593 81.155-100.717 123.891-141.53C296.45 99.41 340.817 65.828 395.52 40.408z"
    );

    ctx.fill(ellipse);
  }

  //Flying elements
  document.querySelector(".elements").classList.add("elements--active");

  //Slider
  const mySwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 37,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 37
      },

      1025: {
        slidesPerView: 3,
        spaceBetween: 37
      }
    }
  });

  $(".form-button").click(function() {
    $(".form__container--callback").fadeIn();
  });

  $(".form__close").click(function() {
    $(".form__container--callback").fadeOut();
  });

  $('input[type="tel"]').inputmask({ mask: "+7 (999) 999-9999" });

  $(".header__menu-button").click(function() {
    $(".header__navigation").slideToggle();
    $(".header__menu").slideToggle();
    $(this).toggleClass("header__menu-button--closed");
  });
});

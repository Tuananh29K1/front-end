$(document).ready(function () {
  var auto = setInterval(function () {
    let phanTuTiepTheo = $(".active").next();
    if (phanTuTiepTheo.length === 0) {
      $(".active")
        .addClass("goLeftOut")
        .one("webkitAnimationEnd", function (e) {
          $(".goLeftOut").removeClass("goLeftOut");
        });
      $(
        ".main--reviews--content--main--list .main--reviews--content--main:nth-child(1)"
      )
        .addClass("goRightIn")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".goRightIn").addClass("active");
          $(".goRightIn").removeClass("goRightIn");
        });
    } else {
      $(".active")
        .addClass("goLeftOut")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("goLeftOut");
        });
      phanTuTiepTheo
        .addClass("goRightIn")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".goRightIn").addClass("active");
          $(".goRightIn").removeClass("goRightIn");
        });
    }
  }, 3000);

  // =========================== auto next ================================

  $(".main--reviews--content--button--next").click(function (e) {
    clearInterval(auto);
    let phanTuTiepTheo = $(".active").next();
    if (phanTuTiepTheo.length === 0) {
      $(".active")
        .addClass("goLeftOut")
        .one("webkitAnimationEnd", function (e) {
          $(".goLeftOut").removeClass("goLeftOut");
        });
      $(
        ".main--reviews--content--main--list .main--reviews--content--main:nth-child(1)"
      )
        .addClass("goRightIn")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".goRightIn").addClass("active");
          $(".goRightIn").removeClass("goRightIn");
        });
    } else {
      $(".active")
        .addClass("goLeftOut")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("goLeftOut");
        });
      phanTuTiepTheo
        .addClass("goRightIn")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".goRightIn").addClass("active");
          $(".goRightIn").removeClass("goRightIn");
        });
    }
  }); // ==================== end button next =====================

  $(".main--reviews--content--button--back").click(function (e) {
    clearInterval(auto);
    let phanTuSau = $(".active").prev();
    if (phanTuSau.length == 1) {
      $(".active")
        .addClass("goLeftIn")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("goLeftIn");
          $(".goLeftIn").removeClass("goLeftIn");
        });
      phanTuSau.addClass("goRightOut").one("webkitAnimationEnd", function (e) {
        $(".active").removeClass("active");
        $(".goRightOut").addClass("active");
        $(".goRightOut").removeClass("goRightOut");
      });
    } else {
      $(".active")
        .addClass("goLeftIn")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("goLeftIn");
          $(".goLeftIn").removeClass("goLeftIn");
        });
      $(
        ".main--reviews--content--main--list .main--reviews--content--main:last-child()"
      )
        .addClass("goRightOut")
        .one("webkitAnimationEnd", function (e) {
          $(".active").removeClass("active");
          $(".goRightOut").addClass("active");
          $(".goRightOut").removeClass("goRightOut");
        });
    }
  }); // ==================== end button back =====================

  $(".header--top--nav--bar ul li:nth-child(1) a").on("click", function (e) {
    e.preventDefault();
    $("html").animate({ scrollTop: $(".header--bottom").offset().top }, 200);
  });
  $(".header--top--nav--bar ul li:nth-child(2) a").on("click", function (e) {
    e.preventDefault();
    $("html").animate({ scrollTop: $(".main--reviews").offset().top }, 200);
  });
  $(".header--top--nav--bar ul li:nth-child(3) a").on("click", function (e) {
    e.preventDefault();
    $("html").animate({ scrollTop: $(".main--mentors").offset().top }, 200);
  });
  $(".header--top--nav--bar ul li:nth-child(4) a").on("click", function (e) {
    e.preventDefault();
    $("html").animate({ scrollTop: $(".main--sales").offset().top }, 200);
  });
  // ============================= click menu bar ===========================
  $(".header--top--nav--mobile").on("click", function () {
    $(".header--top--nav--mobile--menu").css({ display: "block" });
  });
  $(".header--top--nav--mobile--menu").on("click", function () {
    $(".header--top--nav--mobile--menu").css({ display: "none" });
  });
  $(".header--top--nav--button a").on("click", function () {
    $(".background--login").css({ display: "block" });
  });
  $(".background--login--blur").on("click", function () {
    $(".background--login").css({ display: "none" });
  });
  $(".header--top--content--button__start").on("click", function () {
    $(".background--login").css({ display: "block" });
  });
  $(".header--top--content--button__find").on("click", function () {
    $("html").animate({ scrollTop: $(".main--mentors").offset().top }, 200);
  });
  $(".button--sign__up").on("click", function () {
    $(".background--sign__up").css({ display: "block" });
  });
  $(".background--sign__up--blur").on("click", function () {
    $(".background--sign__up").css({ display: "none" });
  });
  $(".main--sales--button").on("click", function () {
    $(".background--login").css({ display: "block" });
  });
  $(".main--sales--content a").on("click", function () {
    $(".background--login").css({ display: "block" });
  });
  $('.board--login--change--sign__up').on('click',function(){
    $(".background--sign__up").css({ display: "block" });
    $(".background--login").css({ display: "none" });
  });
  // ====================== zoom ảnh bằng fancybox  ============================
  $(".main--carousel a").fancybox({
    helper: {
      title: String,
    },
    autoPlay: true,
  });
  // ============================= slick carousel ==============================
  $(".main--carousel").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $("button.slick-prev.slick-arrow").remove();
  let buttonNext = document.querySelectorAll(".slick-next");
  for (let i = 0; i < buttonNext.length; i++) {
    buttonNext[i].innerText = "";
  }
});

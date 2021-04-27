
var  auto = setInterval(function(){
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
},3000);



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
// ============================= One Page ===========================

// ====================== casouel slick  =================================
 
$('.main--carousel--button__next').on('click', function(e){
  
  $('.main--carousel').addClass('transLateRight');
});
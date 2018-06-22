$(function () {

  "use strict";

// Navbar

  $(window).scroll(function () {

    if ($(window).scrollTop() >= $('.navbar').height()) {

      $('.navbar').addClass("scrolled");

    } else {

      $('.navbar').removeClass("scrolled");

    }
  });


  // Tabs section

  $('.tab-switch li').click(function () {

    // Add Selected Class To Active Link
    $(this).addClass('selected').siblings().removeClass('selected');

    // console.log($(this).data('class'));
    // Hide All Divs
    $(".tabs-section .tabs-content > div").hide();
    // Show Div Connected with This Link
    $("." + $(this).data('class')).show();


  });


  // Add Class Active

  $(".navbar-nav>li").click(function () {

      $(".navbar-nav>li").removeClass('active');

      $(this).addClass('active').siblings();

  });


  // Trigger Smoth Scroll

  smoothScroll.init({
    speed: 800,
        offset: 87
  });



  $(window).on("load", function() {
      $(".loading .sk-folding-cube").fadeOut(3e3, function() {
          $('body').css('overflow', 'auto');
          $(this).parent().fadeOut(1e3)
      })
  });

});

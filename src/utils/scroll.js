import jQuery from "jquery";

(function($) {
  $(document).ready(function () {
    // Add smooth scrolling to all links with class "js-scroll-trigger"
    $("a.js-scroll-trigger").on("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        $("html, body").animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });  

  // Close responsive navbar after click
  $(document).on("click", ".js-scroll-trigger", function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56
  });

  // Collapse Navbar
  const navbarCollapse = function() {
    const nav = $("#mainNav");
    if (nav.length) {
      const contentNav = nav.offset().top;
      if (contentNav > 100) {
        nav.addClass("navbar-shrink");
      } else {
        nav.removeClass("navbar-shrink");
      }
    }
  };
  // Collapse navbar if page is not at top
  navbarCollapse();
  // Collapse navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll to top
  $(document).scroll(function() {
    const scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

})(jQuery);
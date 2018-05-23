import jQuery from 'jquery';
// import ScrollReveal from 'scrollreveal';

(function($) {
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a.js-scroll-trigger").on('click', function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        const hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });  

  // Closes responsive menu after click
  $(document).on('click', '.js-scroll-trigger', function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  const navbarCollapse = function() {
    const nav = $('#mainNav');
    if (nav.length) {
      const contentNav = nav.offset().top;
      if (contentNav > 100) {
        nav.addClass("navbar-shrink");
      } else {
        nav.removeClass("navbar-shrink");
      }
    }
  };
  // Collapse if page is not at top
  navbarCollapse();
  // Collapse navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  // $('.portfolio-modal').on('show.bs.modal', function(e) {
  //   $(".navbar").addClass("d-none");
  // })
  // $('.portfolio-modal').on('hidden.bs.modal', function(e) {
  //   $(".navbar").removeClass("d-none");
  // })

  // Scroll reveal calls
  // window.sr = ScrollReveal();
  // window.sr.reveal('.sr-icons', {
  //   duration: 600,
  //   scale: 0.3,
  //   distance: '0px'
  // }, 200);
  // window.sr.reveal('.sr-button', {
  //   duration: 1000,
  //   delay: 200
  // });
  // window.sr.reveal('.sr-contact', {
  //   duration: 600,
  //   scale: 0.3,
  //   distance: '0px'
  // }, 300);

  // Scroll to top
  $(document).scroll(function() {
    const scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery);
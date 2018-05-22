import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import jQuery from 'jquery';
import ScrollReveal from 'scrollreveal';

(function($) {
  // Smooth scrolling with jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu after click
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    var nav = $('#mainNav');
    if (nav.length) {
      var contentNav = nav.offset().top;
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
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

  // Scroll reveal calls
  window.sr = ScrollReveal();
  window.sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  window.sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  window.sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Scroll to top
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;

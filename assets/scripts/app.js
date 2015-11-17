//Author: Ed Prince
//Content: Web Scroll app.js

$(document).ready(function(){
  main();
});

function main(){
  var evenDivs = $('.ws-wrapper div:nth-child(even)');
  var oddDivs = $('.ws-wrapper div:nth-child(odd)');
  var length = $('.ws-wrapper').children().length;
  console.log(length);

  $('.ws-wrapper').children().each(function(i) {
    console.log(i);
    $(this)
      .attr('class', 'counted')
      .attr('class', 'ws')
      .attr('id', 'ws-' + (i));
    if ((i) % 2 === 0) {
      if (i === 0) {
        $(this).addClass('header');
      }
      $(this).addClass('even');
    } else {
      $(this).addClass('odd');
    }
    console.log($(this).attr('class'));
    $(this).append('<a></a>');
    $(this).children('a').append('<i></i>');
    console.log("Current i ", i);
    console.log("Length - ", length);
    if ((i + 1) === length) {
      console.log("Up arrow");
      $(this).children('a')
        .attr('href', '#ws-0')
        .children('i')
          .addClass('ion-chevron-up');
    } else {
      console.log($(this) + ' .ws');
      $(this).children('a')
        .attr('href', '#ws-' + (i + 1))
        .children('i')
        .addClass('ion-chevron-down');
    }
  });

  //Code to change appearance of nav bar upon scrolling
  $(window).scroll(function(){
    console.log('Hello');
    if ($(window).scrollTop() > 60) {
      $('nav').addClass('scrollNav');
      $('nav a').css('color', 'grey');
    } else {
      $('nav').removeClass('scrollNav');
      $('nav a').css('color', 'white');
    }
  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });
}

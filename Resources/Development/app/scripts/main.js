$(function () {
  'use strict';

  var
    $mobileMenu = $('.mobile-menu'),
    $menuCloser = $('.menu-toggle', $mobileMenu),
    $submenuToggle = $('.submenu-toggle', $mobileMenu),
    $submenucloser = $('.submenu-closer', $mobileMenu)
  ;

  $submenuToggle.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').parent().next('ul.subnav').toggleClass('open');
  });

  $submenucloser.each(function () {
    var $closer = $(this);
    $closer.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $closer.closest('ul.subnav').removeClass('open');
    });
  });
});

$(function(){
	'use strict';

	var
		$mobileMenu = $('.mobile-menu'),
		$submenuToggle = $('.submenu-toggle', $mobileMenu)
	;

	$submenuToggle.on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('open').next('ul.subnav').toggleClass('open');
	});
});

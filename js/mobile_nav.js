
// Mobile nav button
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile__nav-wrapper');
const nav2 = document.querySelector('.mobile__nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile__nav-fade');
const mobileNavLinks = document.querySelectorAll('.mobile__nav-link');

navBtn.onclick = function () {
	nav.classList.toggle('mobile__nav-open');
	nav2.classList.toggle('flex');
	fade.classList.toggle('mobile__nav_fade-open');
	menuIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no__scroll');
};

fade.onclick = function () {
	nav.classList.toggle('mobile__nav-open');
	nav2.classList.toggle('flex');
	fade.classList.toggle('mobile__nav_fade-open');
	menuIcon.classList.toggle('nav-icon--active');
	document.body.classList.toggle('no__scroll');
};

mobileNavLinks.forEach(elem => {
	elem.onclick = function () {
		nav.classList.toggle('mobile__nav-open');
		nav2.classList.toggle('flex');
		fade.classList.toggle('mobile__nav_fade-open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no__scroll');
	}
});

window.onload = function () {
	document.body.classList.add('loaded__hiding');
	window.setTimeout(function () {
	  document.body.classList.add('loaded');
	  document.body.classList.remove('loaded__hiding');
	}, 500);
  }




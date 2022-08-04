'use strict';
const outside = document.querySelector('main');
const features = document.querySelector('.features-btn');
const company = document.querySelector('.company-btn');
const featuresMenu = document.querySelector('.features');
const companyMenu = document.querySelector('.company');

features.addEventListener('click', function (e) {
	e.preventDefault();

	featuresMenu.classList.toggle('visible');
	companyMenu.classList.remove('visible');
});

company.addEventListener('click', function (e) {
	e.preventDefault();
	companyMenu.classList.toggle('visible');
	featuresMenu.classList.remove('visible');
});

outside.addEventListener('click', function (e) {
	e.preventDefault();

	featuresMenu.classList.remove('visible');
	companyMenu.classList.remove('visible');
});

// MOBILE JS
const mobileMenu = document.querySelector('.platform');
const menuBtn = document.querySelector('.hamburger');
const menuClose = document.querySelector('.close');
const featuresMobile = document.querySelector('.features-mobile');
const companyMobile = document.querySelector('.company-mobile');
const featuresMobileBtn = document.querySelector('.features-btn-mobile');
const companyMobileBtn = document.querySelector('.company-btn-mobile');
const outsideMobile = document.querySelector('.empty');

menuBtn.addEventListener('click', function () {
	mobileMenu.classList.add('flex');
	mobileMenu.classList.remove('in-active');
});

menuClose.addEventListener('click', function () {
	mobileMenu.classList.remove('flex');
	mobileMenu.classList.add('in-active');
});
outsideMobile.addEventListener('click', function () {
	mobileMenu.classList.remove('flex');
	mobileMenu.classList.add('in-active');
});

featuresMobileBtn.addEventListener('click', function (e) {
	e.preventDefault();

	featuresMobile.classList.toggle('in-active');
});

companyMobileBtn.addEventListener('click', function (e) {
	e.preventDefault();
	companyMobile.classList.toggle('in-active');
});

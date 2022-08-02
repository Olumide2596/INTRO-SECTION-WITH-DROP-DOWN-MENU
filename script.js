'use strict';
const outside = document.querySelector('body');
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

// outside.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	if (
// 		featuresMenu.classList.contains('visible')
// 	) {

// 	}
// });

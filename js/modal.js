
/*!
* Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
* Copyright 2011-2024 The Bootstrap Authors
* Licensed under the Creative Commons Attribution 3.0 Unported License.
*/


'use strict'

	const getStoredTheme = () => localStorage.getItem('theme')
	const setStoredTheme = theme => localStorage.setItem('theme', theme)

	const getPreferredTheme = () => {
		const storedTheme = getStoredTheme()
if (storedTheme) {
			return storedTheme
		}

return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}

	const setTheme = theme => {
		if (theme === 'auto') {
	document.documentElement.setAttribute('data-bs-theme',
		(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
} else {
	document.documentElement.setAttribute('data-bs-theme', theme)
}
	}

	const setModalTheme = theme => {
			const modalTheme = document.querySelector('#ModalBackground');
const mbtnBlueSky = document.querySelector('#btnBlueSky');
const mbtnTwitch = document.querySelector('#btnTwitch');
const mbtnGithub = document.querySelector('#btnGitHub');
const mbtnEmail = document.querySelector('#btnMail');
const mbtnRSS = document.querySelector('#btnRSS');
const mThemeIcon = document.querySelector('#bd-theme-text');
const root = document.querySelector(':root');

let colorTheme = theme;
	if (theme === 'auto') {
		colorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	} else {
		colorTheme = theme;

	}
	
	if (colorTheme === 'dark') {
		modalTheme.style.backgroundColor = "#081b22";
		mbtnBlueSky.style.fill = 'white';
		mbtnTwitch.style.color = 'white';
		mbtnGithub.style.color = 'white';
		mbtnEmail.style.color = 'white';
		mbtnRSS.style.color = 'white';

		mThemeIcon.classList.remove('bi-sun-fill');
		mThemeIcon.classList.add('bi-moon-stars-fill');



	} else {
		modalTheme.style.backgroundColor = "#00BFFF";

		mbtnBlueSky.style.fill = 'black';
		mbtnTwitch.style.color = 'black';
		mbtnGithub.style.color = 'black';
		mbtnEmail.style.color = 'black';
		mbtnRSS.style.color = 'black';

		mThemeIcon.classList.remove('bi-moon-stars-fill');
		mThemeIcon.classList.add('bi-sun-fill');


		
	}
		
}

const setSearchTheme = theme => {

	const root = document.querySelector(':root');

	let colorTheme = theme;
	if (theme === 'auto') {
		colorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	} else {
		colorTheme = theme;

	}

	if (colorTheme === 'dark') {
		root.style.setProperty('--pagefind-ui-primary', '#eee');
		root.style.setProperty('--pagefind-ui-text', '#eee');
		root.style.setProperty('--pagefind-ui-background', '#152028');
		root.style.setProperty('--pagefind-ui-border', '#444');
		root.style.setProperty('--pagefind-ui-tag', '#444');


	} else {
		root.style.setProperty('--pagefind-ui-primary', '#393939');
		root.style.setProperty('--pagefind-ui-text', '#393939');
		root.style.setProperty('--pagefind-ui-background', '#fff');
		root.style.setProperty('--pagefind-ui-border', '#eee');
		root.style.setProperty('--pagefind-ui-tag', '#eee');

	}

}


setTheme(getPreferredTheme())
setSearchTheme(getPreferredTheme())
	
	
	const showActiveTheme = (theme, focus = false) => {
		const themeSwitcher = document.querySelector('#btnThmeChange')

if (!themeSwitcher) {
			return
		}

const themeSwitcherText = document.querySelector('#bd-theme-text')
const activeThemeIcon = document.querySelector('.theme-icon-active use')
const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

		document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
	element.classList.remove('active')
			element.setAttribute('aria-pressed', 'false')
		})

btnToActive.classList.add('active')
btnToActive.setAttribute('aria-pressed', 'true')
activeThemeIcon.setAttribute('href', svgOfActiveBtn)
const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

if (focus) {
	themeSwitcher.focus()
}
	}



	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		const storedTheme = getStoredTheme()
if (storedTheme !== 'light' && storedTheme !== 'dark') {
	setTheme(getPreferredTheme())

}
	})


window.addEventListener("DOMContentLoaded", event => {

	showActiveTheme(getPreferredTheme())

	document.querySelectorAll('[data-bs-theme-value]')
		.forEach(toggle => {
	toggle.addEventListener('click', () => {
		const theme = toggle.getAttribute('data-bs-theme-value')
		setStoredTheme(theme)
		setTheme(theme)
		showActiveTheme(theme, true)
		setModalTheme(theme)
	})
})

const mOpenBtn = document.querySelector('#modalOpen');
const btnHome = document.querySelector('#btnHome');
const btnSearch = document.querySelector('#btnSearch1');

const mCloseBtn = document.querySelector('#modalClose');

const menuModal = document.querySelector('#menuModal');
const modal = new bootstrap.Modal(menuModal);


	mOpenBtn.addEventListener('click', event => {
	mOpenBtn.classList.add("animate__fadeOutUp");
btnHome.classList.add("animate__fadeOutUp");
btnSearch.classList.add("animate__fadeOutUp");
setModalTheme(getPreferredTheme())
		btnSearch.addEventListener('animationend', () => {

	menuModal.classList.remove("animate__slideOutUp");
menuModal.classList.add("animate__slideInDown");

modal.show();

mOpenBtn.classList.remove("animate__fadeInDown");
btnHome.classList.remove("animate__fadeInDown");
btnSearch.classList.remove("animate__fadeInDown");
			
		}, {once: true })
	});

	mCloseBtn.addEventListener('click', event =>{
	menuModal.classList.remove("animate__slideInDown");
menuModal.classList.add("animate__slideOutUp");
		
		menuModal.addEventListener('animationend', () => {

	modal.hide();

mOpenBtn.classList.remove("animate__fadeOutUp");
btnHome.classList.remove("animate__fadeOutUp");
btnSearch.classList.remove("animate__fadeOutUp");

mOpenBtn.classList.add("animate__fadeInDown");
btnHome.classList.add("animate__fadeInDown");
btnSearch.classList.add("animate__fadeInDown");

		}, {once: true })	
	});
})


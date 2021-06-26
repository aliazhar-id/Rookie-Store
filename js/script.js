// document.onkeydown = (e) => {
// 	if ((e.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) {
// 		return false;
// 	}
// }

window.onbeforeunload = () => {
	window.scrollTo(0, 0);
}

function showForm() {
	document.body.style.overflow = 'hidden';
	form.style.display = 'block';
	overlay.style.display = 'flex';
}

function hideForm() {
	document.body.style.overflow = 'auto';
	form.style.display = 'none';
	overlay.style.display = 'none';
}

const form = document.querySelector('form'),
overlay = document.querySelector('.overlay'),
signinButton = document.querySelector('.header-signin-button'),
hamburger = document.querySelector('.hamburger');


signinButton.onclick = showForm;
hamburger.onclick = showForm;
overlay.onclick = hideForm;
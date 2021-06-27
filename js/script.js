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
	setTimeout(() => {
		form.style.opacity = '0.3';
	}, 80);
	setTimeout(() => {
		form.style.opacity = '0.5';
	}, 150);
	setTimeout(() => {
		form.style.opacity = '1';
	}, 300);
	overlay.style.display = 'flex';
}

function hideForm() {
	document.body.style.overflow = 'auto';
	setTimeout(() => {
		form.style.opacity = '0.3';
	}, 150);
	form.style.opacity = '0.5';
	setTimeout(() => {
		form.style.display = 'none';
		overlay.style.display = 'none';
	}, 300);
}

const form = document.querySelector('form'),
overlay = document.querySelector('.overlay'),
btnCloseForm = document.querySelector('.btncloseform'),
signinButton = document.querySelector('.header-signin-button'),
hamburger = document.querySelector('.hamburger');

signinButton.onclick = showForm;
hamburger.onclick = showForm;
overlay.onclick = hideForm;
btnCloseForm.onclick = hideForm;
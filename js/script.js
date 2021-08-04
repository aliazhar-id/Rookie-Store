document.onkeydown = (e) => {
	if ((e.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) {
		return false;
	}
}

//when the browser is refreshed scroll the window to the top of the page
window.onbeforeunload = () => {
	window.scrollTo(0, 0);
}

//function to show form element
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

// function to hide form element
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

// hide marquee on onclick
const marquee = document.querySelector('marquee');
marquee.addEventListener('click', function () {
	this.style.display = 'none';
	scrollToDown();
});

// scroll to bottom when headerLogo got clicked
const headerLogo = document.querySelector('.header-logo');
headerLogo.onclick = scrollToDown;

// scrollToDown
function scrollToDown() {
	let t = document.body.scrollHeight,
		d = 500;
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) return;
	if (d < 0) return;
	var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
	var difference = t - scrollTop;
	var perTick = difference / d * 10;

	setTimeout(() => {
		scrollTop += perTick;
		document.body.scrollTop = scrollTop;
		document.documentElement.scrollTop = scrollTop;
		if (scrollTop === t) return;
		scrollToDown(t, d - 10);
	}, 10);
}

// Modal
var modal = document.querySelector('.modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalOkBtn = document.getElementById('modal-ok-btn');

const card = document.querySelectorAll('.card');
card.forEach((x) => {
	x.addEventListener('click', () => {
		modal.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
});

// function to hide modal
function hideModal() {
	modal.style.display = "none";
	document.body.style.overflow = 'auto';
}

modalCloseBtn.onclick = hideModal;

modalOkBtn.onclick = () => {
	hideModal();
	scrollToDown();
}

window.onclick = event => {
	if (event.target == modal) {
		hideModal();
	}
}
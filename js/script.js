//Disable some keyboard shortcut actions.
document.onkeydown = (e) => {
	if ((e.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) {
		return;
	}
}

// When the browser is refreshed scroll the window to the top of the page
window.onbeforeunload = () => {
	window.scrollTo(0, 0);
}

const form = document.querySelector('form'),
	overlay = document.querySelector('.overlay');

// Function to show form element
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

// Function to hide form element
function hideForm() {
	document.body.style.overflow = 'auto';
	form.style.opacity = '0.5';
	setTimeout(() => {
		form.style.opacity = '0.3';
	}, 150);

	setTimeout(() => {
		form.style.display = 'none';
		overlay.style.display = 'none';
	}, 300);
}

// To show and hide form put the class, id, or tag name into array below, which mean index 0 to show Form; and index 1 to hide form, when got clicked;
const formEvents = [['.header-signin-button', '.hamburger'], ['.btncloseform', '.overlay']];
formEvents.forEach((x, i) => {
	x.forEach(x => {
		document.querySelector(x).onclick = (i === 0) ? showForm : hideForm;
	});
});


// Hide marquee on onclick
const marquee = document.querySelector('marquee');
marquee.addEventListener('click', function () {
	this.style.display = 'none';
	scrollToDown();
});

// Scroll to bottom when headerLogo got clicked
const headerLogo = document.querySelector('.header-logo');
headerLogo.onclick = scrollToDown;

// scrollToDown
function scrollToDown() {
	const t = document.body.scrollHeight,
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
const modal = document.querySelector('.modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalOkBtn = document.getElementById('modal-ok-btn');

const main = document.querySelector('main');
main.addEventListener('click', e => {
	try {
		if (e.target.offsetParent.parentNode.className === 'card') {
			modal.style.display = "block";
			document.body.style.overflow = 'hidden';
		}
	} catch {
		return;
	}
})

// Function to hide modal
function hideModal() {
	modal.style.display = "none";
	document.body.style.overflow = 'auto';
}

modalCloseBtn.onclick = hideModal;

modalOkBtn.onclick = () => {
	hideModal();
	scrollToDown();
}

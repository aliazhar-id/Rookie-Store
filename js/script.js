// When the browser is refreshed scroll the window to the top of the page
window.onbeforeunload = () => {
	window.scrollTo(0, 0);
}

// Disable right clicking event
document.body.addEventListener('contextmenu', (e) => e.preventDefault());

const form = document.querySelector('form'),
	overlay = document.querySelector('.overlay');

// Function to show form element
function showForm() {
	document.body.style.overflow = 'hidden';
	form.style.display = 'block';
	overlay.style.display = 'flex';
	form.style.animation = 'showFormOpacity .35s forwards linear';
}

// Function to hide form element
function hideForm() {
	document.body.style.overflow = 'auto';
	form.style.animation = 'hideFormOpacity .5s forwards linear';
	setTimeout(() => {
		form.style.display = 'none';
		overlay.style.display = 'none';
	}, 550);
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
	window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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

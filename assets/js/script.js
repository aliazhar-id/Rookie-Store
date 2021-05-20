document.onkeydown = (e) => {
	if ((e.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) {
		return false;
	}
}

window.onbeforeunload = () => {
	window.scrollTo(0, 0);
}

document.onclick = () => rippleFX(event);
window.oncontextmenu = () => rippleFX(event);

function rippleFX(e) {
	const ripple = document.createElement("div");

	ripple.className = "ripple";
	document.body.appendChild(ripple);

	ripple.style.left = `${e.clientX}px`;
	ripple.style.top = `${e.clientY}px`;

	ripple.style.animation = "ripple-effect .5s  linear";
	ripple.onanimationend = () => document.body.removeChild(ripple);
}

function scrollToDown(t, d) {
	t = document.body.scrollHeight, d = 500;
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

const brand = document.querySelector('.brand');
brand.onclick = scrollToDown;

function showFormLogin(x) {
	var y = document.querySelector('.form-container');
	if (x) {
		y.style.display = "none";
		document.body.style.overflow = "auto";
	} else {
		document.body.style.overflow = "hidden";
		y.style.display = "flex";
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
}

const login = document.querySelector('.login');
login.onclick = () => {
	showFormLogin('');
};

const closeFormClass = ['.form-overlay', '.closeBtn', '.fpw', '.nacc'];
closeFormClass.forEach((x) => {
	document.querySelector(x).onclick = showFormLogin;
});

const marquee = document.querySelector('marquee');
marquee.onclick = () => {
	scrollToDown();
	marquee.style.display = 'none';
}

const cardContent = document.querySelectorAll('.card-content');
cardContent.forEach((x) => {
	x.onclick = () => {
		q = confirm("\bRookieStore\b Saat ini masih dalam tahap alpha, \nJika anda ingin order/membeli bisa langsung menghubungi kontak yang tercantum di bagian paling bawah halaman ini. ");
		if (q) {
			scrollToDown();
		}
	}
});

cardContent[0].onclick = () => {
	location.href = 'game/free-fire.html'
};

const githubSvg = document.getElementById('github-svg');
githubSvg.onclick = () => {
	window.open('https://github.com/aliazhar-id')
};
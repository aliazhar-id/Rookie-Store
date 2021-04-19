var docHeight = document.body.scrollHeight;
function scSmooth(to, duration) {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) return;
    if (duration < 0) return;
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    var difference = to - scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
      scrollTop = scrollTop + perTick;
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;
      if (scrollTop === to) return;
      scSmooth(to, duration - 10);
    }, 10);
  }
function notBuy() {
	 question = confirm("\bRookieStore\b Saat ini masih dalam tahap alpha, \nJika anda ingin order/membeli bisa langsung menghubungi kontak yang tercantum di bagian paling bawah halaman ini. ");
	if (question == true) {
	  window.scSmooth(docHeight, 500);
	} 
}
function login(st) {
	var	x = document.getElementsByClassName("form-container");
	if (st == 1) {
		document.body.style.overflow = "hidden";
		x[0].style.display = "flex";
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	else {
		x[0].style.display = "none";
		document.body.style.overflow = "auto";
	}
}
document.onkeydown = function(e) { 
  if((event.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) {
		return false;
	}
}
function scDown() {
	window.scSmooth(docHeight, 500);
}

window.onbeforeunload = function () {
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

   ripple.style.animation = "ripple-effect .6s  linear";
   ripple.onanimationend = () => document.body.removeChild(ripple);
}
function notBuy() {
	alert("Websitenya belom jadi, Jika ingin membeli anda bisa menghubungi kontak yang tercantum di bagian paling bawah halaman ini");
}
function login(st) {
	if (st == 1) {
		document.getElementById("body").style.overflow = "hidden";
		document.getElementById("login").style.display = "flex";
		window.scrollTo(0,0);
	}
	else {
		document.getElementById("login").style.display = "none";
		document.getElementById("body").style.overflow = "auto";
	}
}
document.onkeydown = function(e) { 
  if((event.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) {
		return false;
	}
}

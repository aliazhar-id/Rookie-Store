document.onkeydown = function(e) { 
  if((event.keyCode == 123) || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0))) {
    return false;
  }
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

   ripple.style.animation = "ripple-effect .5s  linear";
   ripple.onanimationend = () => document.body.removeChild(ripple);
}

const docHeight = document.body.scrollHeight;
function scrollToDown(t, d) {
  t = docHeight, d = 500;
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) return;
    if (d < 0) return;
    var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
    var difference = t - scrollTop;
    var perTick = difference / d * 10;

    setTimeout(function() {
      scrollTop = scrollTop + perTick;
      document.body.scrollTop = scrollTop;
      document.documentElement.scrollTop = scrollTop;
      if (scrollTop === t) return;
      scrollToDown(t, d - 10);
    }, 10);
  }

const brand = document.querySelector('.brand');
brand.onclick = scrollToDown;

function showFormLogin(y) {
  var x = document.querySelector('.form-container');
  if (y == 1) {
    document.body.style.overflow = "hidden";
    x.style.display = "flex";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  else {
    x.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

const login = document.querySelector('.login');
login.onclick = function(){
  showFormLogin(1);
};

const formOverlay = document.querySelector('.form-overlay');
formOverlay.onclick = showFormLogin;

const closeBtn = document.querySelector('.closeBtn');
closeBtn.onclick = showFormLogin;

const fpw = document.querySelector('.fpw');
fpw.onclick = showFormLogin;

const nacc = document.querySelector('.nacc');
nacc.onclick = showFormLogin;

const marquee = document.querySelector('marquee');
marquee.onclick = function(){
  scrollToDown();
  this.style.display = 'none';
}

const cardContent = document.querySelectorAll('.card-content');
for(let i = 0; i < cardContent.length; i++) {
  cardContent[i].onclick = function() {
    question = confirm("\bRookieStore\b Saat ini masih dalam tahap alpha, \nJika anda ingin order/membeli bisa langsung menghubungi kontak yang tercantum di bagian paling bawah halaman ini. ");
    if (question == true) {
      scrollToDown();
    } 
  }
}

cardContent[0].onclick = function(){ location.href = 'game/free-fire.html' };
const githubSvg = document.getElementById('github-svg');
githubSvg.onclick = function(){ window.open('https://github.com/aliazhar-id') };
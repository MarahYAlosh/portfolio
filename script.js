let icon =document.getElementById('icon');
let bodyEl = document.querySelector("body");
console.log(icon)
icon.addEventListener('click',(e)=>{
   bodyEl.classList.toggle('light-mode')
})




ScrollReveal({ reset: true,
   distance : '80px',
   duration : 2000,
   delay : 200,
 });

 ScrollReveal().reveal('.section', { origin: 'top' });
 ScrollReveal().reveal('.right', { origin: 'top' });
 ScrollReveal().reveal('.left', { origin: 'bottom' });
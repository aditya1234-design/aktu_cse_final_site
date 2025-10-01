
document.getElementById('menuBtn').addEventListener('click',function(){var n=document.querySelector('.nav');if(n.style.display==='flex')n.style.display='none';else n.style.display='flex'});
document.getElementById('contactForm').addEventListener('submit', function(e){
  // Allow default submit to Formspree; show quick client message
  var btn = this.querySelector('button[type=submit]');
  btn.disabled = true; btn.innerText = 'Sending...';
});

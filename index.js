(function(){
  var root=document.documentElement,btn=document.getElementById('themeBtn'),lbl=btn.querySelector('.lbl');
  function get(){try{return localStorage.getItem('theme')}catch(e){return null}}
  function set(v){try{localStorage.setItem('theme',v)}catch(e){}}
  function apply(t){root.setAttribute('data-theme',t);lbl.textContent=t==='dark'?'Light mode':'Dark mode'}
  var saved=get(),sysDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(saved||(sysDark?'dark':'light'));
  btn.addEventListener('click',function(){var next=root.getAttribute('data-theme')==='dark'?'light':'dark';apply(next);set(next)});
})();
document.querySelectorAll('.year').forEach(function(el){el.textContent=new Date().getFullYear()});
var glow=document.getElementById('glow');
document.addEventListener('mousemove',function(e){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
var navAs=document.querySelectorAll('.nav-links a');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){navAs.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px',threshold:0});
  document.querySelectorAll('section[id]').forEach(function(s){io.observe(s)});
  var ro=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(function(s){ro.observe(s)});
}else{document.querySelectorAll('.reveal').forEach(function(s){s.classList.add('in')})}
var copyBtn=document.getElementById('copyBtn'),emailVal=document.getElementById('emailVal');
copyBtn.addEventListener('click',function(){
  var t=emailVal.textContent.trim(),done=function(){copyBtn.textContent='Copied!';copyBtn.classList.add('copied');setTimeout(function(){copyBtn.textContent='Copy';copyBtn.classList.remove('copied')},2000)};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done).catch(function(){fallbackCopy(t,done)})}else fallbackCopy(t,done);
});
function fallbackCopy(t,done){var ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){}document.body.removeChild(ta)}

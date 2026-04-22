document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t){const h=70,o=t.getBoundingClientRect().top+w.pageYOffset-h;w.scrollTo({top:o,behavior:'smooth'})}})});
  const s=document.querySelectorAll('.section'),o=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');o.unobserve(x.target)}})},{threshold:0.1});s.forEach(x=>o.observe(x));
  const f=document.querySelectorAll('.filter-btn'),i=document.querySelectorAll('.portfolio-item');
  f.forEach(b=>{b.addEventListener('click',()=>{f.forEach(x=>x.classList.remove('active'));b.classList.add('active');const c=b.dataset.filter;i.forEach(x=>{if(c==='all'||x.dataset.category===c){x.classList.remove('hidden')}else{x.classList.add('hidden')}})})});
});

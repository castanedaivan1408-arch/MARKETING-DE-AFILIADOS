/* Menú generado desde las secciones, scroll-spy, menú móvil y actividad */
const secs=[...document.querySelectorAll('.slide')];
const ul=document.querySelector('nav ul');
secs.forEach((s,n)=>{
  const li=document.createElement('li');
  li.innerHTML=`<a href="#${s.id}"><b>${n?String(n).padStart(2,'0'):'★'}</b>${s.dataset.t}</a>`;
  ul.appendChild(li);
});
const links=[...ul.querySelectorAll('a')];
const nav=document.getElementById('nav'),burger=document.getElementById('burger');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
links.forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}});
},{rootMargin:'-35% 0px -60% 0px'});
secs.forEach(s=>io.observe(s));

/* Actividad TecnoSmart */
document.getElementById('ev').addEventListener('click',()=>{
  const ids=['q1','q2','q3','q4'],r=document.getElementById('res');
  if(ids.some(i=>document.getElementById(i).selectedIndex===0)){r.innerHTML='<span class="no">Responde las 4 preguntas para evaluar.</span>';return}
  const ok=ids.filter(i=>document.getElementById(i).value==='a').length;
  const msg=['Replantea: el producto y su público piden otro enfoque.','Buen comienzo: ajusta nicho, canal y objetivo.','Vas bien: revisa la respuesta que falló.','Casi perfecto: solo falta una pieza.','¡Estrategia sólida!'][ok];
  r.innerHTML=`<span class="ok">${ok}/4 · ${msg}</span><br>Ruta sugerida: nicho de tecnología y accesorios, TikTok y Reels con un blog de apoyo, objetivo de generar ventas y contenido orgánico combinado con publicidad (si el programa la permite). Comisión por venta: $150.000 × 12% = $18.000 COP.`;
});

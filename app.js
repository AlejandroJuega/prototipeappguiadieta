const $ = q => document.querySelector(q);
const $$ = q => document.querySelectorAll(q);

/* Navegación */
$('#nav').onclick = e => {
  if (!e.target.dataset.view) return;
  $$('.tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  $$('section').forEach(s => s.classList.remove('active'));
  $('#' + e.target.dataset.view).classList.add('active');
};

/* Emojis */
$('#emojis').onclick = e => {
  const b = e.target.closest('.emoji');
  if (!b) return;
  $$('#emojis .emoji').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  const st = b.dataset.e;
  const msg = {
    bien: '👏 ¡Genial! +10 pts',
    mala: 'Puedes mejorar 😉',
    horrible: 'Mañana será mejor 💚'
  };
  $('#msg').textContent = msg[st];
};

/* Inspírame */
const SUGS = ['Ensalada verde con garbanzos', 'Yogur con avena', 'Pollo al horno', 'Tofu con brócoli'];
$('#insp').onclick = () => {
  $('#sugs').innerHTML = SUGS.sort(() => .5 - Math.random())
    .slice(0, 3)
    .map(x => `<div>${x}</div>`)
    .join('');
};

/* Buscador demo */
const DEMO = [
  { t: 'Ensalada de quinoa', img: 'https://images.unsplash.com/photo-1553234794-0313b1f3a1f4?q=80&w=400' },
  { t: 'Salmón al horno', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400' },
  { t: 'Crema de calabaza', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=400' },
];
$('#bsearch').onclick = () => {
  const q = $('#q').value.toLowerCase();
  $('#res').innerHTML = DEMO.filter(r => r.t.toLowerCase().includes(q) || !q)
    .map(r => `<div class="result"><img src="${r.img}">
        <div><b>${r.t}</b><br>
        <a class="link" target="_blank" href="https://www.google.com/search?q=${encodeURIComponent(r.t+' saludable')}">Ver receta ↗</a></div></div>`)
    .join('');
};

/* Registro diario */
let reg = [];
$('#save').onclick = () => {
  const v = $('#food').value;
  if (!v) return;
  reg.push(v);
  $('#list').innerHTML = reg.map(x => `<div>${x}</div>`).join('');
  $('#food').value = '';
};

/* Retos */
const retos = ['Bebe 8 vasos de agua', 'Come 5 frutas', 'Evita el azúcar 2 días'];
$('#reto').textContent = retos[Math.floor(Math.random() * retos.length)];
$('#done').onclick = () => alert('¡Reto completado!');

/* Recetas médicas */
const MEDICAS = [
  { t: 'Ensalada de aguacate y espinaca', img: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=400', desc: 'Alta en fibra y omega 3, ayuda a reducir colesterol LDL.', ing: 'Espinacas, aguacate, tomate, aceite de oliva.', cond: ['colesterol'] },
  { t: 'Salmón al horno con limón', img: 'https://images.unsplash.com/photo-1514517220036-7230d05a2b43?q=80&w=400', desc: 'Alta en proteínas y baja en carbohidratos simples, ideal para diabéticos.', ing: 'Salmón, limón, brócoli, aceite de oliva.', cond: ['diabetes'] },
  { t: 'Porridge de avena y manzana', img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=400', desc: 'Saciante y con fibra soluble, ideal para controlar el peso.', ing: 'Avena, manzana, leche vegetal, canela.', cond: ['peso'] },
  { t: 'Pollo con verduras al vapor', img: 'https://images.unsplash.com/photo-1604908554117-58b8b41bc3ee?q=80&w=400', desc: 'Baja en sodio y grasas, favorece la presión arterial normal.', ing: 'Pollo, calabacín, zanahoria, aceite de oliva.', cond: ['hipertension'] },
];
function renderMed(f = '') {
  f = f.toLowerCase();
  $('#medlist').innerHTML = MEDICAS.filter(r =>
    r.cond.some(c => c.includes(f)) || r.t.toLowerCase().includes(f) || !f)
    .map(r => `
    <div class="card">
      <img src="${r.img}" style="width:100%;border-radius:14px;max-height:200px;object-fit:cover">
      <h3>${r.t}</h3><p>${r.desc}</p>
      <b>Ingredientes:</b> ${r.ing}<br>
      <small class="link">${r.cond.join(', ')}</small>
    </div>`).join('');
}
$('#medsearch').oninput = e => renderMed(e.target.value);
renderMed();

/* Perfil */
$('#savename').onclick = () => {
  $('#user').textContent = $('#name').value || 'chef';
  alert('Guardado');
};

/* IA demo */
const ideas = [
  { k: 'colesterol', r: 'Podrías probar una ensalada de aguacate y espinacas 🥑, rica en fibra y omega 3.' },
  { k: 'diabetes', r: 'Un salmón al horno con limón 🍋 es ideal: proteínas sin azúcar añadido.' },
  { k: 'peso', r: 'Un porridge de avena y manzana 🍎 te mantiene saciado y ligero.' },
  { k: 'proteina', r: 'Una tortilla de claras con espinacas 🥚 te aportará proteínas limpias.' },
  { k: 'verduras', r: 'Un bowl de garbanzos y verduras 🥗 lleno de color y energía.' }
];

$('#askIA').onclick = () => {
  const p = $('#iaPrompt').value.toLowerCase();
  $('#iaResponse').style.display = 'block';
  $('#iaResponse').textContent = 'Pensando... 🤔';
  setTimeout(() => {
    const found = ideas.find(x => p.includes(x.k));
    $('#iaResponse').textContent = found
      ? found.r
      : 'Prueba con algo como “colesterol”, “diabetes” o “peso” 🥕';
  }, 1000);
};

/* PWA */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('../sw.js'));
}

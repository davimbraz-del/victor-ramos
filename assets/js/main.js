/* =========================================================
   CONFIGURAÇÃO — edite aqui
   ========================================================= */
const CONFIG = {
  // Número do WhatsApp com DDI + DDD, só números
  whatsapp: '5581999217553',
  // Mensagem padrão dos botões
  mensagemPadrao: 'Olá Victor, vim pelo site e quero fazer uma simulação',
};

/* ========================================================= */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg || CONFIG.mensagemPadrao)}`;

// Todos os links de WhatsApp saem do CONFIG (data-wa-msg personaliza a mensagem)
document.querySelectorAll('[data-wa]').forEach((el) => {
  el.setAttribute('href', waLink(el.dataset.waMsg));
});

/* ---------- Header: fundo de vidro ao rolar ---------- */
const header = document.querySelector('.site-header');
const onScroll = () => header.setAttribute('data-scrolled', window.scrollY > 24 ? 'true' : 'false');
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Menu mobile ---------- */
const toggle = document.querySelector('[data-menu-toggle]');
const menu = document.getElementById('menu-mobile');
const setMenu = (open) => {
  menu.setAttribute('data-open', String(open));
  toggle.setAttribute('aria-expanded', String(open));
  toggle.querySelector('.sr-only').textContent = open ? 'Fechar menu' : 'Abrir menu';
  toggle.querySelector('[data-icon-open]').classList.toggle('hidden', open);
  toggle.querySelector('[data-icon-close]').classList.toggle('hidden', !open);
  if (open) header.setAttribute('data-scrolled', 'true'); else onScroll();
};
toggle.addEventListener('click', () => setMenu(menu.getAttribute('data-open') !== 'true'));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.getAttribute('data-open') === 'true') { setMenu(false); toggle.focus(); } });

/* ---------- Revelação ao rolar (uma vez só) ---------- */
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.setAttribute('data-visible', '');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.setAttribute('data-visible', ''));
}

/* ---------- Contadores animados ---------- */
const counters = document.querySelectorAll('[data-count]');
const runCounter = (el) => {
  const target = Number(el.dataset.count);
  if (reduceMotion || !target) { el.textContent = target.toLocaleString('pt-BR'); return; }
  const duration = 1400;
  const start = performance.now();
  const easeOut = (t) => 1 - Math.pow(1 - t, 4);
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * easeOut(p)).toLocaleString('pt-BR');
    if (p < 1) requestAnimationFrame(tick);
  };
  el.textContent = '0';
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      runCounter(entry.target);
      cio.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => cio.observe(el));
}

/* ---------- FAQ: abre/fecha com altura animada ---------- */
document.querySelectorAll('.faq-item').forEach((details) => {
  const summary = details.querySelector('summary');
  const body = details.querySelector('.faq-body');
  summary.addEventListener('click', (e) => {
    if (reduceMotion) return; // comportamento nativo
    e.preventDefault();
    if (details.open) {
      body.style.height = `${body.scrollHeight}px`;
      requestAnimationFrame(() => { body.style.height = '0px'; body.style.opacity = '0'; });
      body.addEventListener('transitionend', function done(ev) {
        if (ev.propertyName !== 'height') return;
        details.open = false; body.style.height = ''; body.style.opacity = '';
        body.removeEventListener('transitionend', done);
      });
    } else {
      details.open = true;
      const h = body.scrollHeight;
      body.style.height = '0px'; body.style.opacity = '0';
      requestAnimationFrame(() => { body.style.height = `${h}px`; body.style.opacity = '1'; });
      body.addEventListener('transitionend', function done(ev) {
        if (ev.propertyName !== 'height') return;
        body.style.height = ''; body.style.opacity = '';
        body.removeEventListener('transitionend', done);
      });
    }
  });
});

/* ---------- Carrossel de depoimentos (scroll nativo + botões) ---------- */
const track = document.querySelector('[data-carousel]');
if (track) {
  const prev = document.querySelector('[data-carousel-prev]');
  const next = document.querySelector('[data-carousel-next]');
  const step = () => {
    const card = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 20;
    return card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
  };
  const update = () => {
    const max = track.scrollWidth - track.clientWidth - 2;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= max;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ---------- Formulário → WhatsApp com mensagem pronta ---------- */
const form = document.querySelector('[data-lead-form]');
if (form) {
  const phone = form.querySelector('#f-whats');
  const errorBox = form.querySelector('[data-form-error]');

  // Máscara simples: (81) 99999-9999
  phone.addEventListener('input', () => {
    const d = phone.value.replace(/\D/g, '').slice(0, 11);
    let out = d;
    if (d.length > 2) out = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 7) out = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
    phone.value = out;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = (data.get('nome') || '').toString().trim();
    const whats = (data.get('whatsapp') || '').toString().trim();
    const renda = data.get('renda');
    const fgts = data.get('fgts');

    const problems = [];
    form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
    if (!nome) { problems.push('seu nome'); form.querySelector('#f-nome').setAttribute('aria-invalid', 'true'); }
    if (whats.replace(/\D/g, '').length < 10) { problems.push('um WhatsApp com DDD'); phone.setAttribute('aria-invalid', 'true'); }
    if (!renda) { problems.push('a faixa de renda'); form.querySelector('#f-renda').setAttribute('aria-invalid', 'true'); }
    if (!fgts) problems.push('se tem FGTS');

    if (problems.length) {
      errorBox.textContent = `Falta preencher: ${problems.join(', ')}.`;
      errorBox.classList.remove('hidden');
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    errorBox.classList.add('hidden');

    const msg = [
      'Olá Victor, vim pelo site e quero fazer uma simulação.',
      '',
      `*Nome:* ${nome}`,
      `*WhatsApp:* ${whats}`,
      `*Renda familiar:* ${renda}`,
      `*Tem FGTS:* ${fgts}`,
    ].join('\n');

    window.open(waLink(msg), '_blank', 'noopener');
  });
}

/* ---------- Ano no rodapé ---------- */
const y = document.querySelector('[data-year]');
if (y) y.textContent = new Date().getFullYear();

/* ---------- Botão flutuante: aparece quando o CTA do hero sai da tela ---------- */
const heroCta = document.querySelector('[data-hero-cta]');
const waFloat = document.querySelector('.wa-float');
if (heroCta && waFloat && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    waFloat.setAttribute('data-hidden', String(entry.isIntersecting));
  }).observe(heroCta);
}

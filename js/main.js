/**
 * DELHUAN DAIRY — main.js  v3
 * Pure Vanilla JS — zero dependencies
 */
'use strict';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const on = (el, ev, fn, o) => el && el.addEventListener(ev, fn, o);

/* ─────────────────────────────────────────
   1. PAGE LOADER
───────────────────────────────────────── */
function initPageLoader() {
  const loader = $('#page-loader');
  if (!loader) return;
  const hide = () => loader.classList.add('hidden');
  window.addEventListener('load', () => setTimeout(hide, 280));
  setTimeout(hide, 2200);
}

/* ─────────────────────────────────────────
   2. ANNOUNCEMENT BANNER
   Collapse with CSS transition → then remove from flow
───────────────────────────────────────── */
function initBanner() {
  const banner  = document.getElementById('announcement-banner');
  const closeBtn = banner && banner.querySelector('.banner-close');
  if (!banner || !closeBtn) return;

  let isDismissed = false;

  const dismiss = () => {
    if (isDismissed || banner.style.display === 'none') return;
    isDismissed = true;
    banner.classList.add('removing');
    setTimeout(() => {
      banner.style.display = 'none';
      sessionStorage.setItem('dd-banner-off', '1');
      const nav = document.getElementById('navbar');
      if (nav) nav.style.top = '0';
    }, 420);
  };

  /* Already dismissed this session */
  if (sessionStorage.getItem('dd-banner-off')) {
    banner.style.display = 'none';
    return;
  }

  closeBtn.addEventListener('click', dismiss);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) dismiss();
  }, { passive: true });
}

/* ─────────────────────────────────────────
   3. NAVBAR
   – Sits below banner when banner visible
   – On scroll > 60px → white bg + dark text
   – Auto-hide on fast scroll-down, show on up
   – Inner pages always have coloured bg
───────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  if (!navbar) return;

  /* ── Banner offset ── */
  function setBannerOffset() {
    const banner = $('#announcement-banner');
    const dismissed = sessionStorage.getItem('dd-banner-off');
    const h = (!dismissed && banner && getComputedStyle(banner).display !== 'none')
              ? banner.offsetHeight : 0;
    navbar.style.top = h + 'px';
  }
  setBannerOffset();
  on(window, 'resize', setBannerOffset, { passive: true });

  /* ── Scroll state ── */
  let lastY = 0, ticking = false;

  function tick() {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 60);

    /* Auto-hide / show on scroll */
    if (y > 380) {
      navbar.style.transform = y > lastY + 6 ? 'translateY(-110%)' : 'translateY(0)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastY = y;
    ticking = false;
  }

  on(window, 'scroll', () => {
    if (!ticking) { requestAnimationFrame(tick); ticking = true; }
  }, { passive: true });
}

/* ─────────────────────────────────────────
   4. MOBILE NAV
───────────────────────────────────────── */
function initMobileNav() {
  const ham     = $('#hamburger');
  const menu    = $('#mobile-menu');
  const overlay = $('#nav-overlay');
  if (!ham || !menu) return;

  const open = () => {
    ham.classList.add('open');
    ham.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    ham.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  on(ham,     'click', () => menu.classList.contains('open') ? close() : open());
  on(overlay, 'click', close);
  $$('.mobile-nav-link').forEach(l => on(l, 'click', close));
  on(document, 'keydown', e => e.key === 'Escape' && close());
}

/* ─────────────────────────────────────────
   5. ACTIVE NAV LINK
───────────────────────────────────────── */
function initActiveLink() {
  $$('.nav-link, .mobile-nav-link').forEach(a => {
    const target = new URL(a.getAttribute('href') || '', document.baseURI).pathname;
    const current = location.pathname;
    const match = target === current ||
      (current === '/' && target.endsWith('/index.html')) ||
      (target.endsWith('/blog/index.html') && current.includes('/blog/'));
    a.classList.toggle('active', match);
  });
}

/* ─────────────────────────────────────────
   6. SCROLL REVEAL
───────────────────────────────────────── */
function initReveal() {
  const els = $$('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });
  els.forEach(e => io.observe(e));
}

/* ─────────────────────────────────────────
   7. COUNTERS
───────────────────────────────────────── */
function initCounters() {
  const els = $$('[data-counter]');
  if (!els.length) return;
  const animate = el => {
    const target = +el.dataset.counter;
    const dur = 1800, step = 16;
    let cur = 0;
    const inc = target / (dur / step);
    const t = setInterval(() => {
      cur = Math.min(cur + inc, target);
      el.textContent = Math.floor(cur).toLocaleString('en-IN');
      if (cur >= target) clearInterval(t);
    }, step);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
    });
  }, { threshold: 0.5 });
  els.forEach(e => io.observe(e));
}

/* ─────────────────────────────────────────
   8. BACK TO TOP
───────────────────────────────────────── */
function initBackToTop() {
  const btn = $('#back-to-top');
  if (!btn) return;
  let t = false;
  on(window, 'scroll', () => {
    if (!t) {
      requestAnimationFrame(() => {
        btn.classList.toggle('visible', window.scrollY > 380);
        t = false;
      }); t = true;
    }
  }, { passive: true });
  on(btn, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─────────────────────────────────────────
   9. LIGHTBOX (gallery-preview + gallery page)
   Supports prev / next / keyboard / swipe
───────────────────────────────────────── */
function initLightbox() {
  const lb   = $('#lightbox');
  const img  = $('#lightbox-img');
  const cls  = $('#lightbox-close');
  const prev = $('#lightbox-prev');
  const next = $('#lightbox-next');
  const cap  = $('#lightbox-caption');
  const cnt  = $('#lightbox-counter');
  if (!lb || !img) return;

  const items = $$('.gallery-item[data-src]');
  let cur = 0;

  const show = idx => {
    cur = ((idx % items.length) + items.length) % items.length;
    const it = items[cur];
    img.style.opacity = '0';
    img.src = it.dataset.src;
    img.alt = it.dataset.alt || '';
    if (cap) cap.textContent = it.dataset.alt || '';
    if (cnt) cnt.textContent = (cur + 1) + ' / ' + items.length;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    img.onload = () => { img.style.opacity = '1'; };
  };
  const hide = () => {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 300);
  };

  items.forEach((it, i) => {
    on(it, 'click', () => show(i));
    on(it, 'keydown', e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), show(i)));
  });
  on(cls,      'click', hide);
  on(prev,     'click', () => show(cur - 1));
  on(next,     'click', () => show(cur + 1));
  on(lb,       'click', e => e.target === lb && hide());
  on(document, 'keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     hide();
    if (e.key === 'ArrowLeft')  show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
  let tx = 0;
  on(lb, 'touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  on(lb, 'touchend',   e => {
    const d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) d > 0 ? show(cur + 1) : show(cur - 1);
  }, { passive: true });
}

/* ─────────────────────────────────────────
   10. PRODUCT FILTER
───────────────────────────────────────── */
function initProductFilter() {
  const btns  = $$('.filter-btn');
  const items = $$('.product-item');
  if (!btns.length || !items.length) return;

  btns.forEach(btn => on(btn, 'click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    items.forEach(it => {
      const show = f === 'all' || it.dataset.category === f;
      if (show) {
        it.style.display = '';
        requestAnimationFrame(() => { it.style.opacity = '1'; it.style.transform = 'scale(1)'; });
      } else {
        it.style.opacity = '0';
        setTimeout(() => { it.style.display = 'none'; }, 280);
      }
    });
  }));
}

/* ─────────────────────────────────────────
   11. TESTIMONIAL SLIDER
   Auto-play, touch-swipe, dot + prev/next
───────────────────────────────────────── */
function initTestiSlider() {
  const track = $('#testi-track');
  if (!track) return;
  const slides = $$('.testi-slide', track);
  if (slides.length < 2) return;

  const dots     = $$('.testi-dot');
  const prevBtn  = $('#testi-prev');
  const nextBtn  = $('#testi-next');
  let cur = 0, auto;

  const visibleSlides = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) return 3;
    if (window.matchMedia('(min-width: 768px)').matches) return 2;
    return 1;
  };

  const maxIndex = () => Math.max(0, slides.length - visibleSlides());

  const goTo = idx => {
    const max = maxIndex();
    const pageCount = max + 1;
    cur = pageCount === 1 ? 0 : ((idx % pageCount) + pageCount) % pageCount;
    track.style.transform = `translateX(-${cur * (100 / visibleSlides())}%)`;
    dots.forEach((d, i) => {
      d.hidden = i >= pageCount;
      d.classList.toggle('active', i === cur);
    });
  };

  const startAuto = () => { auto = setInterval(() => goTo(cur + 1), 4500); };
  const stopAuto  = () => clearInterval(auto);

  on(prevBtn, 'click', () => { stopAuto(); goTo(cur - 1); startAuto(); });
  on(nextBtn, 'click', () => { stopAuto(); goTo(cur + 1); startAuto(); });
  dots.forEach((d, i) => on(d, 'click', () => { stopAuto(); goTo(i); startAuto(); }));

  /* touch */
  let tx = 0;
  on(track, 'touchstart', e => { tx = e.touches[0].clientX; stopAuto(); }, { passive: true });
  on(track, 'touchend',   e => {
    const d = tx - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) d > 0 ? goTo(cur + 1) : goTo(cur - 1);
    startAuto();
  }, { passive: true });

  on(window, 'resize', () => goTo(cur % (maxIndex() + 1)), { passive: true });

  goTo(0);
  startAuto();
}

/* ─────────────────────────────────────────
   12. CONTACT FORM VALIDATION
───────────────────────────────────────── */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  const showErr = (inp, msg) => {
    inp.classList.add('error');
    const e = inp.closest('.form-group')?.querySelector('.form-error');
    if (e) { e.textContent = msg; e.classList.add('show'); }
  };
  const clearErr = inp => {
    inp.classList.remove('error');
    const e = inp.closest('.form-group')?.querySelector('.form-error');
    if (e) e.classList.remove('show');
  };

  const validate = inp => {
    const v = inp.value.trim(), n = inp.name;
    if (inp.required && !v) { showErr(inp, 'Yeh field required hai.'); return false; }
    if (n === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      showErr(inp, 'Valid email enter karein.'); return false;
    }
    if (n === 'phone' && v && !/^[+\d\s\-]{7,15}$/.test(v)) {
      showErr(inp, 'Valid phone number enter karein.'); return false;
    }
    if (n === 'message' && v && v.length < 10) {
      showErr(inp, 'Kam se kam 10 characters likhein.'); return false;
    }
    clearErr(inp); return true;
  };

  $$('.form-input', form).forEach(inp => {
    on(inp, 'input', () => clearErr(inp));
    on(inp, 'blur',  () => validate(inp));
  });

  on(form, 'submit', e => {
    e.preventDefault();
    let ok = true;
    $$('.form-input[required]', form).forEach(inp => { if (!validate(inp)) ok = false; });
    if (!ok) return;

    const btn = form.querySelector('[type=submit]');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Bhej rahe hain...';
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = orig;
      const ok = $('#form-success');
      if (ok) { ok.classList.remove('hidden'); form.reset(); setTimeout(() => ok.classList.add('hidden'), 5000); }
    }, 1400);
  });
}

/* ─────────────────────────────────────────
   13. ACCORDION (FAQ)
───────────────────────────────────────── */
function initAccordion() {
  $$('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    const icon    = item.querySelector('.accordion-icon');
    if (!trigger || !content) return;

    content.style.maxHeight = '0';
    content.style.overflow  = 'hidden';
    content.style.transition = 'max-height .35s ease';

    on(trigger, 'click', () => {
      const open = item.classList.contains('open');
      // close all
      $$('.accordion-item.open').forEach(it => {
        it.classList.remove('open');
        const c = it.querySelector('.accordion-content');
        const i = it.querySelector('.accordion-icon');
        if (c) c.style.maxHeight = '0';
        if (i) i.style.transform = 'rotate(0deg)';
      });
      if (!open) {
        item.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });
}

/* ─────────────────────────────────────────
   14. LAZY LOAD
───────────────────────────────────────── */
function initLazyLoad() {
  const imgs = $$('img[data-src]');
  if (!imgs.length) return;
  if (!('IntersectionObserver' in window)) {
    imgs.forEach(i => { i.src = i.dataset.src; });
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.src = en.target.dataset.src;
        en.target.removeAttribute('data-src');
        io.unobserve(en.target);
      }
    });
  }, { rootMargin: '200px 0px' });
  imgs.forEach(i => io.observe(i));
}

/* ─────────────────────────────────────────
   15. SMOOTH ANCHOR SCROLL
───────────────────────────────────────── */
function initAnchorScroll() {
  $$('a[href^="#"]').forEach(a => {
    on(a, 'click', e => {
      const t = $(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      const nav = $('#navbar');
      const off = (nav ? nav.offsetHeight : 72) + 12;
      window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - off, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────
   16. GALLERY FILTER (gallery.html)
───────────────────────────────────────── */
function initGalleryFilter() {
  const btns  = $$('#gallery-filter .filter-btn');
  const items = $$('#gallery-grid .masonry-item');
  if (!btns.length || !items.length) return;

  btns.forEach(btn => on(btn, 'click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    items.forEach(it => {
      const show = f === 'all' || it.dataset.category === f;
      if (show) {
        it.style.display = 'block';
        requestAnimationFrame(() => { it.style.opacity = '1'; });
      } else {
        it.style.opacity = '0';
        setTimeout(() => { it.style.display = 'none'; }, 260);
      }
    });
  }));
}

/* ─────────────────────────────────────────
   INIT ALL
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPageLoader();
  initBanner();
  initNavbar();
  initMobileNav();
  initActiveLink();
  initReveal();
  initCounters();
  initBackToTop();
  initLightbox();
  initProductFilter();
  initTestiSlider();
  initContactForm();
  initAccordion();
  initLazyLoad();
  initAnchorScroll();
  initGalleryFilter();
});

document.fonts && document.fonts.ready.then(initReveal);

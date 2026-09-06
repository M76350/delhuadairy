/**
 * DELHUAN DAIRY — components.js
 * Navbar + Footer ko dynamically inject karta hai sabhi pages mein.
 * Isse har page pe same navbar/footer guaranteed rahega.
 */
(function () {
  'use strict';

  /* ─── Active page detect ──────────────────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';
  const currentPath = location.pathname.replace(/\\/g, '/');

  const navLinks = [
    { href: 'index.html',    label: 'Home',              icon: 'fa-home' },
    { href: 'about.html',    label: 'Hamare Baare Mein', icon: 'fa-leaf' },
    { href: 'products.html', label: 'Utpaad',            icon: 'fa-shopping-basket' },
    { href: 'gallery.html',  label: 'Gallery',           icon: 'fa-images' },
    { href: 'blog/index.html', label: 'Dairy Blog',        icon: 'fa-newspaper' },
    { href: 'contact.html',  label: 'Sampark',           icon: 'fa-envelope' },
  ];

  function isActive(href) {
    return href === page || (page === '' && href === 'index.html') ||
      (href === 'blog/index.html' && currentPath.includes('/blog/'));
  }

  /* ─── Build Navbar HTML ──────────────────────────────── */
  function buildNavbar() {
    const desktopLinks = navLinks.map(l =>
      `<a href="${l.href}" class="nav-link${isActive(l.href) ? ' active' : ''}">${l.label}</a>`
    ).join('');

    const mobileLinks = navLinks.map(l =>
      `<a href="${l.href}" class="mobile-nav-link${isActive(l.href) ? ' active' : ''}">
        <i class="fas ${l.icon}" aria-hidden="true"></i>${l.label}
       </a>`
    ).join('');

    return `
<div id="announcement-banner" role="banner">
  <span>🎉 Nayi seva — Ab ghar par fresh doodh delivery uplabdh hai! &nbsp;
    <a href="contact.html">Abhi order karein →</a>
  </span>
  <button class="banner-close" aria-label="Banner band karein" type="button">✕</button>
</div>

<nav id="navbar" aria-label="Main Navigation">
  <div class="nav-inner">

    <!-- Logo -->
    <a href="index.html" class="nav-logo" aria-label="Delhuan Dairy Home">
      <div class="nav-logo-icon" aria-hidden="true">🐄</div>
      <div>
        <div class="nav-logo-name">Delhuan Dairy</div>
        <div class="nav-logo-sub">Pure &amp; Fresh</div>
      </div>
    </a>

    <!-- Desktop Links -->
    <div class="nav-links" role="menubar" aria-label="Main menu">
      ${desktopLinks}
    </div>

    <!-- Right side -->
    <div class="nav-right">
      <a href="contact.html" class="btn btn-secondary btn-sm nav-cta-btn" aria-label="Sampark Karein">
        <i class="fas fa-phone-alt" aria-hidden="true"></i>
        <span>Sampark Karein</span>
      </a>
      <button id="hamburger" class="hamburger"
              aria-label="Menu toggle" aria-expanded="false" aria-controls="mobile-menu"
              type="button">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div><!-- /.nav-inner -->

  <!-- Mobile Menu -->
  <div id="mobile-menu" role="navigation" aria-label="Mobile Navigation" aria-hidden="true">
    <div class="mobile-menu-inner">
      ${mobileLinks}
      <a href="contact.html" class="btn btn-primary mobile-order-btn">
        <i class="fas fa-phone-alt" aria-hidden="true"></i> Abhi Order Karein
      </a>
    </div>
  </div>
</nav>

<div id="nav-overlay" aria-hidden="true"></div>`;
  }

  /* ─── Build Footer HTML ──────────────────────────────── */
  function buildFooter() {
    const quickLinks = navLinks.map(l =>
      `<li><a href="${l.href}" class="footer-link">
         <i class="fas fa-chevron-right" aria-hidden="true"></i>${l.label}
       </a></li>`
    ).join('');

    return `
<footer class="site-footer" role="contentinfo">
  <div class="footer-wave" aria-hidden="true"></div>
  <div class="footer-body">
    <div class="container-custom">
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <a href="index.html" class="footer-logo-link" aria-label="Delhuan Dairy Home">
            <div class="footer-logo-icon">
              <img src="assets/logo/Delhua-dairy-logo-image.webp" alt="Delhuan Dairy logo" />
            </div>
            <div>
              <div class="footer-logo-name">Delhuan Dairy</div>
              <div class="footer-logo-sub">Pure &amp; Fresh</div>
            </div>
          </a>
          <p class="footer-tagline">
            Taaza aur shuddh dairy utpaad seedha farm se aapke ghar tak.
            Manish Kumar dwara sanchalit, Delhuan, Bihar.
          </p>
          <div class="footer-signature-wrap">
            <img src="signaturemanish.jpeg" alt="Manish Kumar ki hastakshar" class="footer-signature" />
            <span class="footer-sig-name">Manish Kumar — Sansthapak</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-links-list">${quickLinks}</ul>
        </div>

        <!-- Products -->
        <div>
          <h3 class="footer-heading">Hamare Utpaad</h3>
          <ul class="footer-links-list">
            <li><a href="products.html" class="footer-link"><i class="fas fa-chevron-right" aria-hidden="true"></i>Taaza Doodh — ₹60/L</a></li>
            <li><a href="products.html" class="footer-link"><i class="fas fa-chevron-right" aria-hidden="true"></i>Shuddh Desi Ghee — ₹700/kg</a></li>
            <li><a href="products.html" class="footer-link"><i class="fas fa-chevron-right" aria-hidden="true"></i>Taaza Paneer — ₹320/kg</a></li>
            <li><a href="products.html" class="footer-link"><i class="fas fa-chevron-right" aria-hidden="true"></i>Mishri Dahi — ₹80/kg</a></li>
            <li><a href="products.html" class="footer-link"><i class="fas fa-chevron-right" aria-hidden="true"></i>Makhan — ₹450/kg</a></li>
            <li><a href="products.html" class="footer-link"><i class="fas fa-chevron-right" aria-hidden="true"></i>Chach — ₹30/L</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="footer-heading">Sampark</h3>
          <div class="footer-contact-list">
            <div class="footer-contact-row">
              <div class="footer-contact-icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></div>
              <span class="footer-contact-text">Delhuan, Sitamarhi District,<br>Bihar — 843302</span>
            </div>
            <div class="footer-contact-row">
              <div class="footer-contact-icon"><i class="fas fa-phone" aria-hidden="true"></i></div>
              <a href="tel:[BUSINESS_PHONE]" class="footer-contact-text footer-tel">[BUSINESS PHONE]</a>
            </div>
            <div class="footer-contact-row">
              <div class="footer-contact-icon"><i class="fas fa-envelope" aria-hidden="true"></i></div>
              <a href="mailto:[BUSINESS_EMAIL]" class="footer-contact-text footer-tel">[BUSINESS EMAIL]</a>
            </div>
            <div class="footer-contact-row">
              <div class="footer-contact-icon"><i class="fas fa-clock" aria-hidden="true"></i></div>
              <span class="footer-contact-text">Delivery: Subah 5AM – 7AM</span>
            </div>
          </div>
          <div class="footer-social" role="list" aria-label="Social Media Links">
            <a href="#" class="social-icon" aria-label="Facebook" role="listitem"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram" role="listitem"><i class="fab fa-instagram" aria-hidden="true"></i></a>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" class="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" role="listitem"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube" role="listitem"><i class="fab fa-youtube" aria-hidden="true"></i></a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Footer Bottom -->
  <div class="footer-bottom">
    <div class="container-custom">
      <div class="footer-bottom-inner">
        <span>© 2024 Delhuan Dairy. Sabhee adhikaar surakshit. Manish Kumar dwara sanchalit.</span>
        <div class="footer-bottom-links">
          <a href="privacy-policy.html">Privacy Policy</a>
          <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<!-- WhatsApp Float -->
<a href="https://wa.me/[WHATSAPP_NUMBER]" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp par sampark karein">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a6.508 6.508 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
<button id="back-to-top" aria-label="Upar wapas jaayein" type="button">
  <i class="fas fa-chevron-up" aria-hidden="true"></i>
</button>`;
  }

  /* ─── Inject into page ───────────────────────────────── */
  function inject() {
    /* Navbar — inject before first child of body */
    const navPlaceholder = document.getElementById('site-navbar');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = buildNavbar();
    }

    /* Footer — inject into #site-footer placeholder */
    const footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = buildFooter();
    }
  }

  /* Run immediately if DOM ready, else on DOMContentLoaded */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

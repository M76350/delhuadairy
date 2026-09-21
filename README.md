# 🐄 Delhuan Dairy — Website

**Owner:** Anil Kumar Singh
**Location:** Delhuan Village, Chitaon Panchayat, Indour Post Office, Dinara Thana, Kochas Prakhand, Rohtas, Bihar — 802213, India  
**Tech Stack:** HTML5 · Tailwind CSS (Offline) · Vanilla JavaScript · CSS Animations  

---

## 📁 Project Structure

```
delhuandairy/
│
├── index.html          ← Homepage
├── about.html          ← About Us / Anil Kumar Singh Story
├── products.html       ← All Dairy Products (with filter)
├── gallery.html        ← Farm Photo Gallery (masonry + lightbox)
├── contact.html        ← Contact Form + Map + FAQ
├── blog/
│   ├── index.html      ← Blog listing with 30 article links
│   └── posts/          ← 30 SEO-friendly dairy articles
│
├── assets/
│   ├── images/         ← Custom images (add your farm photos here)
│   ├── icons/          ← Custom SVG icons
│   ├── logo/           ← Brand logo files
│   └── fonts/          ← Local font files (optional)
│
├── css/
│   ├── tailwind.min.css  ← Tailwind CSS v3.4 (Offline, ~451KB)
│   ├── custom.css        ← Shared styles, animations, CSS variables
│   └── blog/blog.css     ← Blog listing and article styles
│
├── js/
│   └── main.js           ← All JS: navbar, animations, form, lightbox, etc.
│
├── manishimage.jpeg    ← Owner photo (Anil Kumar Singh)
├── signature.jpeg      ← Signature image
├── signaturemanish.jpeg← Anil Kumar Singh signature
└── README.md           ← This file
```

---

## 🚀 Setup & Usage

Yeh ek **pure static website** hai — koi build step, koi server nahi chahiye.

### Seedha Browser Mein Kholein:
```
index.html → double-click karein → browser mein khul jayega
```

### Local Server (recommended):
```bash
# Python 3 se:
python -m http.server 8080

# Node.js se (npx):
npx serve .

# VS Code Live Server Extension:
index.html → Right Click → "Open with Live Server"
```

Phir browser mein: `http://localhost:8080`

---

## ⚙️ Customization — Important Placeholders

Website mein kuch **placeholder values** hain jo aapko replace karni hain:

### 1. Contact Information
Har HTML file mein ye replace karein:

| Placeholder | Replace With |
|---|---|
| `[BUSINESS PHONE]` | Jaise: `+91 98765 43210` |
| `[BUSINESS_PHONE]` | Same phone (href ke liye) |
| `[BUSINESS EMAIL]` | Jaise: `manish@delhuandairy.com` |
| `[WHATSAPP_NUMBER]` | Country code sahit, jaise: `919876543210` |

**Find & Replace** karne ka aasaan tarika:
- VS Code mein: `Ctrl + Shift + H` → Find All → Replace All

---

### 2. Google Maps Embed
`contact.html` mein:
```html
src="[GOOGLE_MAP_EMBED_URL]"
```
**Steps:**
1. Google Maps par apna address search karein
2. Share → Embed a map → HTML copy karein
3. `src="..."` wala URL copy karke paste karein

---

### 3. WhatsApp Number
```html
href="https://wa.me/[WHATSAPP_NUMBER]"
```
Example: `https://wa.me/919876543210` (India ke liye 91 prefix)

---

### 4. Social Media Links
Footer mein `href="#"` wale social links replace karein:
```html
<!-- Facebook -->
<a href="https://facebook.com/delhuandairy" ...>

<!-- Instagram -->
<a href="https://instagram.com/delhuandairy" ...>

<!-- YouTube -->
<a href="https://youtube.com/@delhuandairy" ...>
```

---

## 🖼️ Apni Farm Photos Add Karna

1. Apni photos `assets/images/` folder mein copy karein
2. HTML files mein Unsplash URLs ko apni photo paths se replace karein:

```html
<!-- Pehle (Unsplash placeholder) -->
<img src="https://images.unsplash.com/photo-xxx" ... />

<!-- Baad mein (apni photo) -->
<img src="assets/images/farm-photo-1.jpg" ... />
```

**Recommended image sizes:**
- Hero background: 1920×1080 px, JPG, ~150–300KB
- Product cards: 800×600 px, JPG, ~80–120KB
- Gallery: 800×600 px ya 600×800 px, JPG, ~80–150KB
- Owner photo: 600×800 px, JPG, ~50–100KB

---

## 🎨 Design System

### Colors (CSS Variables in `css/custom.css`)
```css
--color-primary:       #1a5c38   /* Deep Green */
--color-primary-dark:  #0f3d25
--color-primary-light: #2d8653
--color-secondary:     #f5a623   /* Amber/Gold */
--color-secondary-dark:#d4891a
--color-cream:         #fdf8f0   /* Background */
--color-brown:         #6b4226
```

### Typography
```css
--font-heading: 'Playfair Display'  /* Headings, Titles */
--font-body:    'Inter'              /* Body text */
--font-accent:  'Poppins'           /* Buttons, Labels, Nav */
```

### Fonts
Website Google Fonts use karti hai. Offline use ke liye:
1. [Google Fonts](https://fonts.google.com/) se download karein
2. `assets/fonts/` mein rakhen
3. `custom.css` mein `@import` URL ko local path se replace karein

---

## 📱 Pages Overview

| Page | File | Key Sections |
|---|---|---|
| Home | `index.html` | Hero, Stats, About Preview, Products, Features, Process, Testimonials, Gallery Preview, CTA |
| About | `about.html` | Owner Story (Anil Kumar Singh), Mission/Vision, Timeline 2009–2024, Farm Details |
| Products | `products.html` | Filter Bar, 6 Products (Doodh/Ghee/Paneer/Dahi/Makhan/Chach), Comparison Table |
| Gallery | `gallery.html` | Masonry Grid, Category Filter, Lightbox (prev/next/keyboard/swipe), Farm Story |
| Contact | `contact.html` | Split Layout, Contact Form (validated), Map, FAQ Accordion |

---

## ✨ Features

- **Offline Tailwind CSS** — No CDN dependency for styles
- **Responsive** — Mobile 320px se Desktop 1536px+ tak
- **Page Loader** — Smooth loading animation
- **Navbar** — Scroll se change, auto-hide on scroll down
- **Mobile Menu** — Smooth hamburger animation
- **Scroll Reveal** — IntersectionObserver based (no jQuery)
- **Counter Animation** — Stats numbers count up on scroll
- **Product Filter** — Category wise filter with smooth animation
- **Gallery Lightbox** — Prev/Next, keyboard arrows, touch swipe
- **Contact Form** — Client-side validation, success message
- **FAQ Accordion** — Smooth expand/collapse
- **WhatsApp Float** — Pulse animation, always visible
- **Back to Top** — Smooth scroll, shows on scroll
- **Lazy Loading** — Images load on demand
- **Card Tilt** — Subtle 3D hover on product cards
- **Announcement Banner** — Dismissible, session storage

---

## 🔧 JavaScript Modules (`js/main.js`)

| Module | Kya Karta Hai |
|---|---|
| `initPageLoader` | Page load hone par loader hide karta hai |
| `initNavbar` | Scroll par navbar scroll/hide behavior |
| `initMobileNav` | Hamburger menu open/close |
| `initActiveNavLink` | Current page ka nav link highlight |
| `initScrollReveal` | IntersectionObserver se fade-in animations |
| `initCounters` | Stats numbers ki count-up animation |
| `initBackToTop` | Back to top button show/hide aur scroll |
| `initSmoothScroll` | Anchor links par smooth scroll |
| `initLightbox` | Gallery lightbox (basic) |
| `initProductFilter` | Products/gallery category filter |
| `initContactForm` | Form validation aur submit simulation |
| `initTypewriter` | Typewriter text effect (optional) |
| `initTestimonialSlider` | Auto-play testimonial slider |
| `initLazyLoad` | `data-src` images ki lazy loading |
| `initCardTilt` | Product cards par 3D tilt effect |
| `initAccordion` | FAQ accordion expand/collapse |
| `initBanner` | Announcement banner dismiss |
| `initCopyContacts` | Phone/email copy to clipboard |

---

## 🌐 Deployment

### Netlify (Recommended — Free):
1. [netlify.com](https://netlify.com) par account banayein
2. "Add new site" → "Deploy manually"
3. Poora `delhuandairy` folder drag & drop karein
4. Deploy! Custom domain bhi free mein set ho jaata hai.

### GitHub Pages (Free):
1. GitHub par repository banayein
2. Files upload karein
3. Settings → Pages → Branch: main → Save

---

## 📞 Support

Koi issue ho toh:
- **WhatsApp:** [WHATSAPP_NUMBER]
- **Email:** [BUSINESS EMAIL]

---

*Delhuan Dairy — Taaza Doodh, Shuddh Jeewan* 🥛  
*Anil Kumar Singh — Sansthapak*

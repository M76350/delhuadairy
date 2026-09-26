(function () {
  'use strict';

  const images = {
    milk: 'assets/images/blog/milk.jpg',
    cow: 'assets/images/farm/cow.jpg',
    calf: 'assets/images/blog/calf.jpg',
    paneer: 'assets/images/paneer.webp',
    ghee: 'assets/images/blog/ghee.jpg',
    curd: 'assets/images/blog/curd.jpg',
    dairy: 'assets/images/blog/dairy.jpg'
  };

  document.querySelectorAll('.blog-card').forEach(card => {
    const link = card.querySelector('.blog-card-link');
    if (!link) return;
    const slug = link.getAttribute('href') || '';
    const key = Object.keys(images).find(word => slug.includes(word)) || 'dairy';
    const image = document.createElement('img');
    image.className = 'blog-card-image';
    image.src = images[key];
    image.alt = card.querySelector('h2')?.textContent.trim() || 'Delhua Dairy guide';
    image.loading = 'lazy';
    image.onerror = () => { image.style.display = 'none'; };
    card.prepend(image);
  });
})();

(function () {
  'use strict';

  const images = {
    milk: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80',
    cow: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80',
    calf: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80',
    paneer: 'https://images.unsplash.com/photo-1645696301019-35adcc18fc9e?w=800&q=80',
    ghee: 'https://images.unsplash.com/photo-1631206753348-db44968fd440?w=800&q=80',
    curd: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    dairy: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80'
  };

  document.querySelectorAll('.blog-card').forEach(card => {
    const link = card.querySelector('.blog-card-link');
    if (!link) return;
    const slug = link.getAttribute('href') || '';
    const key = Object.keys(images).find(word => slug.includes(word)) || 'dairy';
    const image = document.createElement('img');
    image.className = 'blog-card-image';
    image.src = images[key];
    image.alt = card.querySelector('h2')?.textContent.trim() || 'Delhuan Dairy guide';
    image.loading = 'lazy';
    image.onerror = () => { image.style.display = 'none'; };
    card.prepend(image);
  });
})();

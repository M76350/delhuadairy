/* Shared presentation for the static dairy articles. */
(function () {
  'use strict';

  const imageByKeyword = {
    milk: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200&q=82',
    cow: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=82',
    calf: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1200&q=82',
    paneer: 'https://images.unsplash.com/photo-1645696301019-35adcc18fc9e?w=1200&q=82',
    ghee: 'https://images.unsplash.com/photo-1631206753348-db44968fd440?w=1200&q=82',
    curd: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200&q=82',
    dairy: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=82',
    fodder: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&q=82'
  };

  function selectImage(slug) {
    const key = Object.keys(imageByKeyword).find(word => slug.includes(word));
    return imageByKeyword[key || 'dairy'];
  }

  function enhance() {
    const header = document.querySelector('.article-header');
    const body = document.querySelector('.article-body');
    if (!header || !body) return;

    const slug = location.pathname.split('/').pop().replace('.html', '');
    const title = header.querySelector('h1')?.textContent.trim() || 'Delhuan Dairy article';
    const figure = document.createElement('figure');
    figure.className = 'article-featured';
    figure.innerHTML = `<img src="${selectImage(slug)}" alt="${title}" loading="eager"><figcaption>Delhuan Dairy knowledge guide</figcaption>`;
    header.after(figure);

    const back = body.querySelector('.article-back');
    if (back) {
      back.innerHTML = '<i class="fas fa-arrow-left" aria-hidden="true"></i> Dairy Blog par wapas';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }
})();

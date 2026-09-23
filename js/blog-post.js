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

  const postSlugs = [
    'blog-a2-milk-guide', 'blog-calf-care-first-90-days', 'blog-choose-local-dairy-farm-bihar',
    'blog-dairy-cow-balanced-feed', 'blog-dairy-cow-water-management', 'blog-dairy-farm-project-planning',
    'blog-dairy-farm-record-keeping', 'blog-dairy-farm-technology', 'blog-dairy-shed-design-ventilation',
    'blog-dairy-waste-compost-management', 'blog-delhuan-dairy-farm-to-home', 'blog-desi-cow-care-routine',
    'blog-fresh-cow-milk-benefits-storage', 'blog-fresh-paneer-quality-guide', 'blog-green-fodder-planning',
    'blog-healthy-cow-signs-checklist', 'blog-home-milk-delivery-best-practices', 'blog-lactometer-reading-guide',
    'blog-milk-chilling-cold-chain', 'blog-milk-collection-centre-setup', 'blog-milk-nutrition-label-guide',
    'blog-milk-pricing-formula', 'blog-milk-quality-checklist', 'blog-milk-testing-fat-snf-purity',
    'blog-milking-hygiene-rules', 'blog-organic-dairy-farming-guide', 'blog-pure-desi-ghee-process',
    'blog-pure-milk-identification-tests', 'blog-small-dairy-farm-business-plan', 'blog-thick-curd-making-tips'
  ];

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

    const currentIndex = postSlugs.indexOf(slug);
    if (currentIndex === -1) return;
    const navigation = document.createElement('nav');
    navigation.className = 'article-navigation';
    navigation.setAttribute('aria-label', 'Blog article navigation');
    navigation.innerHTML = `
      ${currentIndex > 0
        ? `<a class="article-nav-button" href="blog/posts/${postSlugs[currentIndex - 1]}.html"><i class="fas fa-arrow-left" aria-hidden="true"></i><span>Previous blog</span></a>`
        : '<span class="article-nav-button article-nav-disabled"><i class="fas fa-arrow-left" aria-hidden="true"></i><span>Previous blog</span></span>'}
      <a class="article-nav-home" href="blog/index.html"><i class="fas fa-th-large" aria-hidden="true"></i><span>All blogs</span></a>
      ${currentIndex < postSlugs.length - 1
        ? `<a class="article-nav-button article-nav-next" href="blog/posts/${postSlugs[currentIndex + 1]}.html"><span>Next blog</span><i class="fas fa-arrow-right" aria-hidden="true"></i></a>`
        : '<span class="article-nav-button article-nav-disabled"><span>Next blog</span><i class="fas fa-arrow-right" aria-hidden="true"></i></span>'}`;
    body.append(navigation);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }
})();

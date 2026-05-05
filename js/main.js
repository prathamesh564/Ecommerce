// Utility to manage cart in local storage
const Cart = {
  getItems: () => {
    const items = localStorage.getItem('taskflow_cart');
    return items ? JSON.parse(items) : [];
  },
  addItem: (product) => {
    const items = Cart.getItems();
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('taskflow_cart', JSON.stringify(items));
    updateCartCount();
  },
  removeItem: (productId) => {
    let items = Cart.getItems();
    items = items.filter(i => i.id !== productId);
    localStorage.setItem('taskflow_cart', JSON.stringify(items));
    updateCartCount();
  },
  updateQuantity: (productId, quantity) => {
    const items = Cart.getItems();
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.quantity = parseInt(quantity);
      if (existing.quantity <= 0) {
        Cart.removeItem(productId);
        return;
      }
      localStorage.setItem('taskflow_cart', JSON.stringify(items));
    }
    updateCartCount();
  },
  getTotal: () => {
    const items = Cart.getItems();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
};

function updateCartCount() {
  const items = Cart.getItems();
  const count = items.reduce((total, item) => total + item.quantity, 0);
  const countElements = document.querySelectorAll('.cart-count');
  countElements.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'block' : 'none';
  });
}

// Scroll to top
function initScrollToTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Hero Slider
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (slides.length === 0) return;

  let currentSlide = 0;
  
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });

  setInterval(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  }, 5000);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  initScrollToTop();
  initHeroSlider();
});

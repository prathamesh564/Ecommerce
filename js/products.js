const products = [
  {
    id: 1,
    name: 'AeroPods Pro',
    category: 'audio',
    price: 299.00,
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/Artboard2_111323f8-97d1-4b1f-a8f1-d1cb7a8c8538_1300x.jpg?v=1716614425',
    description: 'Immersive sound with active noise cancellation. Floating design for zero-gravity comfort.',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Nova Watch Series X',
    category: 'wearables',
    price: 499.00,
    image: 'https://www.ixbt.com/img/x780/n1/news/2021/0/1/huawei-watch-gt-2e-featured-6_large.jpg',
    description: 'Next-generation smartwatch with holographic display and seamless health tracking.',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Quantum Speaker',
    category: 'audio',
    price: 199.00,
    image: 'https://tse1.mm.bing.net/th/id/OIP.o_odevzRVniDWiE25RzoaQHaEL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Room-filling sound from a speaker that defies gravity. Perfect for any modern space.',
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: 'Stellar VR Headset',
    category: 'gaming',
    price: 699.00,
    image: 'https://tse2.mm.bing.net/th/id/OIP.H7wJ2kMQqSvTIHWZSnXN_AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Step into a new reality with ultra-high resolution and weightless ergonomics.',
    rating: 4.6,
    reviews: 42
  },
  {
    id: 5,
    name: 'Zenith Smart Ring',
    category: 'wearables',
    price: 149.00,
    image: 'https://iotmktg.com/wp-content/uploads/2024/05/DALL%C2%B7E-2024-05-01-13.26.15-A-photorealistic-landscape-oriented-image-of-a-futuristic-smart-ring.-The-ring-is-sleek-and-metallic-with-a-minimalist-design.-It-features-a-small-.webp',
    description: 'Track your sleep and activity subtly with this titanium smart ring.',
    rating: 4.5,
    reviews: 210
  },
  {
    id: 6,
    name: 'AeroPods Lite',
    category: 'audio',
    price: 129.00,
    image: 'https://tse2.mm.bing.net/th/id/OIP.s5KMWsD25XKIBm_HSeAitQHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Everyday wireless earbuds with crystal clear sound and long battery life.',
    rating: 4.3,
    reviews: 340
  }
];

// Utility functions for products
const ProductAPI = {
  getAll: () => products,
  getById: (id) => products.find(p => p.id === parseInt(id)),
  getByCategory: (cat) => products.filter(p => p.category === cat),
  search: (query) => {
    const q = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }
};

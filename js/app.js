/**
 * NEXUS MOBILE - E-COMMERCE APPLICATION LOGIC
 * Pure Vanilla JavaScript (ES6+)
 */

const PRODUCTS = [
  {
    id: 'nx-ip16pm',
    brand: 'Apple',
    category: 'iphone',
    name: 'iPhone 16 Pro Max 256GB Titan Sa Mạc',
    price: 33990000,
    oldPrice: 34990000,
    discount: '-3%',
    isFlashSale: true,
    rating: 4.9,
    reviews: 342,
    specs: ['A18 Pro 3nm', '6.9" 120Hz', '256GB'],
    fullSpecs: {
      'Màn hình': 'LTPO Super Retina XDR OLED 6.9"',
      'Vi xử lý': 'Apple A18 Pro (3 nm)',
      'Camera sau': '48MP Chính + 48MP Góc rộng + 12MP Tele 5x',
      'Pin & Sạc': '4685 mAh, Sạc nhanh MagSafe 25W',
      'Chất liệu': 'Khung Titan cấp độ 5, Ceramic Shield'
    },
    desc: 'Siêu phẩm flagship đỉnh cao từ Apple với khung viền Titan siêu nhẹ, nút điều khiển Camera Control hoàn toàn mới và chip A18 Pro mang lại hiệu năng đồ họa vượt trội.',
    image: 'assets/phone-iphone16pro.svg'
  },
  {
    id: 'nx-s25u',
    brand: 'Samsung',
    category: 'samsung',
    name: 'Samsung Galaxy S25 Ultra 5G 12GB/512GB',
    price: 31490000,
    oldPrice: 35990000,
    discount: '-13%',
    isFlashSale: true,
    rating: 4.9,
    reviews: 218,
    specs: ['Snapdragon 8 Elite', 'Galaxy AI', '512GB'],
    fullSpecs: {
      'Màn hình': 'Dynamic LTPO AMOLED 2X 6.8" QHD+',
      'Vi xử lý': 'Snapdragon 8 Elite for Galaxy',
      'Camera sau': '200MP Chính + 50MP Periscope + 50MP Góc siêu rộng',
      'Pin & Sạc': '5000 mAh, Sạc siêu nhanh 45W',
      'Bút cảm ứng': 'Tích hợp S-Pen độ trễ 2.8ms'
    },
    desc: 'Quyền năng Galaxy AI thế hệ mới kết hợp cùng cảm biến 200MP sắc nét và khung viền Titanium bo cong công thái học hoàn hảo.',
    image: 'assets/phone-s25ultra.svg'
  },
  {
    id: 'nx-xm15u',
    brand: 'Xiaomi',
    category: 'xiaomi',
    name: 'Xiaomi 15 Ultra 5G 16GB/512GB Leica Edition',
    price: 27990000,
    oldPrice: 31990000,
    discount: '-12%',
    isFlashSale: true,
    rating: 4.8,
    reviews: 129,
    specs: ['Leica Summilux', '16GB RAM', '90W HyperCharge'],
    fullSpecs: {
      'Màn hình': 'LTPO AMOLED 6.73" 3200 nits',
      'Vi xử lý': 'Snapdragon 8 Elite (3 nm)',
      'Camera sau': 'Cảm biến Sony LYT-900 1 inch + Tele 200MP Leica',
      'Pin & Sạc': '5500 mAh, Sạc có dây 90W / Không dây 80W',
      'Kháng nước': 'Chuẩn IP68/IP69 cao cấp'
    },
    desc: 'Đỉnh cao nhiếp ảnh di động hợp tác cùng Leica với hệ thống ống kính Summilux thế hệ mới và cảm biến 1 inch thu sáng vượt trội.',
    image: 'assets/phone-xiaomi15.svg'
  },
  {
    id: 'nx-ip16p',
    brand: 'Apple',
    category: 'iphone',
    name: 'iPhone 16 Pro 128GB Titan Tự Nhiên',
    price: 27490000,
    oldPrice: 28990000,
    discount: '-5%',
    isFlashSale: true,
    rating: 4.9,
    reviews: 194,
    specs: ['A18 Pro', '6.3" 120Hz', 'Camera 5x'],
    fullSpecs: {
      'Màn hình': 'Super Retina XDR OLED 6.3" ProMotion',
      'Vi xử lý': 'Apple A18 Pro 6 nhân GPU',
      'Camera sau': '48MP Fusion + 48MP Ultra Wide + 12MP 5x',
      'Pin & Sạc': '3582 mAh, Sạc nhanh USB-C',
      'Hệ điều hành': 'iOS 18 tích hợp Apple Intelligence'
    },
    desc: 'Kích thước 6.3 inch vừa vặn trong lòng bàn tay nhưng mang trọn vẹn sức mạnh của dòng Pro Max với ống kính zoom quang học 5x.',
    image: 'assets/phone-iphone16pro.svg'
  },
  {
    id: 'nx-zfold6',
    brand: 'Samsung',
    category: 'samsung',
    name: 'Samsung Galaxy Z Fold6 5G 12GB/256GB Xám Metal',
    price: 36990000,
    oldPrice: 41990000,
    discount: '-12%',
    isFlashSale: false,
    rating: 4.8,
    reviews: 97,
    specs: ['Màn gập 7.6"', '12GB RAM', 'Bản lề Flex'],
    fullSpecs: {
      'Màn hình': 'Chính 7.6" QXGA+ + Phụ 6.3" Dynamic AMOLED 2X',
      'Vi xử lý': 'Snapdragon 8 Gen 3 for Galaxy',
      'Camera sau': '50MP OIS + 12MP Ultra Wide + 10MP Tele 3x',
      'Pin & Sạc': '4400 mAh, Sạc nhanh 25W',
      'Trọng lượng': 'Siêu nhẹ chỉ 239g'
    },
    desc: 'Tuyệt tác màn hình gập mở ra không gian làm việc đa nhiệm như máy tính bảng kết hợp tính năng Phiên dịch viên AI trực tiếp.',
    image: 'assets/phone-zfold6.svg'
  },
  {
    id: 'nx-findx8',
    brand: 'OPPO',
    category: 'oppo',
    name: 'OPPO Find X8 Pro 5G 16GB/512GB Trắng Ngọc Trai',
    price: 25990000,
    oldPrice: 28990000,
    discount: '-10%',
    isFlashSale: false,
    rating: 4.7,
    reviews: 84,
    specs: ['Dimensity 9400', 'Hasselblad', 'Pin 5910mAh'],
    fullSpecs: {
      'Màn hình': 'AMOLED 6.78" 120Hz Dolby Vision',
      'Vi xử lý': 'MediaTek Dimensity 9400 (3 nm)',
      'Camera sau': 'Hệ thống 4 Camera 50MP tinh chỉnh bởi Hasselblad',
      'Pin & Sạc': 'Silicon-Carbon 5910 mAh, SuperVOOC 80W',
      'Thiết kế': 'Kính cường lực Gorilla Glass Victus 2'
    },
    desc: 'Trang bị hệ thống Kính tiềm vọng kép độc quyền kết hợp thuật toán chân dung Hasselblad và viên pin Silicon-Carbon dung lượng khủng.',
    image: 'assets/phone-oppofindx8.svg'
  },
  {
    id: 'nx-ip16',
    brand: 'Apple',
    category: 'iphone',
    name: 'iPhone 16 128GB Xanh Lưu Ly Chính Hãng VN/A',
    price: 21490000,
    oldPrice: 22990000,
    discount: '-7%',
    isFlashSale: false,
    rating: 4.8,
    reviews: 276,
    specs: ['Chip A18', 'Action Button', '128GB'],
    fullSpecs: {
      'Màn hình': 'Super Retina XDR OLED 6.1"',
      'Vi xử lý': 'Apple A18 (3 nm)',
      'Camera sau': '48MP Fusion 2x Telephoto + 12MP Ultra Wide',
      'Pin & Sạc': '3561 mAh, Sạc nhanh 20W+',
      'Tính năng mới': 'Nút Tác Vụ (Action Button) & Camera Control'
    },
    desc: 'Sắc màu trẻ trung năng động, hiệu năng nhảy vọt hai thế hệ với chip A18 cùng thời lượng pin bền bỉ suốt ngày dài.',
    image: 'assets/phone-iphone16.svg'
  },
  {
    id: 'nx-rog9',
    brand: 'ASUS',
    category: 'gaming',
    name: 'ASUS ROG Phone 9 Pro 5G 16GB/512GB Đen Phantom',
    price: 26490000,
    oldPrice: 28990000,
    discount: '-9%',
    isFlashSale: false,
    rating: 4.9,
    reviews: 63,
    specs: ['Màn 185Hz', 'AirTrigger', 'Pin 5800mAh'],
    fullSpecs: {
      'Màn hình': 'LTPO AMOLED 6.78" tần số quét 185Hz',
      'Vi xử lý': 'Snapdragon 8 Elite (Xung nhịp 4.32GHz)',
      'Tản nhiệt': 'GameCool 9 buồng hơi 360 độ',
      'Pin & Sạc': '5800 mAh, HyperCharge 65W',
      'Mặt lưng': 'Đèn AniMe Vision Mini-LED lập trình được'
    },
    desc: 'Quái vật gaming phone thống trị mọi bảng xếp hạng hiệu năng với màn hình 185Hz siêu mượt và hệ thống nút bấm siêu âm AirTrigger.',
    image: 'assets/phone-rog9.svg'
  }
];

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem('nexus_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('nexus_wishlist')) || [];
let currentCategory = 'all';
let searchQuery = '';

/* Helper: Format VND Currency */
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN').format(amount) + '₫';
}

/* Save Cart to localStorage */
function saveCart() {
  localStorage.setItem('nexus_cart', JSON.stringify(cart));
  updateCartUI();
}

/* Save Wishlist */
function saveWishlist() {
  localStorage.setItem('nexus_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
}

/* ==========================================================================
   RENDER PRODUCTS
   ========================================================================== */
function createProductCardHTML(product) {
  const isWished = wishlist.includes(product.id);
  const specPillsHTML = product.specs
    .map(sp => `<span class="spec-pill">${sp}</span>`)
    .join('');

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="card-top-badges">
        <span class="badge badge-sale">${product.discount}</span>
        <button type="button" class="wishlist-btn ${isWished ? 'active' : ''}" data-action="wishlist" data-id="${product.id}" aria-label="Yêu thích">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <div class="product-thumb-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-thumb" loading="lazy" />
        <div class="quick-view-overlay">
          <button type="button" class="quick-view-btn" data-action="quickview" data-id="${product.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Xem cấu hình nhanh
          </button>
        </div>
      </div>

      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <h3 class="product-title">
          <a href="#catalog" data-action="quickview" data-id="${product.id}">${product.name}</a>
        </h3>
        <div class="product-spec-pills">
          ${specPillsHTML}
        </div>
        <div class="product-rating">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span class="tabular">${product.rating}</span>
          <span class="rating-count tabular">(${product.reviews} đánh giá)</span>
        </div>

        <div class="product-footer">
          <div class="price-box">
            <span class="current-price tabular">${formatVND(product.price)}</span>
            <span class="old-price tabular">${formatVND(product.oldPrice)}</span>
          </div>
          <button type="button" class="add-cart-btn" data-action="add-cart" data-id="${product.id}" aria-label="Thêm vào giỏ hàng">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFlashSale() {
  const container = document.getElementById('flash-sale-grid');
  if (!container) return;
  const flashProducts = PRODUCTS.filter(p => p.isFlashSale);
  container.innerHTML = flashProducts.map(createProductCardHTML).join('');
}

function renderCatalog() {
  const container = document.getElementById('catalog-grid');
  const emptyNotice = document.getElementById('catalog-empty');
  if (!container) return;

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const matchesQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyNotice) emptyNotice.style.display = 'block';
  } else {
    if (emptyNotice) emptyNotice.style.display = 'none';
    container.innerHTML = filtered.map(createProductCardHTML).join('');
  }
}

/* ==========================================================================
   CART MANAGEMENT
   ========================================================================== */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  showToast(`Đã thêm "${product.name}" vào giỏ hàng`);
}

function updateCartQty(productId, delta) {
  const index = cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
}

function updateCartUI() {
  const countEl = document.getElementById('cart-count');
  const drawerCountEl = document.getElementById('drawer-cart-count');
  const cartBody = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (countEl) countEl.textContent = totalItems;
  if (drawerCountEl) drawerCountEl.textContent = `(${totalItems})`;
  if (subtotalEl) subtotalEl.textContent = formatVND(totalPrice);

  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Giỏ hàng của bạn đang trống</p>
        <span style="font-size: 0.75rem;">Hãy chọn mẫu điện thoại yêu thích để nhận ưu đãi ngay hôm nay.</span>
      </div>
    `;
    return;
  }

  cartBody.innerHTML = cart
    .map(
      item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
        <div class="cart-item-meta">
          <h4>${item.name}</h4>
          <div class="cart-item-price tabular">${formatVND(item.price)}</div>
          <div class="qty-control">
            <button type="button" class="qty-btn" data-action="dec-qty" data-id="${item.id}" aria-label="Giảm số lượng">-</button>
            <span class="qty-val tabular">${item.qty}</span>
            <button type="button" class="qty-btn" data-action="inc-qty" data-id="${item.id}" aria-label="Tăng số lượng">+</button>
          </div>
        </div>
        <button type="button" class="cart-item-remove" data-action="remove-cart" data-id="${item.id}" aria-label="Xóa sản phẩm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `
    )
    .join('');
}

/* ==========================================================================
   WISHLIST & QUICK VIEW MODAL
   ========================================================================== */
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (idx === -1) {
    wishlist.push(productId);
    if (product) showToast(`Đã lưu "${product.name}" vào danh sách yêu thích`);
  } else {
    wishlist.splice(idx, 1);
    if (product) showToast(`Đã bỏ "${product.name}" khỏi yêu thích`);
  }
  saveWishlist();
  renderFlashSale();
  renderCatalog();
}

function updateWishlistBadge() {
  const el = document.getElementById('wishlist-count');
  if (el) el.textContent = wishlist.length;
}

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  const content = document.getElementById('quickview-content');
  if (!modal || !content) return;

  const specsRows = Object.entries(product.fullSpecs)
    .map(
      ([k, v]) => `
      <div class="modal-spec-row">
        <span class="modal-spec-key">${k}</span>
        <span class="modal-spec-val">${v}</span>
      </div>
    `
    )
    .join('');

  content.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrap">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="modal-info">
        <span class="badge badge-tag" style="margin-bottom: 8px;">${product.brand} Chính Hãng VN/A</span>
        <h3>${product.name}</h3>
        <div class="modal-price-row">
          <span class="modal-price-cur tabular">${formatVND(product.price)}</span>
          <span class="modal-price-old tabular">${formatVND(product.oldPrice)}</span>
          <span class="badge badge-sale">${product.discount}</span>
        </div>
        <p class="modal-desc">${product.desc}</p>
        <div class="modal-spec-list">
          ${specsRows}
        </div>
        <div style="display: flex; gap: 12px;">
          <button type="button" class="btn btn-primary" style="flex: 1;" data-action="modal-buy-now" data-id="${product.id}">
            Thêm vào giỏ & Thanh toán
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.remove('open');
}

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 200ms ease';
    setTimeout(() => toast.remove(), 220);
  }, 2600);
}

/* ==========================================================================
   COUNTDOWN TIMER
   ========================================================================== */
function startFlashSaleTimer() {
  let remainingSeconds = 4 * 3600 + 38 * 60 + 19; // 04:38:19

  const hEl = document.getElementById('cd-hours');
  const mEl = document.getElementById('cd-mins');
  const sEl = document.getElementById('cd-secs');

  setInterval(() => {
    if (remainingSeconds <= 0) remainingSeconds = 5 * 3600;
    remainingSeconds--;

    const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
    const secs = String(remainingSeconds % 60).padStart(2, '0');

    if (hEl) hEl.textContent = hrs;
    if (mEl) mEl.textContent = mins;
    if (sEl) sEl.textContent = secs;
  }, 1000);
}

/* ==========================================================================
   EVENT LISTENERS & INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderFlashSale();
  renderCatalog();
  updateCartUI();
  updateWishlistBadge();
  startFlashSaleTimer();

  // Global Event Delegation
  document.body.addEventListener('click', e => {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');

    switch (action) {
      case 'add-cart':
        addToCart(id);
        break;
      case 'wishlist':
        toggleWishlist(id);
        break;
      case 'quickview':
        e.preventDefault();
        openQuickView(id);
        break;
      case 'modal-buy-now':
        addToCart(id);
        closeQuickView();
        openCartDrawer();
        break;
      case 'inc-qty':
        updateCartQty(id, 1);
        break;
      case 'dec-qty':
        updateCartQty(id, -1);
        break;
      case 'remove-cart':
        removeFromCart(id);
        break;
      case 'checkout':
        if (cart.length === 0) {
          showToast('Giỏ hàng của bạn đang trống!');
        } else {
          showToast('Đặt hàng thành công! Tư vấn viên sẽ liên hệ trong 5 phút.');
          cart = [];
          saveCart();
          closeCartDrawer();
        }
        break;
    }
  });

  // Category Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderCatalog();
    });
  });

  // Search Bar
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      if (searchClear) {
        searchClear.style.display = searchQuery.length > 0 ? 'flex' : 'none';
      }
      renderCatalog();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.style.display = 'none';
      renderCatalog();
    });
  }

  // Cart Drawer Toggle
  const cartOpenBtn = document.getElementById('open-cart-btn');
  const cartCloseBtn = document.getElementById('close-cart-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartDrawer = document.getElementById('cart-drawer');

  function openCartDrawer() {
    cartBackdrop.classList.add('open');
    cartDrawer.classList.add('open');
  }

  function closeCartDrawer() {
    cartBackdrop.classList.remove('open');
    cartDrawer.classList.remove('open');
  }

  if (cartOpenBtn) cartOpenBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // Quick View Modal Close
  const modalCloseBtn = document.getElementById('close-modal-btn');
  const modalBackdrop = document.getElementById('quickview-modal');

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', e => {
      if (e.target === modalBackdrop) closeQuickView();
    });
  }

  // Newsletter Submit
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input');
      if (emailInput && emailInput.value) {
        showToast('Đăng ký nhận voucher ưu đãi 500.000₫ thành công!');
        emailInput.value = '';
      }
    });
  }

  // ==========================================================================
  // INTERACTIVE 3D PARALLAX & TILT ENGINE
  // ==========================================================================
  init3DParallax();
});

function init3DParallax() {
  // 1. Hero Visual Card 3D Tilt
  const heroCard = document.querySelector('.hero-visual-card');
  if (heroCard) {
    heroCard.addEventListener('mousemove', e => {
      const rect = heroCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 15;

      heroCard.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });

    heroCard.addEventListener('mouseleave', () => {
      heroCard.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      heroCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
      setTimeout(() => {
        heroCard.style.transition = '';
      }, 500);
    });
  }

  // 2. Dynamic 3D Card Hover & Specular Light for All Product Cards
  function attachCard3DEffect(card) {
    let bounds;

    function onMouseEnter() {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.25s ease, border-color 0.25s ease';
    }

    function onMouseMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      // Set coordinates for the light specular sheen
      card.style.setProperty('--mouse-x', `${mouseX}px`);
      card.style.setProperty('--mouse-y', `${mouseY}px`);

      const xPct = (mouseX / bounds.width) - 0.5;
      const yPct = (mouseY / bounds.height) - 0.5;

      const rotX = yPct * -16; // Max 8 deg tilt
      const rotY = xPct * 18;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-6px)`;
    }

    function onMouseLeave() {
      card.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  }

  // Observe and attach to dynamically rendered product cards
  const gridObserver = new MutationObserver(() => {
    document.querySelectorAll('.product-card:not([data-3d-attached])').forEach(card => {
      card.setAttribute('data-3d-attached', 'true');
      attachCard3DEffect(card);
    });
  });

  const flashGrid = document.getElementById('flash-sale-grid');
  const catGrid = document.getElementById('catalog-grid');
  if (flashGrid) gridObserver.observe(flashGrid, { childList: true });
  if (catGrid) gridObserver.observe(catGrid, { childList: true });

  // Initial attach
  document.querySelectorAll('.product-card').forEach(card => {
    card.setAttribute('data-3d-attached', 'true');
    attachCard3DEffect(card);
  });
}

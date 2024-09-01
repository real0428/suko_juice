
const products = [
  { title: "茗品系列", price: 90, number: "01", image: "images/product.png" },
  { title: "奶茶系列", price: 80, number: "02", image: "images/product.png" },
  { title: "鮮奶拿鐵系列", price: 70, number: "03", image: "images/product.png" },
  { title: "茗品系列", price: 60, number: "04", image: "images/product.png" },
  { title: "茗品系列", price: 50, number: "05", image: "images/product.png" },
  { title: "奶茶系列", price: 40, number: "06", image: "images/product.png" },
  { title: "紅茶系列", price: 80, number: "07", image: "images/product.png" },
  { title: "綠茶系列", price: 90, number: "08", image: "images/product.png" },
  { title: "茗品系列", price: 90, number: "09", image: "images/product.png" },
  { title: "英式奶茶系列", price: 70, number: "10", image: "images/product.png" },
  { title: "英式紅茶系列", price: 70, number: "11", image: "images/product.png" }
];

const container = document.getElementById('product-container');
const lightbox = document.getElementById('product-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxPrice = document.getElementById('lightbox-price');
const closeBtn = document.querySelector('.close');


products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = product.image;
  img.alt = '';

  const proIcon = document.createElement('div');
  proIcon.className = 'pro_icon';

  const ul = document.createElement('ul');

  const liImg = document.createElement('li');
  const iconImg = document.createElement('img');
  iconImg.src = "images/icon_green.png";
  iconImg.alt = '';
  liImg.appendChild(iconImg);

  const liTitle = document.createElement('li');
  liTitle.className = 'pro_tit';
  liTitle.textContent = product.title;

  const liNumber = document.createElement('li');
  liNumber.className = 'pro_num';
  liNumber.textContent = product.number;

  ul.appendChild(liImg);
  ul.appendChild(liTitle);
  ul.appendChild(liNumber);

  proIcon.appendChild(ul);

  card.appendChild(img);
  card.appendChild(proIcon);
  card.addEventListener('click', () => {
    addToCart(product)
  })

  container.appendChild(card);
});

function addToCart(product) {
  lightboxImg.src = product.image;
  lightboxTitle.textContent = product.title;
  lightboxPrice.textContent = "NT$" + product.price + "元";
  lightbox.style.display = 'flex'; // 顯示燈箱
  requestAnimationFrame(() => {
    lightbox.classList.add('show');
  });
}

// 關閉燈箱
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
  lightbox.addEventListener('transitionend', () => {
    lightbox.style.display = 'none';
  }, { once: true });
});

// 點擊背景關閉燈箱
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove('show');
    lightbox.addEventListener('transitionend', () => {
      lightbox.style.display = 'none';
    }, { once: true });
  }
});


const quantityValue = document.getElementById('quantity-value');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let quantity = 1;

incrementBtn.addEventListener('click', () => {
  quantity++;
  quantityValue.textContent = quantity;
});

decrementBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityValue.textContent = quantity;
  }
});


const listLenghtHeadphones = 3;
const productListHeadphones = [];

const itemIdHeadphones = ['item1', 'item2', 'item3'];
const productTitleH = ['XX99 Mark II Headphones', 'XX99 Mark I Headphones', 'XX59 Headphones'];
const prodImgHeadphones = ['../Audiophile/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg', '../Audiophile/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg', '../Audiophile/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'];
const altImgHeadphones = ['xx99 mk II', 'xx99 mk I', 'xx59'];
const descriptionHeadphones = ['The new XX99 Mark II headphones is th pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision  of studio-quality sound.', 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.', 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'];
const productPriceHeadphones = [2.999, 1.750, 899];
const priceCurrencyHeadphones = ['$', '$', '$'];
const stocHeadphones = [50, 10, 5];

function generateListHeadphones() {
  for (let i = 0; i < listLenghtHeadphones; i++) {
    const item = {
      id: itemIdHeadphones[i],
      img: prodImgHeadphones[i],
      alt: altImgHeadphones[i],
      title: productTitleH[i],
      shortDescription: descriptionHeadphones[i],
      price: productPriceHeadphones[i],
      currency: priceCurrencyHeadphones[i],
      stoc: stocHeadphones[i],
    }
    productListHeadphones.push(item);
  }
  localStorage.setItem('productListHeadphones', JSON.stringify(productListHeadphones));
}
generateListHeadphones()


const listLenghtSpeakers = 2;
const productListSpeakers = [];

const itemIdSpeakers = ['item1', 'item2'];
const productTitleS = ['ZX9 speaker', 'ZX7 speaker'];
const prodImgSpeakers = ['../Audiophile/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg', '../Audiophile/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'];
const altImgSpeakers = ['ZX9', 'ZX7'];
const descriptionSpeakers = ['Upgrade your sound system with the all new ZX9 active speaker. It s a bookshelf speaker system that offers truly wireless connectivity-- creating new possibilities for more pleasing and practical audio setups.', 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'];
const productPriceSpeakers = ['4.500', '3.500'];
const priceCurrencySpeakers = ['$', '$'];



function generateListSpeakers() {
  for (let i = 0; i < listLenghtSpeakers; i++) {
    const item = {
      id: itemIdSpeakers[i],
      img: prodImgSpeakers[i],
      alt: altImgSpeakers[i],
      title: productTitleS[i],
      shortDescription: descriptionSpeakers[i],
      price: productPriceSpeakers[i],
      currency: priceCurrencySpeakers[i],

    }
    productListSpeakers.push(item);
  }
  localStorage.setItem('productListSpeakers', JSON.stringify(productListSpeakers));
}
generateListSpeakers()



const listLenghtEarphones = 1;
const productListEarphones = [];

const itemIdEarphones = ['item1'];
const productTitlE = ['YX1 WIRELESS earphones'];
const prodImgEarphones = ['../Audiophile/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',];
const altImgEarphones = ['YX1'];
const descriptionEarphones = ['Tailor your listening experiencewith bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'];
const productPriceEarphones = ['599'];
const priceCurrencyEarphones = ['$'];
const stocEarphones = [40]

function generateListEarphones() {
  for (let i = 0; i < listLenghtEarphones; i++) {
    const item = {
      id: itemIdEarphones[i],
      img: prodImgEarphones[i],
      alt: altImgEarphones[i],
      title: productTitlE[i],
      shortDescription: descriptionEarphones[i],
      price: productPriceEarphones[i],
      currency: priceCurrencyEarphones[i],
      stoc: stocEarphones[i]
    }
    productListEarphones.push(item);
  }
  localStorage.setItem('productListEarphones', JSON.stringify(productListEarphones));
}
generateListEarphones()


const cart = [];
localStorage.setItem('cart', JSON.stringify(cart));
localStorage.setItem('counter', '0');







function createButtons() {


  const logBtn = document.querySelector('.logBtn');
  const login = document.createElement('span');
  const logout = document.createElement('span');

  const userName = localStorage.getItem('userLogat');
  const logoutBtn = document.createElement('button');
  const anchor = document.createElement('a');
  const txt = document.createElement('p');
  txt.classList.add('welcomeTxt');
  txt.innerText = `Welcome, ${userName.split("@")[0]}`;
  anchor.href = 'logout.html';
  logoutBtn.appendChild(anchor);
  logoutBtn.classList.add('logout');
  anchor.innerText = 'LogOut';
  logout.appendChild(txt);
  logout.appendChild(logoutBtn);


  const loginBtn = document.createElement('button');
  const anchor1 = document.createElement('a');
  anchor1.href = 'login.html';
  loginBtn.appendChild(anchor1);
  loginBtn.classList.add('login');
  anchor1.innerText = 'Login';
  login.appendChild(loginBtn);

  logBtn.appendChild(login);
  logBtn.appendChild(logout);

}

createButtons();

const logOutBtn = document.querySelector('.logout');

logOutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('esteLogat', '0');
  checkStatusLogin()
})

function checkStatusLogin() {
  const logStatus = localStorage.getItem('esteLogat');
  if (logStatus == '0') {
    document.querySelector('.logout').style.display = "none";
    document.querySelector('.welcomeTxt').style.display = "none";
    document.querySelector('.login').style.display = "block";
  }
  else {
    document.querySelector('.login').style.display = "none";
    document.querySelector('.logout').style.display = "block";
    document.querySelector('.welcomeTxt').style.display = "block";
  }
}

checkStatusLogin();
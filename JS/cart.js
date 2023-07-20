const cartString = localStorage.getItem('cart');
const cart = JSON.parse(cartString);
console.log(cart);

function createImg(imgUrl, alt) {
  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', imgUrl);
  imgElement.setAttribute('alt', alt);
  return imgElement;
}

function createCostumElement(element, text, elementClass) {
  const newElement = document.createElement(element);
  newElement.textContent = text;
  if (elementClass) {
    newElement.classList.add(elementClass);
  }
  return newElement;
}

function createCardElement(imgUrl, imgAlt, productTitle, productPrice, qty) {
  const card = document.createElement('section');
  card.classList.add('Cart-Items')
  const img = createImg(imgUrl, imgAlt);
  img.classList.add('img')
  const title = createCostumElement('h1', productTitle, 'title');
  const price = createCostumElement('h3', productPrice, 'price');
  const wrapperQty = document.createElement('div');
  wrapperQty.classList.add('wrapper');
  const minus = document.createElement('span');
  minus.classList.add('minus');
  minus.innerText = "-";
  const num = document.createElement('span');
  num.classList.add('num');
  num.innerText = qty;
  const plus = document.createElement('span');
  plus.classList.add('plus');
  plus.innerText = "+";
  const containerQty = document.createElement('div');
  containerQty.classList.add('container');

  wrapperQty.appendChild(minus);
  wrapperQty.appendChild(num);
  wrapperQty.appendChild(plus);

  containerQty.appendChild(wrapperQty);

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);

  card.appendChild(containerQty);

  return card;
}

function generateCart(list) {
  const cartProducts = document.querySelector('.cartProducts');
  for (let i = 0; i < list.length; i++) {
    const product = list[i];
    const cartElement = createCardElement(product.img, product.alt, product.alt, product.price, product.qty);
    cartProducts.appendChild(cartElement);
  }
  return cartProducts;
}

generateCart(cart);


// const img = document.querySelector('.img');
// const title = document.querySelector('.title');
// const price = document.querySelector('.price');

// for (let i = 0; i < cart.length; i++) {
//   title.textContent = cart[i].alt;
//   img.setAttribute('src', cart[i].img);
//   price.textContent = `${cart[i].price} ${cart[i].currency}`;

// }


// const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.num');
let plusses = document.querySelectorAll('.plus');
let minusses = document.querySelectorAll('.minus');
let nums = document.querySelectorAll('.num');


for (let index = 0; index < plusses.length; index++) {
  let plus = plusses[index];
  plus.addEventListener('click', (e) => {
    e.preventDefault();
    const counterProduct = parseInt(nums[index].innerHTML);
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (counterProduct == cart[index].stoc) {
      alert('Ai depasit stocul');
    } else {
      const counterTotal = parseInt(localStorage.getItem('counter'));
      localStorage.setItem('counter', counterTotal + 1);
      nums[index].innerText = counterProduct + 1;
      cart[index].qty++;

      localStorage.setItem('cart', JSON.stringify(cart));
      totalSum();
    }




  })
}

for (let index = 0; index < minusses.length; index++) {
  let minus = minusses[index];
  minus.addEventListener('click', (e) => {
    e.preventDefault();
    const counterProduct = parseInt(nums[index].innerHTML);
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (counterProduct == 1) {
      cart.splice(index,1);
      localStorage.setItem('cart', JSON.stringify(cart));
      plusses[index].style.display = "none";
      minus.style.display = "none";
      nums[index].innerText = "Produsul a fost eliminat din cos";
      totalSum();
      // nums[index].innerText = 1;
    } else {
      const counterTotal = parseInt(localStorage.getItem('counter'));
      localStorage.setItem('counter', counterTotal - 1);
      nums[index].innerText = counterProduct - 1;
      cart[index].qty--;
      localStorage.setItem('cart', JSON.stringify(cart));
      totalSum();
    }

  })
}



const remove = document.getElementById('action');
remove.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.cartProducts').style.display = "none";

  localStorage.setItem('cart', []);
  localStorage.setItem('counter', 0);
})





function totalSum() {
  const total = document.querySelector('.total');
  const cart=JSON.parse(localStorage.getItem('cart'));

  let tot = 0;
  for (let i = 0; i < cart.length; i++) {
    tot += parseInt(cart[i].qty) * cart[i].price;
  }
  total.innerText = tot.toFixed(2);
}

totalSum();


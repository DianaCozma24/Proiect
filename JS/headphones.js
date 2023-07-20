const productListHeadphonesString= localStorage.getItem('productListHeadphones');
if (!productListHeadphonesString ) {
  alert('Something went wrong!');
}
const productListHeadphones= JSON.parse(productListHeadphonesString);

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

function createCardElement(id, imgUrl, imgAlt, productTitle, productDescription) {
  const card = document.createElement('div');
  const container = document.createElement('div');
  card.classList.add('card');
  const img = createImg(imgUrl, imgAlt);
  const title = createCostumElement('h3', productTitle);
  const description = createCostumElement('p', productDescription);
  const anchor = document.createElement('a');
  const seeProduct = createCostumElement('button', 'See product');
  anchor.setAttribute('href', `productHeadphones.html?productId=${id}`);

  seeProduct.classList.add('seeProduct');

  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(anchor);
  anchor.appendChild(seeProduct);
  card.appendChild(container);

  return card;
}

function generateListHeadphones(list){
  console.log(list);
  const productListElementHeadphones = document.querySelector('.product-listHeadphones');
  const cards =document.querySelectorAll('.card');
  for(let i=0; i<cards.length; i++){
    console.log(cards[i]);
    cards[i].style.display = "none";
  }
  for (let i = 0; i < list.length; i++) {
    const product = list[i];
    const cardElement = createCardElement(product.id, product.img, product.alt, product.title, product.shortDescription);
    productListElementHeadphones.appendChild(cardElement);
  }
  return productListElementHeadphones;
}


generateListHeadphones(productListHeadphones);




function searchByInput(){
  const input = document.getElementById('search');
  // converteste toate caracterele mari in caractere mici
  // ProducT => product
  const searchText = input.value.toLowerCase();

  const filterList = productListHeadphones.filter((product) =>{
      const lowerLetters = product.title.toLowerCase();
      const price = product.price + '';

      return lowerLetters.includes(searchText) || price.includes(searchText);
  });

  generateListHeadphones(filterList, 0);
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () =>{
    searchByInput()
})

generateListHeadphones(productListHeadphones, 0);

const input = document.getElementById('search');
input.addEventListener('keypress', (e) =>{
    if(e.code === 'Enter'){
        searchByInput()
    }
})
export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if(!cart){
    cart =[{
      productId : '54e0eccd-8f36-462b-b68a-8182611d9add',
      quantity : 2,
      deliveryOptionId : '1'
  },{
      productId : '3ebe75dc-64d2-4137-8860-1f5a963e534b',
      quantity : 1,
      deliveryOptionId : '2'
  }]; 
  }
}

function saveToStorage() {
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      } 
    });
    
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  
    const quantity = Number(quantitySelector.value);
  
      if(matchingItem) {
        matchingItem.quantity +=quantity;
      } else {
        cart.push({
          productId : productId,
          quantity : 1,
          deliveryOptionId : '1'
        });
      }
  saveToStorage();
  }

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;

}

export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId) {
  let matchingItem;
  
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      } 
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}

export function loadCart(fun) {
  const xhr = new XMLHttpRequest();
 
 xhr.addEventListener('load', () => {
  console.log(xhr.response);
  fun();
 });
 
  xhr.open('GET','https://supersimplebackend.dev/Cart');
  xhr.send();
 }

 export async function loadCartFetch() {
  const response = await fetch('https://supersimplebackend.dev/cart');
  const text = await response.text();
  console.log(text);
  return text;
}

// Extra feature: make the cart empty after creating an order.
export function resetCart() {
  cart = [];
  saveToStorage();
}
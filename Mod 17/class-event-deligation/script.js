const listEl = document.querySelector('#grocery-list');
const shoppingCartEl = document.querySelector('#shopping-cart');
const fruits = ['Bananas', 'Apples', 'Oranges', 'Grapes', 'Blueberries'];

// Create an event listener on the common parent element of the groceries
// Inside the closure, for every click of the button, create a `div` element
// that will hold the name of the fruit
// and append it to the shopping cart

const clickHandler = function (e) {   // "e" = "event"
  e.preventDefault();
  if (e.target.matches('button')) {
    let i = e.target.parentElement.id
    console.log(fruits[i])

    let list = document.createElement('div')
    list.textContent = fruits[i]
    shoppingCartEl.appendChild(list)
  }
}

listEl.addEventListener('click', clickHandler);

// ADD ITEMS TO CART

// list.addEventListener('click', function(e) {
//   e.preventDefault();
//   console.log(e);
//   if (e.target.matches('button')) {
//     let id = e.target.parentElement.id;
//     let item = document.createElement('div');
//     item.textContent = fruits[id];
//     shoppingCartEl.appendChild(item);
//   }
// });
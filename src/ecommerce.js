class Basket {
  constructor(items = [], totalPrice = 0) {
    this.items = items;
    this.totalPrice = totalPrice;
  }
}

function addToBasket(basket, item) {
  basket.items.push(item);
  basket.totalPrice += item.price;
}

function removeFromBasket(basket, item) {
  const index = basket.items.findIndex(i => i.name === item.name);
  if (index >= 0) {
    basket.items.splice(index, 1);
    basket.totalPrice -= item.price;
  }
}
function testAddRemove() {
  const basket = new Basket();
  const item = { name: 'Carte graphique', price: 300 };

  addToBasket(basket, item);
  if (basket.totalPrice !== 300 || basket.items.length !== 1) return false;

  removeFromBasket(basket, item);
  if (basket.totalPrice !== 0 || basket.items.length !== 0) return false;

  return true;
}
function transactionAllowed(userAccount,priceToPay) {
  return userAccount.balance >= priceToPay;
}
module.exports = { Basket, addToBasket, removeFromBasket, testAddRemove, transactionAllowed}
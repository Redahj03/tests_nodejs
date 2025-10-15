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
function  payBasket(userAccount,basket) {
  if (transactionAllowed(userAccount,basket.totalPrice)) {
    userAccount.balance -= basket.totalPrice;
    return true;
  }else{
  return false;
}
}
function testAppEcommerce() {
  const basket = new Basket(); 
  const item = { name: 'Carte graphique', price: 300 }; 
  const user = { name: 'Perceval', balance: 500 };
  let success = true;
  addToBasket(basket, item);
  success = success && (basket.items.length === 1 && basket.totalPrice === 300);
  removeFromBasket(basket, item);
  success = success && (basket.items.length === 0 && basket.totalPrice === 0);
  success = success && testAddRemove();
  success = success && transactionAllowed(user, 200) === true;
  success = success && transactionAllowed(user, 600) === false;
  addToBasket(basket, item);
  success = success && payBasket(user, basket) === true;
  success = success && user.balance === 200;
  addToBasket(basket, item);
  success = success &&  payBasket(user, basket) === false;
  success = success && user.balance === 200;
  console.log(success ? "OK" : "ERREUR");
  return success;
}
module.exports = { Basket, addToBasket, removeFromBasket, testAddRemove, transactionAllowed,payBasket,testAppEcommerce}
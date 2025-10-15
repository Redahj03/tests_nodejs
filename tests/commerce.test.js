const { Basket, addToBasket, removeFromBasket, testAddRemove ,transactionAllowed,payBasket,testAppEcommerce} = require('../src/ecommerce');

test('ajout d’un produit met à jour le prix total', () => {
  const basket = new Basket();
  const item = { name: 'Carte mère', price: 100 };
  addToBasket(basket, item);
  expect(basket.totalPrice).toBe(100);
});

test('suppression d’un produit remet le total à zéro', () => {
  const basket = new Basket();
  const item = { name: 'Carte mère', price: 100 };
  addToBasket(basket, item);
  removeFromBasket(basket, item);
  expect(basket.totalPrice).toBe(0);
});

test('testfactorisé : ajout et suppression d’un produit', () => {
  expect(testAddRemove()).toBe(true);
});

test('transactionAllowed valide les différents cas', () => {
  const user ={name :'perceval',balance:500};
  expect(transactionAllowed(user,400)).toBe(true);
  expect(transactionAllowed(user,600)).toBe(false);
});

test('test fonctionnel : paiement du panier', () => {

  const user = { name: 'Perceval', balance: 500 };
  const basket = new Basket();
  const item = { name: 'Carte graphique', price: 300 };
  addToBasket(basket, item);


  const firstPayment = payBasket(user, basket);
  expect(firstPayment).toBe(true);     
  expect(user.balance).toBe(200);       


  const secondPayment = payBasket(user, basket);
  expect(secondPayment).toBe(false);    
  expect(user.balance).toBe(200);       
});

test('Exécuter tous les tests', () => {
  testAppEcommerce();
});
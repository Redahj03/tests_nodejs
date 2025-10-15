const { Basket, addToBasket, removeFromBasket, testAddRemove } = require('../src/ecommerce');

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


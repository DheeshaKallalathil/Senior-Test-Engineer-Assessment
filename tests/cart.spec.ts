import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('add and remove item from cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoginSuccess();

  // Add first product to cart
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  // Assert item is in cart
  await cartPage.assertCartHasItems(1);

  // Remove the product
  await cartPage.removeFirstItem();

  // Assert cart is empty
  await cartPage.assertCartIsEmpty();
});

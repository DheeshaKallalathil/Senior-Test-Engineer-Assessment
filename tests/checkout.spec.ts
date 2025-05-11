import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

test('complete checkout process successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutInfoPage = new CheckoutInfoPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertLoginSuccess();

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.proceedToCheckout();

  await checkoutInfoPage.enterCheckoutInfo('John', 'Doe', '12345');
  await checkoutInfoPage.continueToOverview();

  await checkoutOverviewPage.finishCheckout();

  await checkoutCompletePage.assertOrderComplete();
});

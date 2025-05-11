import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NavigationPage } from '../pages/NavigationPage';

test.describe('Navigation tests', () => {
  test('side menu opens and logout works', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const navigation = new NavigationPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoginSuccess();

    await navigation.openMenu();
    await navigation.logout();
    await loginPage.assertOnLoginPage();
  });

  test('navigates to cart and back to products', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const navigation = new NavigationPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.assertLoginSuccess();

    await navigation.goToCart();
    await navigation.continueShopping();
  });
});

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { validUsers, validPassword } from '../test-data/users.ts';

test.describe('Login Functionality with Multiple Valid Users', () => {
  for (const username of validUsers) {
    test(`should handle login for username: ${username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(username, validPassword);

      if (username === 'locked_out_user') {
        await loginPage.assertLoginFailure('Epic sadface: Sorry, this user has been locked out.');
      } else {
        await loginPage.assertLoginSuccess();
      }
    });
  }
});

import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to the login page
  async goto() {
    await this.page.goto('https://www.saucedemo.com/v1/');
  }

  // Login with the provided username and password
  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('.btn_action');
  }

  // Assert successful login (check for the inventory page)
  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
  }

  // Assert failed login (e.g. for locked-out users)
  async assertLoginFailure(errorMessage: string) {
    await expect(this.page.locator('.error-message-container')).toHaveText(errorMessage);
  }
  async assertOnLoginPage() {
    await expect(this.page).toHaveURL(/.*\/v1\/(index\.html)?$/);
  }
  
}

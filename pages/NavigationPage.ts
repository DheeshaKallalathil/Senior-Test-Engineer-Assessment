import { Page, expect } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openMenu() {
    await this.page.click('.bm-burger-button');
    await expect(this.page.locator('#logout_sidebar_link')).toBeVisible();
  }

  async logout() {
    await this.page.click('#logout_sidebar_link');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
    await expect(this.page).toHaveURL(/.*cart.html/);
  }

  async continueShopping() {
    await this.page.click('.btn_secondary');
    await expect(this.page).toHaveURL(/.*inventory.html/);
  }
}

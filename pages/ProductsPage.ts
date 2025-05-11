import { Page, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addFirstProductToCart() {
    const firstAddButton = this.page.locator('.inventory_item').first().locator('button');
    await firstAddButton.click();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
    await expect(this.page).toHaveURL(/.*cart.html/);
  }

  async assertOnProductsPage() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
    await expect(this.page.locator('.title')).toHaveText('Products');
  }
}

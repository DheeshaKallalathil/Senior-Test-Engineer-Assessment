import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertCartHasItems(expectedCount: number) {
    const items = this.page.locator('.cart_item');
    await expect(items).toHaveCount(expectedCount);
  }

  async assertCartItemName(expectedName: string) {
    const itemName = this.page.locator('.cart_item_name');
    await expect(itemName).toHaveText(expectedName);
  }

  async proceedToCheckout() {
    await this.page.click('.checkout_button');
  }

  async removeFirstItem() {
    await this.page.locator('.cart_item').nth(0).locator('button').click();
  }

  async assertCartIsEmpty() {
    const items = this.page.locator('.cart_item');
    await expect(items).toHaveCount(0);
  }

}

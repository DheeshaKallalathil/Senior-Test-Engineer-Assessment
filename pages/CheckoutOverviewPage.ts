import { Page, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async finishCheckout() {
    await this.page.click('.cart_button');
    await expect(this.page).toHaveURL(/.*checkout-complete.html/);
  }
}

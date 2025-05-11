import { Page, expect } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertOrderComplete() {
    const confirmation = this.page.locator('.complete-header');
    await expect(confirmation).toHaveText(/thank you/i);
  }
}

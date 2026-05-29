import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly titleLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.titleLabel = page.locator('.title');
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }

  async verifyPageTitle(expectedTitle: string) {
    await expect(this.titleLabel).toHaveText(expectedTitle);
  }

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }
}

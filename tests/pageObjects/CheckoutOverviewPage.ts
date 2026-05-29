import { expect, Locator, Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly titleLabel: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleLabel = page.locator('.title');
    this.finishButton = page.locator('#finish');
  }

  async verifyPageTitle(expectedTitle: string) {
    await expect(this.titleLabel).toHaveText(expectedTitle);
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }
}

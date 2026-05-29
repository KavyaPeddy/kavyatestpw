import { expect, Locator, Page } from '@playwright/test';

export class CheckoutInformationPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly titleLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.titleLabel = page.locator('.title');
  }

  async verifyPageTitle(expectedTitle: string) {
    await expect(this.titleLabel).toHaveText(expectedTitle);
  }

  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }
}

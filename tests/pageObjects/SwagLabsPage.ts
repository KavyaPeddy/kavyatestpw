import { expect, Locator, Page } from '@playwright/test';

export class SwagLabsPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly backpackButton: Locator;
  readonly sortSelect: Locator;
  readonly cartLink: Locator;
  readonly checkoutButton: Locator;
  readonly titleLabel: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.backpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.sortSelect = page.locator('.product_sort_container');
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutButton = page.locator('#checkout');
    this.titleLabel = page.locator('.title');
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async verifyTitle(expectedTitle: string) {
    await expect(this.page).toHaveTitle(expectedTitle);
  }

  async addBackpackToCart() {
    await this.backpackButton.click();
  }

  async sortProductsLowToHigh() {
    await this.sortSelect.selectOption({ label: 'Price (low to high)' });
  }

  async openCart() {
    await this.cartLink.click();
  }

  async startCheckout() {
    await this.checkoutButton.click();
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

  async finishCheckout() {
    await this.finishButton.click();
  }

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }
}

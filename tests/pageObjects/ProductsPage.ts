import { Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly backpackButton: Locator;
  readonly sortSelect: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.sortSelect = page.locator('.product_sort_container');
    this.cartLink = page.locator('.shopping_cart_link');
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

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path, fullPage: true });
  }
}

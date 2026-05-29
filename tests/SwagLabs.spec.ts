import { test } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';
import { ProductsPage } from './pageObjects/ProductsPage';
import { CartPage } from './pageObjects/CartPage';
import { CheckoutInformationPage } from './pageObjects/CheckoutInformationPage';
import { CheckoutOverviewPage } from './pageObjects/CheckoutOverviewPage';

test('checkout flow with separated page objects', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutInfoPage = new CheckoutInformationPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.verifyTitle('Swag Labs');

  await productsPage.addBackpackToCart();
  await productsPage.sortProductsLowToHigh();
  await productsPage.openCart();
  await productsPage.takeScreenshot('./Screenshots/cart.png');

  await cartPage.startCheckout();
  await cartPage.verifyPageTitle('Checkout: Your Information');
  await cartPage.takeScreenshot('./Screenshots/Checkoutinfo.png');

  await checkoutInfoPage.fillCheckoutInformation('Kavya', 'peddy', '500089');
  await checkoutInfoPage.continueCheckout();
  await checkoutInfoPage.takeScreenshot('./Screenshots/Checkoutoverview.png');

  await checkoutOverviewPage.verifyPageTitle('Checkout: Overview');
  await checkoutOverviewPage.finishCheckout();
  await checkoutOverviewPage.takeScreenshot('./Screenshots/Checkoutcomplete.png');
});

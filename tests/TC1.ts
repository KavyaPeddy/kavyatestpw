import { test } from '@playwright/test';
test.only('has title', async ({ page }) => {
   await page.goto('https://www.amazon.in/');
   await page.locator("//button[@type='submit']").click();
   await page.locator("//input[@id='twotabsearchtextbox']").click();
   await page.fill("//input[@id='twotabsearchtextbox']","soap");
   await page.locator("//input[@id='nav-search-submit-button']").click();
   await page.locator("//*[contains(text(),'Get It by Tomorrow')]").click();
 })
import { expect, test } from '@playwright/test';

test('Launch Amazon, Search Products, Click on 2nd Product, Add to Cart', async ({ page }) => {

await page.goto('https://www.amazon.in/')

await page.waitForTimeout(5000);

await page.fill('#twotabsearchtextbox:nth-of-type(1)','soaps');

await page.keyboard.press("Enter");

const [newPAge] = await Promise.all([

page.waitForEvent('popup'),

page.click("//div[@data-cel-widget='search_result_3']"),

])

newPAge.click("//input[@id='add-to-cart-button']")

await newPAge.waitForTimeout(5000)

});

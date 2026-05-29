import { test } from '@playwright/test';

 
test('Print dropdown values - Method 3', async ({ page }) => {
 
    await page.goto('https://www.amazon.in/');
    await page.fill("//input[@id='twotabsearchtextbox']", "soap");
    await page.click("//input[@id='nav-search-submit-button']");
    //await page.waitForSelector("//select[@id='sort']");

    const sortOptions = page.locator("//select[@id='s-result-sort-select']/option");
    const optionsCount = await sortOptions.count();
    console.log('Sort by dropdown option count:', optionsCount);

    let i = 0;
    while (i < optionsCount) {
        const optionText = await sortOptions.nth(i).textContent();
        const optionValue = await sortOptions.nth(i).getAttribute('value');
        console.log(`Option ${i + 1}: ${optionText?.trim()} (Value: ${  optionValue})`);
        i++;
    }

    });

import { test } from '@playwright/test';


test('Print dropdown values - Method 3', async ({ page }) => {


    await page.goto('https://www.amazon.in/');

    await page.waitForTimeout(10000);
    const dropdownOptions = page.locator("//select[@id='searchDropdownBox']/option");

    const count = await dropdownOptions.count();
    console.log(count);
    for (let i = 0; i < count; i++) {
        const value = await dropdownOptions.nth(i).textContent();
        console.log(value);
    }

    await page.locator("//input[@id='twotabsearchtextbox']").fill("soap");
    await page.locator("//input[@id='nav-search-submit-button']").click();
    const featuredropdownOptions = page.locator("//span[@id='a-autoid-2']/option");
    const featurescount = await featuredropdownOptions.count();
    console.log(featurescount);
    for (let j = 0; j < featurescount; j++) {
        console.log("Featured dropdown values are:");
        const featurevalue = await featuredropdownOptions.nth(j).textContent();
        console.log(featurevalue);
    }
});

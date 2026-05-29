import { test, expect } from '@playwright/test';
test.only('has title', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill("//input[@id='name']", "Kavya Peddy");
    await page.fill("//input[@id='email']", "peddi.kavyareddy@gmail.com");
    await page.fill("//input[@id='phone']", "9502621933");
    await page.fill("//textarea[@id='textarea']", "manikonda,hyderabad, 500089");
    await page.locator('input[type="radio"][value="male"]').check();
    await page.waitForTimeout(5000);
    await page.locator('input[type="checkbox"][value="monday"]').check();
    await page.locator('input[type="checkbox"][value="wednesday"]').check();
    await page.waitForTimeout(5000);
    await page.selectOption("//select[@id='country']", "uk");
    await page.waitForTimeout(5000);
    await page.screenshot({
        path: './Screenshots/homepage.png',
        fullPage: true
    });
    const logo = page.locator("//button[@name='start']");
    await logo.screenshot({
        path: './Screenshots/logo.png'
    });
    const filePath = './upload/testupload.txt';
    const pathfile = ['./upload/tc1.txt', './upload/tc2.txt'];
    await page.waitForTimeout(5000);
    await page.locator("//input[@id='singleFileInput']").setInputFiles(filePath);
    await page.click("//button[contains(text(),'Upload Single File')]");
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(pathfile);
    await page.click("//button[contains(text(),'Upload Multiple Files')]");

});

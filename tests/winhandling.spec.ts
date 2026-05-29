import {test, expect, chromium   } from '@playwright/test';

test('Window handling', async ({ page }) => {
    //we have to launch the browser and create the context and page objects
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const allPages = context.pages();
    console.log(allPages.length);

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://orangehrm.com/')
    await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');


    } )


    test.only(' handling multiple windows', async ({ page }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM');
    //we are opening the link in new tab, so we need to wait for the new page to open
   
    const page2 = await Promise.all([
  context.waitForEvent('page'),
  page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click(),
]); 
    //now we have to wait for the new page to open
   
    await page2.waitForLoadState();
    await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');

    await browser.close();

    } )
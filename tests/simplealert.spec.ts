import { test, expect } from '@playwright/test';
test('Handle Alerts', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');
    await dialog.accept()
    console.log('Alert handled successfully')
    });

    await page.click("//button[@id='alertBtn']");
    await page.screenshot({ path: './Screenshots/simplealert.png', fullPage: true });
 

});
import { test, expect } from '@playwright/test';
test('Handle Alerts', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Press a button!');
    await dialog.accept()
   // await dialog.dismiss()// Dismiss the dialog
    console.log ('Alert handled successfully')
    });

    await page.click("//button[@id='confirmBtn']");
    expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.screenshot({ path: './Screenshots/confirmalert.png', fullPage: true });
 

});
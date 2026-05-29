import { test, expect } from '@playwright/test';
test('Handle Alerts', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('Please enter your name:');
    expect(dialog.defaultValue()).toBe('Harry Potter');
    await dialog.accept('Kavya');
   // await dialog.dismiss()// Dismiss the dialog
    console.log ('Alert handled successfully')
    });

    await page.click("//button[@id='promptBtn']");
    expect(page.locator("//p[@id='demo']")).toHaveText('Hello Kavya! How are you today?')
    await page.screenshot({ path: './Screenshots/promptalert.png', fullPage: true });
 

});
import { expect, test } from '@playwright/test';
import path from 'path';

test('assignment 4: red and blue', async ({ page }) => {
    await page.goto('https://rightandbright.vercel.app/')
    //await page.locator("//button[text()='Explore']").hover();
    await page.locator("//button[text()=' Explore ']").click();
    await page.locator("//span[normalize-space()='Automation Practice']").click();
    
    //clicking on button
    await page.locator("//button[text()=' Primary ']").click();
    await page.screenshot({ path: './Screenshots/Red.png', fullPage: true });


    //enabling alert window
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name:');
        await dialog.accept('Kavya');
        console.log('Alert handled successfully')
    })
    await page.locator("//button[text()=' Show Prompt ']").click();
    expect(page.locator("//p[@class='mt-3 text-sm p-3 rounded-lg']")).toHaveText(' Prompt: You entered "Kavya" ');

    //downloading the file  
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("//a[contains(text(),' Download Sample File ')]").click()
    ]);
    const downloadpath = path.join(__dirname, './download', await download.suggestedFilename());
    await download.saveAs(downloadpath);
    console.log('File downloaded to:', downloadpath);
    

    

});
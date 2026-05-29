import { expect, test } from '@playwright/test';
test('Pop-Up Accept', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Set up dialog listener BEFORE clicking
    page.once('dialog', async dialog => {
        // Capture the text
        let alertText = dialog.message();
        console.log('Alert text:', alertText);
        expect(alertText).toBe('I am a JS Prompt');
        await console.log('Type:', dialog.type);
        await page.waitForTimeout(2000)
        // Accept the dialog      
        await dialog.dismiss();
    });
    // Now click the button
    await page.click('button[onclick="jsPrompt()"]');
    
});
import { test } from '@playwright/test';
 
test('Print dropdown values - Method 3', async ({ page }) => {
 
    await page.goto('https://www.amazon.com');
    await page.locator("#twotabsearchtextbox").click();
    await page.fill("#twotabsearchtextbox",'soaps');    
    await page.keyboard.press("Enter");      
    await page.locator("//span[@id='a-autoid-0']").click();
    await page.locator('.a-dropdown-prompt').click();
    await page.waitForTimeout(3000);
    //await page.keyboard.press("Arrow Down");
 
    const feadropdwnoptions = page.locator("//div[@class='a-popover-wrapper']");
    const countdropdwnoptions = await feadropdwnoptions.count();
    //await page.locator("//span[@id='a-autoid-2']").click();
    console.log(countdropdwnoptions);
    let i = 0;
     while(i<countdropdwnoptions) {
        const value = await feadropdwnoptions.nth(i).textContent();
         console.log(value + "\n" + " ");
         i++;
    }
   
   
   
});